# Balanse
> Balanse is a little demonstrator of a simple messaging infrastructure.
> Developed for the module "Enterprise Architecture" at HE-ARC.
> It exposes a web hook in python that sends messages to a Kafka broker.
> Then a Quarqus app listen to the Kafka topic and stream events to a web app with server sent events.

## Launch services for demonstration

> **WARNING**: The provided docker compose is just for demonstration purpose. There is
> no support for development or production environment (no hot reload, no security, no backup).

```bash
# Clone the repository
# Start docker compose
docker-compose up -d --build
# This will start all databases services, and build each portion of the app.
# The first time will take som time, because it will download all dependencies, and build app containers (you can found Dockerfiles in project dedicated directories).
```

You can now access the app :
- [http://localhost:3000](http://localhost:3000) for the web app dashboard.
- [http://localhost:3337/petzi-webhook](http://localhost:3337/petzi-webhook) for the web hook endpoint.
- [http://localhost:28080](http://localhost:28080) for Kafka UI.
- [http://localhost:8001](http://localhost:8001) for Redis insights.
- [http://localhost:8080/ticket/health](http://localhost:8080/ticket/health) server with server sent event.

## Development

Prerequisites:
- Docker and docker compose
- An IDE with java 21 jdk
- Node js 18+
- Python 3.11

Then, you can start docker-compose-dev.yaml to start database and message broker.

Then you can start each app independently :
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
