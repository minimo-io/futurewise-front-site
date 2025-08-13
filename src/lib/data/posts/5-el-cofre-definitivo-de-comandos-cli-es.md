---
title: 'The Ultimate CLI Command Vault'
excerpt: Dive into a curated arsenal of essential Linux and MacOS commands—each documented, tagged, and ready to supercharge your workflow, from OpenSSL encryption to tmux productivity.
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

# Ultimate CLI Command Vault

_A living reference of essential Linux and CLI commands—fully documented, tagged, and ready for search or inclusion in your Futurewise knowledge base._

## Index

1. [OpenSSL (Symmetric Encryption)](#1-openssl-symmetric-encryption)
2. [File Archiving & Compression](#2-file-archiving--compression)
3. [Text Processing & Search](#3-text-processing--search)
4. [Docker Essentials](#4-docker-essentials)
5. [Tailscale Essentials](#5-tailscale-essentials)
6. [TMUX Productivity](#6-tmux-productivity)

---

## 1. OpenSSL (Symmetric Encryption)

**Tags**: `encryption` `security` `openssl` `aes` `symmetric`

```bash
# Encriptar
openssl enc -aes-256-cbc -salt -pbkdf2 -iter 10000 \
  -in large-file.dat \
  -out large-file.dat.enc

# Desencriptar (mismo valor iter)
openssl enc -aes-256-cbc -salt -pbkdf2 -iter 10000 \
  -in large-file.dat.enc \
  -out large-file-decrypted.dat \
  -d
```

**Usage & Explanation**

- `-aes-256-cbc`: Chooses AES algorithm in CBC mode (secure and widely supported).
- `-salt`: Adds a random salt to the key-derivation function, preventing rainbow-table attacks.
- You’ll be prompted for a passphrase; ensure it is strong and memorable.

**Reference**: [OpenSSL enc documentation](https://www.openssl.org/docs/man1.1.1/man1/openssl-enc.html)

```bash
# Decrypt a previously encrypted file back to plaintext using the same passphrase
openssl enc -d -aes-256-cbc \
  -in yourfile.txt.enc \
  -out yourfile-decrypted.txt
```

**Usage & Explanation**

- `-d`: Stands for decrypt mode.
- The tool will automatically detect the salt and ask for the same passphrase used during encryption.

---

## 2. File Archiving & Compression

**Tags**: `archive` `compression` `tar` `gzip` `zip` `rsync`

```bash
# Create a gzipped tarball of a directory, preserving permissions and symlinks
# -c: create, -z: gzip, -v: verbose, -f: file
tar -czvf archive.tar.gz /path/to/dir
```

**Explanation**

- Ideal for backups or bundling multiple files.
- Use `-p` with `tar` to preserve ownership on restoration as root.

**Reference**: [GNU tar manual](https://www.gnu.org/software/tar/manual/)

```bash
# Extract a tar.gz archive into the current directory
# -x: extract, -z: gzip, -v: verbose, -f: file
tar -xzvf archive.tar.gz
```

```bash
# Zip a directory recursively (faster on small files)
# -r: recursive
zip -r archive.zip /path/to/dir
```

```bash
# Unzip an archive into the current directory
unzip archive.zip
```

```bash
# Efficiently synchronize two directories over SSH
# -a: archive mode, -v: verbose, -z: compress during transfer
rsync -avz /local/dir/ user@host:/remote/dir/
```

**Usage Tips**

- `rsync --dry-run` to preview changes before executing.
- Add `--delete` to remove extraneous files on target.

---

## 3. Text Processing & Search

**Tags**: `grep` `awk` `sed` `find` `xargs` `text`

```bash
# Recursively search for the string “TODO” in all files under the current directory, ignoring binary files
grep -R --exclude-dir={.git,node_modules} "TODO" .
```

- `-R` or `-r`: recursive.
- `--exclude-dir`: skip large folders.

```bash
# Print the second column of a space-delimited file
awk '{print $2}' file.txt
```

- Useful for quick column extraction.
- Adjust field separator with `-F","` for CSV files.

```bash
# In-place replacement of “foo” with “bar” across all lines
sed -i 's/foo/bar/g' file.txt
```

- `-i`: edit file in place.
- Use `-i.bak` to save a backup (e.g. `sed -i.bak …`).

```bash
# Find all .log files larger than 10 megabytes
find /var/log -type f -name "*.log" -size +10M
```

```bash
# Delete files older than 7 days in /tmp
find /tmp -type f -mtime +7 -print0 | xargs -0 rm -f
```

**Reference**: [GNU grep](https://www.gnu.org/software/grep/manual/), [GNU sed](https://www.gnu.org/software/sed/manual/)

---

## 4. Docker Essentials

**Tags**: `docker` `container` `images` `compose`

```bash
# List all running Docker containers (ID, image, command, uptime)
docker ps --format 'table {{.ID}}\t{{.Image}}\t{{.Command}}\t{{.RunningFor}}'
```

```bash
# Pull the latest Nginx image from Docker Hub
docker pull nginx:latest
```

```bash
# Run a container in detached mode, mapping host port 80 to container port 80
docker run -d --name web -p 80:80 nginx:latest
```

```bash
# Follow logs of the “web” container (live streaming)
docker logs -f web
```

```bash
# Execute an interactive shell inside a running container
docker exec -it web /bin/bash
```

```bash
# Remove unused containers, networks, images, and cache
docker system prune -af
```

```bash
# Start services defined in docker-compose.yml in detached mode
docker-compose up -d --build
```

**Tips**

- Tag your images (e.g. `myimage:1.0`) for better version control.
- Use `--rm` in `docker run` for auto-cleanup when container exits.

---

## 5. Tailscale Essentials

**Tags**: `tailscale` `vpn` `ssh` `networking`

```bash
# Install Tailscale on Debian/Ubuntu
curl -fsSL https://tailscale.com/install.sh | sh

# Authenticate and bring up your Tailscale interface with subnet routes enabled
# --accept-routes: use routes advertised by other nodes
# --ssh: enable built-in SSH feature (Tailscale SSH)
tailscale up --accept-routes --ssh
```

**Explanation**

- `tailscale up`: connects your machine to your Tailnet.
- `--ssh`: activates Tailscale’s zero-config SSH server on this node.
- `--accept-routes`: allows your node to use subnet routes advertised by peers.

```bash
# List devices and SSH availability on your Tailnet
tailscale status --ssh
```

```bash
# SSH over Tailscale to another device by its Tailnet hostname
tailscale ssh user@device-name
```

```bash
# Disable Tailscale SSH on this node
tailscale down --ssh
```

**Tips**

- Tailscale SSH uses your existing user accounts and SSH keys.
- ACLs can be configured in your Tailscale admin console to restrict SSH access.

**Reference**: [Tailscale SSH documentation](https://tailscale.com/kb/ssh)

---

## 6. TMUX Productivity

**Tags**: `tmux` `terminal` `multiplexing` `session`

```bash
# Start a new tmux session named "work"
tmux new -s work
```

```bash
# List all tmux sessions
tmux ls
```

```bash
# Attach to an existing session named "work"
tmux attach -t work
```

```bash
# Detach from current session (inside tmux)
# <prefix> defaults to Ctrl+b
<Ctrl+b> d
```

```bash
# Create a new window within a session
<Ctrl+b> c
```

```bash
# Split current pane horizontally
<Ctrl+b> "
```

```bash
# Split current pane vertically
<Ctrl+b> %
```

```bash
# Switch pane (hold prefix then press arrow key)
<Ctrl+b> ←/→/↑/↓
```

```bash
# Resize pane
<Ctrl+b> : resize-pane -L 10
```

```bash
# Kill current pane
<Ctrl+b> x
```

**Tips**

- Customize your `<prefix>` in `~/.tmux.conf` (e.g., set `unbind C-b; set -g prefix C-a`).
- Use plugins like `tmux-resurrect` for session persistence.

**Reference**: [tmux GitHub](https://github.com/tmux/tmux)
