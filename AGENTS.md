# AGENTS.md - Antigravity Agent Guidelines

Welcome to `mario-ezquerro/scope`, an actively maintained fork of Weave Scope.

## Rules & Standards

1. **Architecture & Scope Modes**:
   - Scope binary `prog/scope` can operate in `--mode app`, `--mode probe`, or both simultaneously.
   - Probes gather system metrics, container metadata (Docker/CRI), and network socket connections (`procspy`, `tcptracer-bpf`).
   - App renders topologies and handles browser connections via WebSockets.

2. **Build Workflows**:
   - Backend Go binary: `go build -o prog/scope ./prog`
   - Frontend UI: `cd client && yarn run build`
   - Docker build: Use multi-arch `docker buildx` for `marioezquerro/scope`.

3. **Multi-Arch Docker Target**:
   - DockerHub image: `marioezquerro/scope`
   - Supported architectures: `linux/amd64`, `linux/arm64` (Apple Silicon & Raspberry Pi 64-bit), `linux/arm/v7` (Raspberry Pi 32-bit).

4. **Maintenance & Links**:
   - Always reference `mario-ezquerro/scope` for GitHub issues/PRs and `marioezquerro/scope` for Docker Hub images.
