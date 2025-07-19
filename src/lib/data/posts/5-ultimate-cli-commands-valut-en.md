---
title: 'El Cofre Definitivo de Comandos CLI'
excerpt: Sumérgete en un arsenal curado de comandos esenciales para Linux y MacOS, cada uno documentado, etiquetado y listo para potenciar tu flujo de trabajo, desde la encriptación con OpenSSL hasta la productividad con tmux.
date: 2025-07-18
featured: false
isMain: false
icon: Terminal
authors:
  - name: Nicolas Erramuspe
    avatar: /me.jpeg
  - name: ChatGPT
    avatar: /chatgpt-logo.png
---

# La Bóveda Definitiva de Comandos CLI

_Una referencia viva de comandos esenciales para Linux y CLI, totalmente documentados, etiquetados y listos para buscar o para su inclusión en tu base de conocimientos Futurewise._

## Índice

1. [OpenSSL (Encriptación Simétrica)](#1-openssl-encriptación-simétrica)
2. [Archivado y Compresión de Archivos](#2-archivado-y-compresión-de-archivos)
3. [Procesamiento de Texto y Búsqueda](#3-procesamiento-de-texto-y-búsqueda)
4. [Conceptos Básicos de Docker](#4-conceptos-básicos-de-docker)
5. [Conceptos Básicos de Tailscale](#5-conceptos-básicos-de-tailscale)
6. [Productividad con TMUX](#6-productividad-con-tmux)

---

## 1. OpenSSL (Encriptación Simétrica)

**Etiquetas**: `encryption` `security` `openssl` `aes` `symmetric`

```bash
# Encriptar un archivo con AES-256-CBC (clave de 256 bits) usando una salt aleatoria para la derivación de claves PBKDF2
openssl enc -aes-256-cbc -salt \
  -in yourfile.txt \
  -out yourfile.txt.enc
```

**Uso y Explicación**

- `-aes-256-cbc`: Elige el algoritmo AES en modo CBC (seguro y ampliamente soportado).
- `-salt`: Añade una salt aleatoria al proceso de derivación de la clave, evitando ataques de rainbow tables.
- Se te pedirá una frase de contraseña; asegúrate de que sea fuerte y fácil de recordar.

**Referencia**: [Documentación de OpenSSL enc](https://www.openssl.org/docs/man1.1.1/man1/openssl-enc.html)

```bash
# Desencriptar un archivo previamente encriptado usando la misma frase de contraseña
openssl enc -d -aes-256-cbc \
  -in yourfile.txt.enc \
  -out yourfile-decrypted.txt
```

**Uso y Explicación**

- `-d`: Modo decrypt (desencriptar).
- La herramienta detecta automáticamente la salt y solicita la misma frase usada en la encriptación.

---

## 2. Archivado y Compresión de Archivos

**Etiquetas**: `archive` `compression` `tar` `gzip` `zip` `rsync`

```bash
# Crear un tarball comprimido con gzip de un directorio, preservando permisos y enlaces simbólicos
# -c: create, -z: gzip, -v: verbose, -f: file
tar -czvf archive.tar.gz /path/to/dir
```

**Explicación**

- Ideal para respaldos o agrupar múltiples archivos.
- Usa `-p` con `tar` para preservar la propiedad al restaurar como root.

**Referencia**: [Manual de GNU tar](https://www.gnu.org/software/tar/manual/)

```bash
# Extraer un archivo tar.gz en el directorio actual
# -x: extract, -z: gzip, -v: verbose, -f: file
tar -xzvf archive.tar.gz
```

```bash
# Comprimir un directorio en zip recursivamente (más rápido con archivos pequeños)
# -r: recursive
zip -r archive.zip /path/to/dir
```

```bash
# Descomprimir un archivo zip en el directorio actual
unzip archive.zip
```

```bash
# Sincronizar eficientemente dos directorios a través de SSH
# -a: archive mode, -v: verbose, -z: compress durante la transferencia
rsync -avz /local/dir/ user@host:/remote/dir/
```

**Consejos de Uso**

- `rsync --dry-run` para simular cambios antes de ejecutarlos.
- Añade `--delete` para eliminar archivos extra en el destino.

---

## 3. Procesamiento de Texto y Búsqueda

**Etiquetas**: `grep` `awk` `sed` `find` `xargs` `text`

```bash
# Buscar recursivamente la cadena “TODO” en todos los archivos del directorio actual, ignorando archivos binarios
grep -R --exclude-dir={.git,node_modules} "TODO" .
```

- `-R` o `-r`: recursivo.
- `--exclude-dir`: omite carpetas grandes.

```bash
# Imprimir la segunda columna de un archivo delimitado por espacios
awk '{print $2}' file.txt
```

- Útil para extracción rápida de columnas.
- Ajusta el separador con `-F","` para archivos CSV.

```bash
# Reemplazo en sitio de “foo” por “bar” en todas las líneas
sed -i 's/foo/bar/g' file.txt
```

- `-i`: edita el archivo en lugar.
- Usa `-i.bak` para mantener una copia de respaldo (ej. `sed -i.bak …`).

```bash
# Encontrar archivos .log mayores de 10 megabytes
find /var/log -type f -name "*.log" -size +10M
```

```bash
# Eliminar archivos con más de 7 días en /tmp
find /tmp -type f -mtime +7 -print0 | xargs -0 rm -f
```

**Referencia**: [GNU grep](https://www.gnu.org/software/grep/manual/), [GNU sed](https://www.gnu.org/software/sed/manual/)

---

## 4. Conceptos Básicos de Docker

**Etiquetas**: `docker` `container` `images` `compose`

```bash
# Listar todos los contenedores Docker en ejecución (ID, imagen, comando, tiempo activo)
docker ps --format 'table {{.ID}}\t{{.Image}}\t{{.Command}}\t{{.RunningFor}}'
```

```bash
# Descargar la última imagen de Nginx desde Docker Hub
docker pull nginx:latest
```

```bash
# Ejecutar un contenedor en modo detached, mapeando el puerto 80 del host al 80 del contenedor
docker run -d --name web -p 80:80 nginx:latest
```

```bash
# Seguir los logs del contenedor “web” (streaming en vivo)
docker logs -f web
```

```bash
# Abrir una shell interactiva dentro del contenedor en ejecución
docker exec -it web /bin/bash
```

```bash
# Eliminar contenedores, redes, imágenes y cache no usados
docker system prune -af
```

```bash
# Iniciar servicios definidos en docker-compose.yml en modo detached
docker-compose up -d --build
```

**Consejos**

- Etiqueta tus imágenes (ej. `myimage:1.0`) para mejor control de versiones.
- Usa `--rm` en `docker run` para limpieza automática al salir.

---

## 5. Conceptos Básicos de Tailscale

**Etiquetas**: `tailscale` `vpn` `ssh` `networking`

```bash
# Instalar Tailscale en Debian/Ubuntu
curl -fsSL https://tailscale.com/install.sh | sh

# Autenticar y levantar tu interfaz Tailscale con rutas de subred y SSH activados
# --accept-routes: usa rutas anunciadas por otros nodos
# --ssh: habilita la función SSH integrada de Tailscale
tailscale up --accept-routes --ssh
```

**Explicación**

- `tailscale up`: conecta tu máquina a tu Tailnet.
- `--ssh`: activa el servidor SSH sin configuración adicional en este nodo.
- `--accept-routes`: permite usar rutas de subred anunciadas por pares.

```bash
# Listar dispositivos y disponibilidad de SSH en tu Tailnet
tailscale status --ssh
```

```bash
# Conectarse por SSH a otro dispositivo usando su nombre en Tailnet
tailscale ssh user@device-name
```

```bash
# Desactivar SSH de Tailscale en este nodo
tailscale down --ssh
```

**Consejos**

- Tailscale SSH utiliza tus cuentas de usuario y llaves SSH existentes.
- Las ACLs se configuran en la consola de administración de Tailscale para restringir el acceso SSH.

**Referencia**: [Documentación de Tailscale SSH](https://tailscale.com/kb/ssh)

---

## 6. Productividad con TMUX

**Etiquetas**: `tmux` `terminal` `multiplexing` `session`

```bash
# Iniciar una nueva sesión tmux llamada "work"
tmux new -s work
```

```bash
# Listar todas las sesiones tmux
tmux ls
```

```bash
# Adjuntar a una sesión existente llamada "work"
tmux attach -t work
```

```bash
# Desconectarse de la sesión actual (dentro de tmux)
# <prefix> por defecto es Ctrl+b
<Ctrl+b> d
```

```bash
# Crear una nueva ventana dentro de la sesión
<Ctrl+b> c
```

```bash
# Dividir el panel actual horizontalmente
<Ctrl+b> "
```

```bash
# Dividir el panel actual verticalmente
<Ctrl+b> %
```

```bash
# Cambiar entre paneles (mantén prefix y usa flechas)
<Ctrl+b> ←/→/↑/↓
```

```bash
# Redimensionar el panel
<Ctrl+b> : resize-pane -L 10
```

```bash
# Cerrar el panel actual
<Ctrl+b> x
```

**Consejos**

- Personaliza tu `<prefix>` en `~/.tmux.conf` (ej. `unbind C-b; set -g prefix C-a`).
- Usa plugins como `tmux-resurrect` para persistencia de sesiones.

**Referencia**: [Repositorio de tmux en GitHub](https://github.com/tmux/tmux)
