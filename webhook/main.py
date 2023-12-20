import datetime
import hmac
import uuid

import redis
from flask import Flask, request, make_response, Response
from redis.commands.json.path import Path

app = Flask(__name__)

secret = 'my-super-secret'

# Establish redis connection
r = redis.Redis(host='localhost', port=6379, db=0, decode_responses=True)


@app.post("/petzi-webhook")
def hello_world() -> Response:
    petzi_header = request.headers.get('Petzi-Signature')
    signature_parts = dict(part.split("=") for part in petzi_header.split(","))
    body = request.data

    assert verify_signature(signature_parts['t'], body, signature_parts['v1'])
    assert verify_message_age(signature_parts['t'], 10)

    event = request.json
    save_event_to_database(event)

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


def save_event_to_database(event: dict) -> None:
    """
    Save the event to the database
    :param event:
    """
    r.json().set(f'petzi-ticket:{uuid.uuid4()}', Path.root_path(), event)
