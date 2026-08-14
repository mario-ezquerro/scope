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

## Multi-Architecture Docker Builds

Official Docker Hub image: `marioezquerro/scope:latest`

Supported Architectures:
- `linux/amd64` (x86_64)
- `linux/arm64` (Apple Silicon M1-M4, Raspberry Pi 64-bit OS)
- `linux/arm/v7` (Raspberry Pi 32-bit OS)

Building Multi-Arch Images with Docker Buildx:
```bash
docker buildx build \
  --platform linux/amd64,linux/arm64,linux/arm/v7 \
  -t marioezquerro/scope:latest \
  -f docker/Dockerfile.scope . --push
```
