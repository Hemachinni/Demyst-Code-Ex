# DockerTryouts

Base projects of Spring Boot and Angular UI.
Built to understand Docker and Docker Compose and communication between docker containers

# How to Run Individually

-- Build Server image

docker build -t demo.

-- Run Service image

docker run --name demo -p 80:80 -t demo

-- Inspect Docker container to find ip address to configure in UI

docker inspect -f "{{ .NetworkSettings.IPAddress }}" <containerid>

-- Build Client image

docker build --no-cache -t demo-ui .

-- Run Client image

docker run --name demo-ui -p 4400:80 -t demo-ui:latest

# How to Run with each other

docker-compose up
