# Webhook

This folder contains a little flask app that expose a webhook.

## Start app

```shell script
# Create and activate python virtual env
python3 -m venv .venv
source .venv/bin/activate

# Install dependencies (from pyproject.toml)
pip install .

# Start flask app
flask --app main run # or python3 main.py
```