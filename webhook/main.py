import datetime
import hmac
import json
import uuid

import redis
from kafka import KafkaProducer
from flask import Flask, request, make_response, Response
from redis.commands.json.path import Path

from create_redis_index_for_tickets import create_redis_index_for_tickets

app = Flask(__name__)

secret = 'my-super-secret'

# Establish redis connection
# Switch below comment line depending on if you run app from the container or locally

create_redis_index_for_tickets(r)


# Kafka connection
kafka_producer = KafkaProducer(
    # Switch below comment line depending on if you run app from the container or locally
    bootstrap_servers=['kafka:29092'],
    # bootstrap_servers=['localhost:9092'],
    request_timeout_ms=10000,
    value_serializer=lambda x: json.dumps(x).encode('utf-8')
)


@app.route("/")
def health() -> str:
    return "Webhook server is running!"


@app.post("/petzi-webhook")
def hello_world() -> Response:
    petzi_header = request.headers.get('Petzi-Signature')
    signature_parts = dict(part.split("=") for part in petzi_header.split(","))
    body = request.data

    assert verify_signature(signature_parts['t'], body, signature_parts['v1'])
    assert verify_message_age(signature_parts['t'], 10)

    event = request.json
    event['details']['ticket']['price']['amount'] = float(event['details']['ticket']['price']['amount'])
    ticket_id = save_event_to_database(event)
    notify_event_to_message_broker(ticket_id, event)

    response = make_response()
    response.status_code = 200
    return response


def verify_signature(timestamp: str, body: bytes, signature: str) -> bool:
    body_to_sign = timestamp.encode() + '.'.encode() + body
    expected_signature = hmac.new(
        secret.encode(),
        body_to_sign,
        "sha256"
    ).hexdigest()
    return hmac.compare_digest(
        expected_signature,
        signature
    )


def verify_message_age(message_age: str, tolerance: int) -> bool:
    time_delta = datetime.datetime.now() - datetime.datetime.fromtimestamp(int(message_age))
    return time_delta.total_seconds() <= tolerance


def save_event_to_database(event: dict) -> uuid.UUID:
    """
    Save the event to the database
    :param event:
    """
    event_id = uuid.uuid4()
    r.json().set(f'petzi-ticket:{event_id}', Path.root_path(), event)
    return event_id


def notify_event_to_message_broker(event_id: uuid.UUID, event: dict) -> None:
    """
    Notify the event to the message broker
    :param event_id:
    :param event:
    """
    message_payload = {
        'id': str(event_id),
        'type': event['details']['ticket']['type'],
        'redis_key': 'petzi-ticket',
        'buyer': f"{event['details']['buyer']['firstName']} {event['details']['buyer']['lastName']}",
        'buyer_npa': int(event['details']['buyer']['postcode']),
        'petzi_number': event['details']['ticket']['number'],
        'name': event['details']['ticket']['event'],
        'price': event['details']['ticket']['price']['amount']
    }
    future = kafka_producer.send('tickets', message_payload)
    future.get(timeout=10)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3337, debug=True)
