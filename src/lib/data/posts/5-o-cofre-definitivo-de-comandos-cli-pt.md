---
title: 'O Cofre Definitivo de Comandos CLI'
excerpt: Mergulhe em um arsenal curado de comandos essenciais para Linux e MacOS, cada um documentado, etiquetado e pronto para potencializar seu fluxo de trabalho, desde criptografia com OpenSSL até produtividade com tmux.
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

## 1. OpenSSL (Criptografia Simétrica)

**Tags**: `encryption` `security` `openssl` `aes` `symmetric`

```bash
# Criptografar
openssl enc -aes-256-cbc -salt -pbkdf2 -iter 10000 \
  -in large-file.dat \
  -out large-file.dat.enc

# Decifrar (mesmo valor iter)
openssl enc -aes-256-cbc -salt -pbkdf2 -iter 10000 \
  -in large-file.dat.enc \
  -out large-file-decrypted.dat \
  -d
```

**Referência**: [Documentação do OpenSSL enc](https://www.openssl.org/docs/man1.1.1/man1/openssl-enc.html)

## 2. Arquivamento e Compressão de Arquivos

**Tags**: `archive` `compression` `tar` `gzip` `zip` `rsync`

```bash
# Criar um tarball comprimido com gzip de um diretório, preservando permissões e links simbólicos
# -c: create, -z: gzip, -v: verbose, -f: file
tar -czvf archive.tar.gz /path/to/dir
```

**Explicação**

- Ideal para backups ou agrupar vários arquivos.
- Use `-p` com `tar` para preservar propriedade ao restaurar como root.

**Referência**: [Manual do GNU tar](https://www.gnu.org/software/tar/manual/)

```bash
# Extrair um arquivo tar.gz no diretório atual
# -x: extract, -z: gzip, -v: verbose, -f: file
tar -xzvf archive.tar.gz
```

```bash
# Compactar um diretório em zip recursivamente
# -r: recursive
zip -r archive.zip /path/to/dir
```

```bash
# Descompactar um arquivo zip no diretório atual
unzip archive.zip
```

```bash
# Sincronizar dois diretórios via SSH eficientemente
# -a: archive mode, -v: verbose, -z: compress
rsync -avz /local/dir/ user@host:/remote/dir/
```

**Dica**

- Use `rsync --dry-run` para simular antes de executar.
- Adicione `--delete` para remover arquivos extras no destino.

---

## 3. Processamento de Texto e Busca

**Tags**: `grep` `awk` `sed` `find` `xargs` `text`

```bash
# Buscar recursivamente “TODO” em todos os arquivos, ignorando binários
grep -R --exclude-dir={.git,node_modules} "TODO" .
```

- `-R` ou `-r`: recursivo
- `--exclude-dir`: pula pastas grandes

```bash
# Imprimir a segunda coluna de um arquivo delimitado por espaços
awk '{print $2}' file.txt
```

- Útil para extração de colunas
- Ajuste separador com `-F","` para CSV

```bash
# Substituir “foo” por “bar” em todas as linhas (in-place)
sed -i 's/foo/bar/g' file.txt
```

- `-i`: edita o arquivo diretamente
- Use `-i.bak` para criar backup (ex.: `sed -i.bak …`)

```bash
# Encontrar arquivos .log maiores que 10MB
find /var/log -type f -name "*.log" -size +10M
```

```bash
# Remover arquivos com mais de 7 dias em /tmp
find /tmp -type f -mtime +7 -print0 | xargs -0 rm -f
```

**Referência**: [GNU grep](https://www.gnu.org/software/grep/manual/), [GNU sed](https://www.gnu.org/software/sed/manual/)

---

## 4. Fundamentos do Docker

**Tags**: `docker` `container` `images` `compose`

```bash
# Listar contêineres em execução (ID, imagem, comando, tempo ativo)
docker ps --format 'table {{.ID}}\t{{.Image}}\t{{.Command}}\t{{.RunningFor}}'
```

```bash
# Baixar a imagem mais recente do Nginx
docker pull nginx:latest
```

```bash
# Executar contêiner em modo detached, mapeando porta 80
docker run -d --name web -p 80:80 nginx:latest
```

```bash
# Acompanhar logs do contêiner “web”
docker logs -f web
```

```bash
# Abrir shell dentro do contêiner
docker exec -it web /bin/bash
```

```bash
# Limpar contêineres, redes, imagens e cache não usados
docker system prune -af
```

```bash
# Subir serviços do docker-compose em detached
docker-compose up -d --build
```

**Dica**

- Etiquete suas imagens (ex.: `myimage:1.0`).
- Use `--rm` em `docker run` para limpeza automática.

---

## 5. Fundamentos do Tailscale

**Tags**: `tailscale` `vpn` `ssh` `networking`

```bash
# Instalar Tailscale no Debian/Ubuntu
curl -fsSL https://tailscale.com/install.sh | sh

# Autenticar e ativar Tailscale com rotas de sub-rede e SSH
# --accept-routes: usa rotas anunciadas por nós
# --ssh: habilita SSH integrado
tailscale up --accept-routes --ssh
```

**Explicação**

- `tailscale up`: conecta ao seu Tailnet
- `--ssh`: ativa servidor SSH sem configuração extra
- `--accept-routes`: usa rotas de sub-rede anunciadas por outros nós

```bash
# Listar dispositivos e status de SSH
tailscale status --ssh
```

```bash
# Conectar por SSH a outro dispositivo no Tailnet
tailscale ssh user@device-name
```

```bash
# Desativar SSH do Tailscale
tailscale down --ssh
```

**Dica**

- Tailscale SSH usa suas chaves e usuários existentes.
- Configure ACLs na console Tailscale para restringir acesso.

**Referência**: [Tailscale SSH](https://tailscale.com/kb/ssh)

---

## 6. Produtividade com TMUX

**Tags**: `tmux` `terminal` `multiplexing` `session`

```bash
# Iniciar sessão tmux chamada "work"
tmux new -s work
```

```bash
# Listar sessões
tmux ls
```

```bash
# Anexar à sessão "work"
tmux attach -t work
```

```bash
# Desconectar da sessão (prefixo Ctrl+b)
<Ctrl+b> d
```

```bash
# Nova janela
<Ctrl+b> c
```

```bash
# Dividir painel horizontal
<Ctrl+b> "
```

```bash
# Dividir painel vertical
<Ctrl+b> %
```

```bash
# Mudar de painel (prefixo + setas)
<Ctrl+b> ←/→/↑/↓
```

```bash
# Redimensionar painel
<Ctrl+b> : resize-pane -L 10
```

```bash
# Fechar painel
<Ctrl+b> x
```

**Dica**

- Altere o `<prefix>` em `~/.tmux.conf` (ex.: `unbind C-b; set -g prefix C-a`).
- Use plugins como `tmux-resurrect` para salvar sessões.

**Referência**: [GitHub tmux](https://github.com/tmux/tmux)
