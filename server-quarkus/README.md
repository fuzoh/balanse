# server-quarkus

This project uses [Quarkus](https://quarkus.io/).

## Running the application in dev mode

You can run your application in dev mode that enables live coding using:
```shell script
./gradlew quarkusDev
```

When Quarkus is launched, you can access :
- Dev UI : http://localhost:8080/q/dev/
- Swagger UI : http://localhost:8080/q/swagger-ui/
- Health check : http://localhost:8080/q/health/
- Readiness check : http://localhost:8080/q/health/ready

## Build and running the application

**This build is for demonstration purposes only. Not production ready.**
```shell script
docker build -f src/main/docker/Dockerfile.jvm -t quarkus/server-quarkus-jvm .
docker run -p 8080:8080 quarkus/server-quarkus-jvm
```