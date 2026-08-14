# Scope - Troubleshooting & Monitoring for Docker & Kubernetes

[![Build & Multi-Arch Docker](https://github.com/mario-ezquerro/scope/actions/workflows/docker-multiarch.yml/badge.svg)](https://github.com/mario-ezquerro/scope/actions/workflows/docker-multiarch.yml)
[![Go Report Card](https://goreportcard.com/badge/github.com/mario-ezquerro/scope)](https://goreportcard.com/report/github.com/mario-ezquerro/scope)
[![Docker Pulls](https://img.shields.io/docker/pulls/marioezquerro/scope.svg?maxAge=604800)](https://hub.docker.com/r/marioezquerro/scope/)

> **Maintained Fork Notice**: This repository is an actively maintained fork of Weave Scope by [Mario Ezquerro](https://github.com/mario-ezquerro). It includes updated dependencies, multi-architecture Docker image support (**x86_64**, **Apple Silicon / ARM64**, and **Raspberry Pi / ARM64 & ARMv7**), and ongoing bug fixes.

Scope automatically generates a map of your application, enabling you to intuitively understand, monitor, and control your containerized, microservices-based application.

## Multi-Architecture Support

Official Docker Hub images are available at [`marioezquerro/scope`](https://hub.docker.com/r/marioezquerro/scope), supporting:
- **x86_64 / amd64** (Standard Linux servers and desktop environments)
- **arm64** (Apple Silicon M1/M2/M3/M4 & Raspberry Pi 64-bit OS)
- **arm/v7** (Raspberry Pi 32-bit OS)

## Understand your Docker containers in real time

<img src="imgs/topology.png" width="200" alt="Map your architecture" align="right">

Choose an overview of your container infrastructure, or focus on a specific microservice. Easily identify and correct issues to ensure the stability and performance of your containerized applications.

## Contextual details and deep linking

<img src="imgs/selected.png" width="200" alt="Focus on a single container" align="right">

View contextual metrics, tags, and metadata for your containers. Effortlessly navigate between processes inside your container to hosts your containers run on, arranged in expandable, sortable tables. Easily find the container using the most CPU or memory for a given host or service.

## Interact with and manage containers

<img src="imgs/terminals.png" width="200" alt="Launch a command line." align="right">

Interact with your containers directly: pause, restart, and stop containers. Launch a command line. All without leaving the scope browser window.

## Extend and customize via plugins

Add custom details or interactions for your hosts, containers, and/or processes by creating Scope plugins.

## <a name="getting-started"></a>Getting Started

**Ensure your computer is behind a firewall that blocks port 4040**, then run:

```console
sudo curl -L https://raw.githubusercontent.com/mario-ezquerro/scope/master/scope -o /usr/local/bin/scope
sudo chmod a+x /usr/local/bin/scope
scope launch
```

This script automatically downloads and runs the appropriate multi-arch Scope image (`marioezquerro/scope:latest`) from Docker Hub.
Now, open your web browser to **<http://localhost:4040>**.

### Running directly with Docker

```console
docker run -d --name=weavescope \
  --privileged \
  --net=host \
  --pid=host \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /sys/kernel/debug:/sys/kernel/debug \
  marioezquerro/scope:latest
```

## <a name="help"></a>Reach Out & Contributing

We welcome questions, feedback, and contributions!

- Docs & Information
  - Check out the [frequently asked questions](/site/faq.md)
  - Learn more about how the [Scope community operates](GOVERNANCE.md)
- Contributing
  - Find out how to [contribute to Scope](CONTRIBUTING.md)
  - [File an issue](https://github.com/mario-ezquerro/scope/issues/new) or make a pull request on [mario-ezquerro/scope](https://github.com/mario-ezquerro/scope).

We follow the [CNCF Code of Conduct](CODE-OF-CONDUCT.md).

## License

Scope is licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) for the full license text.  
Find more details about the licenses of vendored code in [VENDORED_CODE.md](VENDORED_CODE.md).

