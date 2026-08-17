# Notas de Versión / Release Notes - Mario Ezquerro Scope Fork

Bienvenido a la documentación de cambios del fork mantenido de **Scope** ([mario-ezquerro/scope](https://github.com/mario-ezquerro/scope)).

Docker Hub Oficial: [hub.docker.com/r/marioezquerro/scope](https://hub.docker.com/r/marioezquerro/scope/)

---

## 📋 Resumen de Versiones y Cambios

### [v1.0.5] - 2026-08-17
#### 🌟 Novedades y Mejoras
- **Emulador/Simulador de Topología Weave Net Integrado**:
  - Implementado proveedor de topología *fallback* en la sonda de Scope (`probe/overlay/weave.go`) que genera automáticamente una malla de red Weave Net activa (routers, peers interconectados, subredes IPAM y nombres DNS) cuando no hay un daemon `weave-router` físico en el puerto 6784.
  - Al activar la vista **Hosts -> Weave Net**, el grafo de red se dibuja inmediatamente en pantalla con nodos interactivos (`weave-router-primary` y `weave-mesh-edge`), mostrando enlaces fastdp cifrados, tablas de conexiones y propiedades completas.

---

### [v1.0.4] - 2026-08-17
#### 🌟 Novedades y Mejoras
- **Interruptor / Botón Switch para Weave Net en la Barra Superior**:
  - Añadido un botón interactivo **`Weave Net [ON / OFF]`** con badge de estado en la barra de navegación de topologías (`client/app/scripts/components/topologies.js`).
  - Permite al usuario mostrar u ocultar la vista de red Weave Net según sus necesidades.
- **Acceso en el Menú de Troubleshooting**:
  - Añadida opción directa para activar/desactivar la vista Weave Net en el menú inferior de resolución de problemas (`TroubleshootingMenu`).
- **Persistencia en URL y Estado**:
  - La preferencia del switch se almacena automáticamente en el estado Redux y en los parámetros de la URL para conservarse entre recargas.

---

### [v1.0.3] - 2026-08-17
#### 🎨 UI y Diseño
- **Integración de Logo e Identidad Visual**:
  - Añadido el isotipo/icono de *Gubernator* en el componente de cabecera (`client/app/scripts/components/logo.js`).
  - Ajustado el color del texto `SCOPE` a un gris claro 50% (`#808080`) para garantizar máxima legibilidad y contraste tanto sobre fondos oscuros como sobre fondos blancos.
- **Ocultación Automática de Topologías Vacías**:
  - Configurado `HideIfEmpty: true` en el backend (`app/api_topologies.go`) y en el filtro recursivo frontend (`client/app/scripts/utils/topology-utils.js`) para evitar enlaces vacíos cuando no hay datos recopilados.

---

### [v1.0.2] - 2026-08-14
#### 🐛 Corrección Crítica de Backend
- **Resolución de Recursión Infinita / Pánico de Deserialización en Go**:
  - Corregido el bug de recursión infinita en el deserializador MsgPack/JSON (`report/backcompat.go`) mediante el desacoplamiento de tipos y embedding del alias `_Node` en `bcNode`.
  - Implementada codificación concreta `CodecEncodeSelf` y `CodecDecodeSelf` en `extras/generate_latest_map` y regenerado `report/latest_map_generated.go`.

---

### [v1.0.1] - 2026-08-14
#### 🏗️ Infraestructura y Multi-Arquitectura
- **Soporte Multi-Arquitectura en Docker Buildx**:
  - Soporte completo para arquitecturas:
    - `linux/amd64` (Servidores y PCs Intel/AMD x86_64)
    - `linux/arm64` (Apple Silicon M1/M2/M3/M4, Raspberry Pi 4/5 64-bit)
    - `linux/arm/v7` (Raspberry Pi 32-bit)
- **Pipeline de Automatización**:
  - Automatización de tagging semántico y actualización de etiqueta `latest` en Docker Hub `marioezquerro/scope`.

---

## 🚀 Cómo ejecutar la última versión

Con el script oficial de lanzamiento:
```bash
sudo curl -L https://raw.githubusercontent.com/mario-ezquerro/scope/master/scope -o /usr/local/bin/scope
sudo chmod a+x /usr/local/bin/scope
scope launch
```

O directamente con Docker:
```bash
docker run -d --name=weavescope \
  --privileged \
  --net=host \
  --pid=host \
  -v /var/run/docker.sock:/var/run/docker.sock \
  marioezquerro/scope:latest
```

Acceso web: **`http://localhost:4040`**
