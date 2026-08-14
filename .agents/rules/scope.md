# Scope Development & Architecture Rules

Guidelines for AI assistants (Antigravity) and developers working on the `mario-ezquerro/scope` repository.

## Architecture Overview

Scope consists of a Go backend and a React/JS frontend, running in containerized environments:

1. **Probe (`probe/`)**:
   - Collects host, process, container (Docker/CRI), network topology, and TCP connection data.
   - Uses `/proc` scanning, netlink, and eBPF (`tcptracer-bpf`) for network connection tracing on Linux.
2. **App (`app/`, `render/`, `report/`)**:
   - Aggregates report topology structures sent by probes into consolidated graphs and trees.
   - Serves HTTP REST/WebSocket APIs for client connections on port 4040.
3. **UI Client (`client/`)**:
   - Built with React, Redux, and D3 canvas/SVG visualizers.
   - Assets are compiled using `yarn run build` and embedded into `prog/staticui/staticui.go` via Go code generator (`esc`).
4. **Single-Binary & Docker Packaging**:
   - Main entry point is `prog/scope` which can run as `--mode app`, `--mode probe`, or both.
   - Containerized in `docker/Dockerfile.scope` supervised by `runsvinit`.

## Development Guidelines

### Building & Testing

- **Backend compilation**: `make static && go build -o prog/scope ./prog`
- **Full local build**: `make`
- **Run tests**: `make tests` or `go test ./...`
- **Frontend live dev server**: `cd client && yarn install && yarn start` (served on port 4042)
- **Frontend build**: `cd client && yarn run build`

### Code Standards

- **Go**:
  - Keep functions focused and well-documented.
  - Follow idiomatic Go guidelines and handle all errors explicitly.
  - Preserve backward compatibility for REST and WebSocket endpoints.
- **Frontend (JS/React)**:
  - Keep UI clean and responsive.
  - Test React components with `cd client && yarn test`.

## Multi-Architecture Docker Builds & Version Control Rules

Official Docker Hub Repository: [`https://hub.docker.com/r/marioezquerro/scope/`](https://hub.docker.com/r/marioezquerro/scope/) (`marioezquerro/scope`)

### Version Control & Release Policy
- **Versioning Standard**: Always maintain strict semantic versioning tags (e.g. `v1.0.0`, `v1.0.1`, `v1.1.0`) alongside the `latest` tag when building release images.
- **Docker Hub Push Requirement**: Whenever creating a release or compiling new builds for deployment, always build and push multi-architecture images to `marioezquerro/scope`.
- **Supported Architectures**:
  - `linux/amd64` (x86_64 servers & desktops)
  - `linux/arm64` (Apple Silicon M1-M4, Raspberry Pi 64-bit OS)
  - `linux/arm/v7` (Raspberry Pi 32-bit OS)

### Multi-Arch Build & Push Command
```bash
docker buildx build \
  --platform linux/amd64,linux/arm64,linux/arm/v7 \
  -t marioezquerro/scope:latest \
  -t marioezquerro/scope:v1.0.0 \
  -f docker/Dockerfile.scope . --push
```

