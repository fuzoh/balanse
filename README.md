# Balanse
> Balanse is a little demonstrator of a simple messaging infrastructure.
> Developed for the module "Enterprise Architecture" at HE-ARC.
> It exposes a web hook in python that sends messages to a Kafka broker.
> Then a Quarqus app listen to the Kafka topic and stream events to a web app with server sent events.

**Requirements**: Docker and docker compose

## Launch services for demonstration

> **WARNING**: The provided docker compose is just for demonstration purpose. There is
> no support for development or production environment (no hot reload, no security, no backup).

```shell script
# Clone the repository
# Start docker compose
docker-compose up -d --build
# This will start all databases services, and build each portion of the app.
# The first time will take som time, because it will download all dependencies, and build app containers (you can found Dockerfiles in project dedicated directories). About 5 minutes on modest hardware.
```

You can now access the app :
- [http://localhost:3000](http://localhost:3000) for the web app dashboard.
- [http://localhost:3337/petzi-webhook](http://localhost:3337/petzi-webhook) for the web hook endpoint.
- [http://localhost:28080](http://localhost:28080) for Kafka UI.
- [http://localhost:8001](http://localhost:8001) for Redis insights.
- [http://localhost:8080/q/health](http://localhost:8080/ticket/health) server with server sent event.

### Test with webhook simulator

```shell script
python3 petzi_simulator.py http://127.0.0.1:3337/petzi-webhook my-super-secret
```

## Development

Prerequisites:
- Docker and docker compose
- An IDE with java 21 jdk
- Node js 18+
- Python 3.11

Then, you can start docker-compose-dev.yaml to start database and message broker.

Then you can start each app independently depending on dev needs, see README.md in each app directory :
- [dashboard](dashboard/README.md)
- [webhook](webhook/README.md)
- [server-quarkus](server-quarkus/README.md)