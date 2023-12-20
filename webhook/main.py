import datetime
import hmac

from flask import Flask, request, make_response, Response

app = Flask(__name__)

secret = 'my-super-secret'


@app.post("/petzi-webhook")
def hello_world() -> Response:
    petzi_header = request.headers.get('Petzi-Signature')
    signature_parts = dict(part.split("=") for part in petzi_header.split(","))
    body = request.data

    assert verify_signature(signature_parts['t'], body, signature_parts['v1'])
    assert verify_message_age(signature_parts['t'], 10)

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
