# Balanse
> Balanse is a little demonstrator of a simple messaging infrastructure.
> Developped for the module "Enterprise Architecture" at HE-ARC.
> It exposes a webhook in python that sents messages to a kafka broker.
> Then a quarqus app listen to the kafka topic and stream events to a web app with server sent events.

## Lauch services for demonstration

> **WARNING**: The provided docker compose is just for demonstration purpose. There is
> no support for development or production environment (no hot reload, no security, no backup).

```bash
# Clone the repository
# Start docker compose
docker-compose up -d --build
# This will start all databases services, and build each portion of the app.
# The first time will take som time, because it will download all dependencies, and build app containers (you can found Dockerfiles in project dedicated directories).
```

You can now access app :
- [http://localhost:3000](http://localhost:3000) for the web app dashboard.
- [http://localhost:3337/petzi-webhook](http://localhost:3337/petzi-webhook) for the webhook endpoint.
- [http://localhost:28080](http://localhost:28080) for kafka UI.
- [http://localhost:8001](http://localhost:8001) for redis insights.
- **Quarkus app doesn’t have compose service for now.**

## Development

Pre-requisites:
- Docker and docker compose
- An IDE with java 21 jdk
- Node js 18+
- Python 3.11

Then, you can start docker-compose-dev.yaml to start database and message broker.

The you can start each app independently :
```
# Webhook
cd webhook
python3 -m venv .venv
source .venv/bin/activate
python main.py

# Quarkus app
cd server-quarkus
./gradlew quarkusDev

# Web app dashboard
cd dashboard
pnpm i # or npm i
pnpm dev # or npm run dev
```
