# Docker

Creates a virtual environment of your OS to allow deployment of software seamlessly. 

It tends to be faster than running a entire virtual machine because it automizes using a single linux instance; however, would be slower if you can build to your OS natively.

Made to package and run an application in a loosely isolated environment called a **container**.

## Breakdown

Consists of 3 components:

1. **Docker daemon**, *dockerd*, manages Docker containers.
2. **Objects**: Docker objects are used to assemble an application in Docker.
3. **Registries**: A Docker registry is a repository for Docker images 

## Installation

- Desktop [Installation](https://docs.docker.com/get-started/get-docker/)
- [Getting Started](https://docs.docker.com/get-started/workshop/02_our_app/)

## Tools

- **Docker Compose**: running multi-container Docker applications, but not necessary if application only uses a single container. 
- **Docker Swarm**
- **Docker Volume**

## Local Development


**Docker Compose**

With a single command, you create and start all the services from your configuration YAML file

To build and run image:
```
$ docker-compose up
```

To rebuild:
```
$ docker-compose up --build
``` 
or for a clean slate:
```
$ docker-compose down --volumes --remove-orphans
$ docker-compose up --build
```

## Deployment

First, you need to create a **Dockerfile** which defines build instructions. It defines how to build a *Docker image*, being similar to *requirements.txt* in python or *cmake* in C/C++. 
```
$ touch Dockerfile
```

- This file is unique to each container framework/library (cannot generalize file content).
- After generating, add content through researching

Build the project by running the following command, swapping out DOCKER_USERNAME with your username:

```
$ docker build -t DOCKER_USERNAME/getting-started-todo-app .
```

To verify the image exists locally, you can use the docker image ls command:
```
$ docker image ls
```

The following command runs an container, attaches interactively to your local command-line session:

```
$ docker run -d -p 127.0.0.1:3000:3000 docker/getting-started-todo-app
```
- The -d flag (short for --detach) runs the container in the background.
    - Don't add, I like messages in terminal
- `3000:3000` is the `<host_port>:<container_port>`
    - “Hey Docker, if someone hits localhost:3000 on my machine, forward that to port 3000 inside the container.”
    - So they can be different

After a few seconds, open your web browser to http://localhost:3000. You should see your app.

Run the docker ps command in a terminal to list your containers.
```
$ docker ps
```

To push the image, use the docker push command. Be sure to replace DOCKER_USERNAME with your username:
```
$ docker push DOCKER_USERNAME/getting-started-todo-app
```

Depending on your upload speeds, this may take a moment to push.



## Citations

- https://en.wikipedia.org/wiki/Docker_(software)