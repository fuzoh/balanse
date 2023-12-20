import datetime
import hmac
import json
import uuid

import redis
from confluent_kafka import Producer
from flask import Flask, request, make_response, Response
from redis.commands.json.path import Path

app = Flask(__name__)

secret = 'my-super-secret'

# Establish redis connection
r = redis.Redis(host='localhost', port=6379, db=0, decode_responses=True)

# Kafka connection
kafka_producer = Producer({
    'bootstrap.servers': 'localhost:9092',
    'client.id': 'flask-petzi-webhook'
})


@app.post("/petzi-webhook")
def hello_world() -> Response:
    petzi_header = request.headers.get('Petzi-Signature')
    signature_parts = dict(part.split("=") for part in petzi_header.split(","))
    body = request.data

    assert verify_signature(signature_parts['t'], body, signature_parts['v1'])
    assert verify_message_age(signature_parts['t'], 10)

    event = request.json
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
    r.json().set(f'petzi-ticket:{id}', Path.root_path(), event)
    return event_id


def notify_event_to_message_broker(event_id: uuid.UUID, event: dict) -> None:
    """
    Notify the event to the message broker
    :param event_id:
    :param event:
    """
    message_payload = {
        'id': str(event_id),
        'redis_key': 'petzi-ticket',
        'buyer': f"{event['details']['buyer']['firstName']} {event['details']['buyer']['lastName']}",
        'buyer_npa': event['details']['buyer']['postcode'],
        'petzi_number': event['details']['ticket']['number'],
        'name': event['details']['ticket']['event'],
        'price': event['details']['ticket']['price']['amount']
    }
    kafka_producer.produce('tickets', json.dumps(message_payload))
