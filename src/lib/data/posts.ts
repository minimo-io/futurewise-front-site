import { ChartNoAxesCombined, Braces, Terminal } from '@lucide/svelte';

export const posts = {
	en: [
		{
			title: "Beating Google's Pagespeed with SvelteKit on e-Commerce",
			excerpt: "So we beat the Thing, and we created a lot of value for our client. Their e-commerce is now shiny, efficient, thing that load fast, passing Google’s PageSpeed tyranny tests, much better than any of their big-budgeted competitors. Check this out!",
			content: "<p>So we have a client, it&#39;s called <a href=\"http://braaay.com\">Braaay</a>\nIt&#39;s a wine business, in Sao Paulo, and e-commerce operation and what not.</p>\n<p>Ok so... we setup a kind of ambitious goal: To move our client from a Wordpress to a Headless Sveltekit front-end while still keeping their Woocommerce backend so we don&#39;t cause havok among people operating the platform, in order to (drastically ::promise::) improve the load times.</p>\n<p>The SvekteKit front-end is hosted at Vercel.\n<br />\nWe are using the <a href=\"https://www.wpgraphql.com/\">WPGraphQL</a> plugin for Wordpress to use our previous instance as a GraphQL server + <a href=\"https://woographql.com/\">WooGraphQL</a> plugin to get Woocommerce endpoints for queries and mutations.</p>\n<p>👋 <em>We plan to contribute to this GraphQL over Wordpress crowd in the future, with some of the plugin we developed</em></p>\n<p><em>(To be continued...)</em></p>\n",
			date: "August 30",
			slug: "/en/blog/beating-google-pagespeed-with-sveltekit",
			isMain: false,
			icon: ChartNoAxesCombined,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Claude AI",
					avatar: "/claude-logo.png"
				}
			]
		},
		{
			title: "Puppeteer & EasyOCR for Slots Automation",
			excerpt: "This post explores how we can automate slot games using Puppeteer to control the game's interface and EasyOCR for real-time data extraction. Puppeteer acts as our programmatic \"player,\" navigating the game, initiating spins, and interacting with elements just like a human would. Meanwhile, EasyOCR provides the critical visual intelligence, reading key information directly from the screen, such as spin results, credit balances, and bonus indicators.",
			content: "<p>This was an experiment inspired by <a href=\"https://www.youtube.com/watch?v=iz9lUMSQBfY\">this John Carmack talk</a>, on Upper Bound 2025, about &quot;a robot that plays a real Atari console using a camera and a robotic joystick.&quot;</p>\n<p>The goal of this experiment was to proove that with the appropiate AI API access it is possible to:</p>\n<ol>\n<li>Automate the gameplay for slots games at (fun) iGaming (using <a href=\"https://github.com/microsoft/playwright-python\">Playwright for Python</a>).</li>\n<li>Extract jackpots, scores, and balances (using <a href=\"https://github.com/JaidedAI/EasyOCR\">EasyOCR</a>.)</li>\n<li>Send those captured values to an AI Ollama model for gameplay suggestions (using censored models like <a href=\"https://ollama.com/library/gemma3n\">gemma3n</a> or uncensored models at HuggingFace).</li>\n</ol>\n",
			date: "August 29",
			slug: "/en/blog/playwright-and-easyocr-for-igaming-automation",
			isMain: false,
			icon: Braces,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "El Cofre Definitivo de Comandos CLI",
			excerpt: "Sumérgete en un arsenal curado de comandos esenciales para Linux y MacOS, cada uno documentado, etiquetado y listo para potenciar tu flujo de trabajo, desde la encriptación con OpenSSL hasta la productividad con tmux.",
			content: "<h2>1. OpenSSL (Encriptación Simétrica)</h2>\n<p><strong>Etiquetas</strong>: <code>encryption</code> <code>security</code> <code>openssl</code> <code>aes</code> <code>symmetric</code></p>\n<pre><code class=\"language-bash\"># Encrypt\nopenssl enc -aes-256-cbc -salt -pbkdf2 -iter 10000 \\\n  -in large-file.dat \\\n  -out large-file.dat.enc\n\n# Decrypt (same iter value)\nopenssl enc -aes-256-cbc -salt -pbkdf2 -iter 10000 \\\n  -in large-file.dat.enc \\\n  -out large-file-decrypted.dat \\\n  -d\n</code></pre>\n<p><strong>Referencia</strong>: <a href=\"https://www.openssl.org/docs/man1.1.1/man1/openssl-enc.html\">Documentación de OpenSSL enc</a></p>\n<h2>2. Archivado y Compresión de Archivos</h2>\n<p><strong>Etiquetas</strong>: <code>archive</code> <code>compression</code> <code>tar</code> <code>gzip</code> <code>zip</code> <code>rsync</code></p>\n<pre><code class=\"language-bash\"># Crear un tarball comprimido con gzip de un directorio, preservando permisos y enlaces simbólicos\n# -c: create, -z: gzip, -v: verbose, -f: file\ntar -czvf archive.tar.gz /path/to/dir\n</code></pre>\n<p><strong>Explicación</strong></p>\n<ul>\n<li>Ideal para respaldos o agrupar múltiples archivos.</li>\n<li>Usa <code>-p</code> con <code>tar</code> para preservar la propiedad al restaurar como root.</li>\n</ul>\n<p><strong>Referencia</strong>: <a href=\"https://www.gnu.org/software/tar/manual/\">Manual de GNU tar</a></p>\n<pre><code class=\"language-bash\"># Extraer un archivo tar.gz en el directorio actual\n# -x: extract, -z: gzip, -v: verbose, -f: file\ntar -xzvf archive.tar.gz\n</code></pre>\n<pre><code class=\"language-bash\"># Comprimir un directorio en zip recursivamente (más rápido con archivos pequeños)\n# -r: recursive\nzip -r archive.zip /path/to/dir\n</code></pre>\n<pre><code class=\"language-bash\"># Descomprimir un archivo zip en el directorio actual\nunzip archive.zip\n</code></pre>\n<pre><code class=\"language-bash\"># Sincronizar eficientemente dos directorios a través de SSH\n# -a: archive mode, -v: verbose, -z: compress durante la transferencia\nrsync -avz /local/dir/ user@host:/remote/dir/\n</code></pre>\n<p><strong>Consejos de Uso</strong></p>\n<ul>\n<li><code>rsync --dry-run</code> para simular cambios antes de ejecutarlos.</li>\n<li>Añade <code>--delete</code> para eliminar archivos extra en el destino.</li>\n</ul>\n<hr>\n<h2>3. Procesamiento de Texto y Búsqueda</h2>\n<p><strong>Etiquetas</strong>: <code>grep</code> <code>awk</code> <code>sed</code> <code>find</code> <code>xargs</code> <code>text</code></p>\n<pre><code class=\"language-bash\"># Buscar recursivamente la cadena “TODO” en todos los archivos del directorio actual, ignorando archivos binarios\ngrep -R --exclude-dir={.git,node_modules} &quot;TODO&quot; .\n</code></pre>\n<ul>\n<li><code>-R</code> o <code>-r</code>: recursivo.</li>\n<li><code>--exclude-dir</code>: omite carpetas grandes.</li>\n</ul>\n<pre><code class=\"language-bash\"># Imprimir la segunda columna de un archivo delimitado por espacios\nawk &#39;{print $2}&#39; file.txt\n</code></pre>\n<ul>\n<li>Útil para extracción rápida de columnas.</li>\n<li>Ajusta el separador con <code>-F&quot;,&quot;</code> para archivos CSV.</li>\n</ul>\n<pre><code class=\"language-bash\"># Reemplazo en sitio de “foo” por “bar” en todas las líneas\nsed -i &#39;s/foo/bar/g&#39; file.txt\n</code></pre>\n<ul>\n<li><code>-i</code>: edita el archivo en lugar.</li>\n<li>Usa <code>-i.bak</code> para mantener una copia de respaldo (ej. <code>sed -i.bak …</code>).</li>\n</ul>\n<pre><code class=\"language-bash\"># Encontrar archivos .log mayores de 10 megabytes\nfind /var/log -type f -name &quot;*.log&quot; -size +10M\n</code></pre>\n<pre><code class=\"language-bash\"># Eliminar archivos con más de 7 días en /tmp\nfind /tmp -type f -mtime +7 -print0 | xargs -0 rm -f\n</code></pre>\n<p><strong>Referencia</strong>: <a href=\"https://www.gnu.org/software/grep/manual/\">GNU grep</a>, <a href=\"https://www.gnu.org/software/sed/manual/\">GNU sed</a></p>\n<hr>\n<h2>4. Conceptos Básicos de Docker</h2>\n<p><strong>Etiquetas</strong>: <code>docker</code> <code>container</code> <code>images</code> <code>compose</code></p>\n<pre><code class=\"language-bash\"># Listar todos los contenedores Docker en ejecución (ID, imagen, comando, tiempo activo)\ndocker ps --format &#39;table {{.ID}}\\t{{.Image}}\\t{{.Command}}\\t{{.RunningFor}}&#39;\n</code></pre>\n<pre><code class=\"language-bash\"># Descargar la última imagen de Nginx desde Docker Hub\ndocker pull nginx:latest\n</code></pre>\n<pre><code class=\"language-bash\"># Ejecutar un contenedor en modo detached, mapeando el puerto 80 del host al 80 del contenedor\ndocker run -d --name web -p 80:80 nginx:latest\n</code></pre>\n<pre><code class=\"language-bash\"># Seguir los logs del contenedor “web” (streaming en vivo)\ndocker logs -f web\n</code></pre>\n<pre><code class=\"language-bash\"># Abrir una shell interactiva dentro del contenedor en ejecución\ndocker exec -it web /bin/bash\n</code></pre>\n<pre><code class=\"language-bash\"># Eliminar contenedores, redes, imágenes y cache no usados\ndocker system prune -af\n</code></pre>\n<pre><code class=\"language-bash\"># Iniciar servicios definidos en docker-compose.yml en modo detached\ndocker-compose up -d --build\n</code></pre>\n<p><strong>Consejos</strong></p>\n<ul>\n<li>Etiqueta tus imágenes (ej. <code>myimage:1.0</code>) para mejor control de versiones.</li>\n<li>Usa <code>--rm</code> en <code>docker run</code> para limpieza automática al salir.</li>\n</ul>\n<hr>\n<h2>5. Conceptos Básicos de Tailscale</h2>\n<p><strong>Etiquetas</strong>: <code>tailscale</code> <code>vpn</code> <code>ssh</code> <code>networking</code></p>\n<pre><code class=\"language-bash\"># Instalar Tailscale en Debian/Ubuntu\ncurl -fsSL https://tailscale.com/install.sh | sh\n\n# Autenticar y levantar tu interfaz Tailscale con rutas de subred y SSH activados\n# --accept-routes: usa rutas anunciadas por otros nodos\n# --ssh: habilita la función SSH integrada de Tailscale\ntailscale up --accept-routes --ssh\n</code></pre>\n<p><strong>Explicación</strong></p>\n<ul>\n<li><code>tailscale up</code>: conecta tu máquina a tu Tailnet.</li>\n<li><code>--ssh</code>: activa el servidor SSH sin configuración adicional en este nodo.</li>\n<li><code>--accept-routes</code>: permite usar rutas de subred anunciadas por pares.</li>\n</ul>\n<pre><code class=\"language-bash\"># Listar dispositivos y disponibilidad de SSH en tu Tailnet\ntailscale status --ssh\n</code></pre>\n<pre><code class=\"language-bash\"># Conectarse por SSH a otro dispositivo usando su nombre en Tailnet\ntailscale ssh user@device-name\n</code></pre>\n<pre><code class=\"language-bash\"># Desactivar SSH de Tailscale en este nodo\ntailscale down --ssh\n</code></pre>\n<p><strong>Consejos</strong></p>\n<ul>\n<li>Tailscale SSH utiliza tus cuentas de usuario y llaves SSH existentes.</li>\n<li>Las ACLs se configuran en la consola de administración de Tailscale para restringir el acceso SSH.</li>\n</ul>\n<p><strong>Referencia</strong>: <a href=\"https://tailscale.com/kb/ssh\">Documentación de Tailscale SSH</a></p>\n<hr>\n<h2>6. Productividad con TMUX</h2>\n<p><strong>Etiquetas</strong>: <code>tmux</code> <code>terminal</code> <code>multiplexing</code> <code>session</code></p>\n<pre><code class=\"language-bash\"># Iniciar una nueva sesión tmux llamada &quot;work&quot;\ntmux new -s work\n</code></pre>\n<pre><code class=\"language-bash\"># Listar todas las sesiones tmux\ntmux ls\n</code></pre>\n<pre><code class=\"language-bash\"># Adjuntar a una sesión existente llamada &quot;work&quot;\ntmux attach -t work\n</code></pre>\n<pre><code class=\"language-bash\"># Desconectarse de la sesión actual (dentro de tmux)\n# &lt;prefix&gt; por defecto es Ctrl+b\n&lt;Ctrl+b&gt; d\n</code></pre>\n<pre><code class=\"language-bash\"># Crear una nueva ventana dentro de la sesión\n&lt;Ctrl+b&gt; c\n</code></pre>\n<pre><code class=\"language-bash\"># Dividir el panel actual horizontalmente\n&lt;Ctrl+b&gt; &quot;\n</code></pre>\n<pre><code class=\"language-bash\"># Dividir el panel actual verticalmente\n&lt;Ctrl+b&gt; %\n</code></pre>\n<pre><code class=\"language-bash\"># Cambiar entre paneles (mantén prefix y usa flechas)\n&lt;Ctrl+b&gt; ←/→/↑/↓\n</code></pre>\n<pre><code class=\"language-bash\"># Redimensionar el panel\n&lt;Ctrl+b&gt; : resize-pane -L 10\n</code></pre>\n<pre><code class=\"language-bash\"># Cerrar el panel actual\n&lt;Ctrl+b&gt; x\n</code></pre>\n<p><strong>Consejos</strong></p>\n<ul>\n<li>Personaliza tu <code>&lt;prefix&gt;</code> en <code>~/.tmux.conf</code> (ej. <code>unbind C-b; set -g prefix C-a</code>).</li>\n<li>Usa plugins como <code>tmux-resurrect</code> para persistencia de sesiones.</li>\n</ul>\n<p><strong>Referencia</strong>: <a href=\"https://github.com/tmux/tmux\">Repositorio de tmux en GitHub</a></p>\n",
			date: "July 17",
			slug: "/en/blog/ultimate-cli-commands-valut",
			isMain: false,
			icon: Terminal,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "ChatGPT",
					avatar: "/chatgpt-logo.png"
				}
			]
		}
	],
	es: [
		{
			title: "Domando Google PageSpeed con SvelteKit para e-Commerce",
			excerpt: "Bueno, le ganamos al monstruo. Creamos un valor brutal para nuestro cliente. Su e-commerce ahora es una cosa brillante, rápida como un rayo, que pasa los test tiránicos del PageSpeed de Google con sobra — y deja en visto a cualquier competidor con presupuesto gordo. Echa un ojo a esto.",
			content: "<p>Tenemos un cliente: <a href=\"http://braaay.com\">Braaay</a>.<br>Negocio de vinos en São Paulo, e-commerce completo, todo el rollo.</p>\n<p>Entonces, nos propusimos un reto medio loco: sacarlos del WordPress tradicional y meterlos en un front-end headless con SvelteKit, pero dejando el backend en WooCommerce. ¿Por qué? Para no joderle la vida a los que operan el sistema — que sigan tranquilos — y de paso, volar la performance por los aires. Velocidad de carga? Brutal.</p>\n<p>El front-end en SvelteKit corre en Vercel.<br><br />\nPara hablar con WordPress, usamos <a href=\"https://www.wpgraphql.com/\">WPGraphQL</a> — convirtiendo el WP en un servidor GraphQL puro — y <a href=\"https://woographql.com/\">WooGraphQL</a> para sacar todo del WooCommerce: productos, pedidos, cupones, el paquete completo, con queries y mutations.</p>\n<p>👋 <em>En el futuro, vamos a soltar algunos plugins que hicimos. La comunidad GraphQL + WordPress va a sentir el impacto.</em></p>\n<p><em>(Continúa... porque después vamos a subir al nivel Pro con WooGraphQL y vamos a destripar con Bundles, Subscriptions y todo lo que se mueva.)</em></p>\n",
			date: "30 de agosto",
			slug: "/es/blog/domando-pagespeed-de-google-con-sveltekit-para-ecommerce",
			isMain: false,
			icon: ChartNoAxesCombined,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Claude AI",
					avatar: "/claude-logo.png"
				}
			]
		},
		{
			title: "Puppeteer y EasyOCR para la Automatización de Slots",
			excerpt: "Este post muestra cómo podemos usar Puppeteer para controlar juegos de tragamonedas mientras EasyOCR extrae datos en tiempo real, conectando los resultados de los giros a modelos locales de Ollama para sugerencias.",
			content: "<p>This is the content of my first post. It&#39;s written in Markdown.</p>\n",
			date: "29 de agosto",
			slug: "/es/blog/playwright-y-easyocr-para-automatizaciones-en-igaming",
			isMain: false,
			icon: Braces,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "The Ultimate CLI Command Vault",
			excerpt: "Dive into a curated arsenal of essential Linux and MacOS commands—each documented, tagged, and ready to supercharge your workflow, from OpenSSL encryption to tmux productivity.",
			content: "<h2>1. OpenSSL (Symmetric Encryption)</h2>\n<p><strong>Tags</strong>: <code>encryption</code> <code>security</code> <code>openssl</code> <code>aes</code> <code>symmetric</code></p>\n<pre><code class=\"language-bash\"># Encriptar\nopenssl enc -aes-256-cbc -salt -pbkdf2 -iter 10000 \\\n  -in large-file.dat \\\n  -out large-file.dat.enc\n\n# Desencriptar (mismo valor iter)\nopenssl enc -aes-256-cbc -salt -pbkdf2 -iter 10000 \\\n  -in large-file.dat.enc \\\n  -out large-file-decrypted.dat \\\n  -d\n</code></pre>\n<p><strong>Reference</strong>: <a href=\"https://www.openssl.org/docs/man1.1.1/man1/openssl-enc.html\">OpenSSL enc documentation</a></p>\n<h2>2. File Archiving &amp; Compression</h2>\n<p><strong>Tags</strong>: <code>archive</code> <code>compression</code> <code>tar</code> <code>gzip</code> <code>zip</code> <code>rsync</code></p>\n<pre><code class=\"language-bash\"># Create a gzipped tarball of a directory, preserving permissions and symlinks\n# -c: create, -z: gzip, -v: verbose, -f: file\ntar -czvf archive.tar.gz /path/to/dir\n</code></pre>\n<p><strong>Explanation</strong></p>\n<ul>\n<li>Ideal for backups or bundling multiple files.</li>\n<li>Use <code>-p</code> with <code>tar</code> to preserve ownership on restoration as root.</li>\n</ul>\n<p><strong>Reference</strong>: <a href=\"https://www.gnu.org/software/tar/manual/\">GNU tar manual</a></p>\n<pre><code class=\"language-bash\"># Extract a tar.gz archive into the current directory\n# -x: extract, -z: gzip, -v: verbose, -f: file\ntar -xzvf archive.tar.gz\n</code></pre>\n<pre><code class=\"language-bash\"># Zip a directory recursively (faster on small files)\n# -r: recursive\nzip -r archive.zip /path/to/dir\n</code></pre>\n<pre><code class=\"language-bash\"># Unzip an archive into the current directory\nunzip archive.zip\n</code></pre>\n<pre><code class=\"language-bash\"># Efficiently synchronize two directories over SSH\n# -a: archive mode, -v: verbose, -z: compress during transfer\nrsync -avz /local/dir/ user@host:/remote/dir/\n</code></pre>\n<p><strong>Usage Tips</strong></p>\n<ul>\n<li><code>rsync --dry-run</code> to preview changes before executing.</li>\n<li>Add <code>--delete</code> to remove extraneous files on target.</li>\n</ul>\n<hr>\n<h2>3. Text Processing &amp; Search</h2>\n<p><strong>Tags</strong>: <code>grep</code> <code>awk</code> <code>sed</code> <code>find</code> <code>xargs</code> <code>text</code></p>\n<pre><code class=\"language-bash\"># Recursively search for the string “TODO” in all files under the current directory, ignoring binary files\ngrep -R --exclude-dir={.git,node_modules} &quot;TODO&quot; .\n</code></pre>\n<ul>\n<li><code>-R</code> or <code>-r</code>: recursive.</li>\n<li><code>--exclude-dir</code>: skip large folders.</li>\n</ul>\n<pre><code class=\"language-bash\"># Print the second column of a space-delimited file\nawk &#39;{print $2}&#39; file.txt\n</code></pre>\n<ul>\n<li>Useful for quick column extraction.</li>\n<li>Adjust field separator with <code>-F&quot;,&quot;</code> for CSV files.</li>\n</ul>\n<pre><code class=\"language-bash\"># In-place replacement of “foo” with “bar” across all lines\nsed -i &#39;s/foo/bar/g&#39; file.txt\n</code></pre>\n<ul>\n<li><code>-i</code>: edit file in place.</li>\n<li>Use <code>-i.bak</code> to save a backup (e.g. <code>sed -i.bak …</code>).</li>\n</ul>\n<pre><code class=\"language-bash\"># Find all .log files larger than 10 megabytes\nfind /var/log -type f -name &quot;*.log&quot; -size +10M\n</code></pre>\n<pre><code class=\"language-bash\"># Delete files older than 7 days in /tmp\nfind /tmp -type f -mtime +7 -print0 | xargs -0 rm -f\n</code></pre>\n<p><strong>Reference</strong>: <a href=\"https://www.gnu.org/software/grep/manual/\">GNU grep</a>, <a href=\"https://www.gnu.org/software/sed/manual/\">GNU sed</a></p>\n<hr>\n<h2>4. Docker Essentials</h2>\n<p><strong>Tags</strong>: <code>docker</code> <code>container</code> <code>images</code> <code>compose</code></p>\n<pre><code class=\"language-bash\"># List all running Docker containers (ID, image, command, uptime)\ndocker ps --format &#39;table {{.ID}}\\t{{.Image}}\\t{{.Command}}\\t{{.RunningFor}}&#39;\n</code></pre>\n<pre><code class=\"language-bash\"># Pull the latest Nginx image from Docker Hub\ndocker pull nginx:latest\n</code></pre>\n<pre><code class=\"language-bash\"># Run a container in detached mode, mapping host port 80 to container port 80\ndocker run -d --name web -p 80:80 nginx:latest\n</code></pre>\n<pre><code class=\"language-bash\"># Follow logs of the “web” container (live streaming)\ndocker logs -f web\n</code></pre>\n<pre><code class=\"language-bash\"># Execute an interactive shell inside a running container\ndocker exec -it web /bin/bash\n</code></pre>\n<pre><code class=\"language-bash\"># Remove unused containers, networks, images, and cache\ndocker system prune -af\n</code></pre>\n<pre><code class=\"language-bash\"># Start services defined in docker-compose.yml in detached mode\ndocker-compose up -d --build\n</code></pre>\n<p><strong>Tips</strong></p>\n<ul>\n<li>Tag your images (e.g. <code>myimage:1.0</code>) for better version control.</li>\n<li>Use <code>--rm</code> in <code>docker run</code> for auto-cleanup when container exits.</li>\n</ul>\n<hr>\n<h2>5. Tailscale Essentials</h2>\n<p><strong>Tags</strong>: <code>tailscale</code> <code>vpn</code> <code>ssh</code> <code>networking</code></p>\n<pre><code class=\"language-bash\"># Install Tailscale on Debian/Ubuntu\ncurl -fsSL https://tailscale.com/install.sh | sh\n\n# Authenticate and bring up your Tailscale interface with subnet routes enabled\n# --accept-routes: use routes advertised by other nodes\n# --ssh: enable built-in SSH feature (Tailscale SSH)\ntailscale up --accept-routes --ssh\n</code></pre>\n<p><strong>Explanation</strong></p>\n<ul>\n<li><code>tailscale up</code>: connects your machine to your Tailnet.</li>\n<li><code>--ssh</code>: activates Tailscale’s zero-config SSH server on this node.</li>\n<li><code>--accept-routes</code>: allows your node to use subnet routes advertised by peers.</li>\n</ul>\n<pre><code class=\"language-bash\"># List devices and SSH availability on your Tailnet\ntailscale status --ssh\n</code></pre>\n<pre><code class=\"language-bash\"># SSH over Tailscale to another device by its Tailnet hostname\ntailscale ssh user@device-name\n</code></pre>\n<pre><code class=\"language-bash\"># Disable Tailscale SSH on this node\ntailscale down --ssh\n</code></pre>\n<p><strong>Tips</strong></p>\n<ul>\n<li>Tailscale SSH uses your existing user accounts and SSH keys.</li>\n<li>ACLs can be configured in your Tailscale admin console to restrict SSH access.</li>\n</ul>\n<p><strong>Reference</strong>: <a href=\"https://tailscale.com/kb/ssh\">Tailscale SSH documentation</a></p>\n<hr>\n<h2>6. TMUX Productivity</h2>\n<p><strong>Tags</strong>: <code>tmux</code> <code>terminal</code> <code>multiplexing</code> <code>session</code></p>\n<pre><code class=\"language-bash\"># Start a new tmux session named &quot;work&quot;\ntmux new -s work\n</code></pre>\n<pre><code class=\"language-bash\"># List all tmux sessions\ntmux ls\n</code></pre>\n<pre><code class=\"language-bash\"># Attach to an existing session named &quot;work&quot;\ntmux attach -t work\n</code></pre>\n<pre><code class=\"language-bash\"># Detach from current session (inside tmux)\n# &lt;prefix&gt; defaults to Ctrl+b\n&lt;Ctrl+b&gt; d\n</code></pre>\n<pre><code class=\"language-bash\"># Create a new window within a session\n&lt;Ctrl+b&gt; c\n</code></pre>\n<pre><code class=\"language-bash\"># Split current pane horizontally\n&lt;Ctrl+b&gt; &quot;\n</code></pre>\n<pre><code class=\"language-bash\"># Split current pane vertically\n&lt;Ctrl+b&gt; %\n</code></pre>\n<pre><code class=\"language-bash\"># Switch pane (hold prefix then press arrow key)\n&lt;Ctrl+b&gt; ←/→/↑/↓\n</code></pre>\n<pre><code class=\"language-bash\"># Resize pane\n&lt;Ctrl+b&gt; : resize-pane -L 10\n</code></pre>\n<pre><code class=\"language-bash\"># Kill current pane\n&lt;Ctrl+b&gt; x\n</code></pre>\n<p><strong>Tips</strong></p>\n<ul>\n<li>Customize your <code>&lt;prefix&gt;</code> in <code>~/.tmux.conf</code> (e.g., set <code>unbind C-b; set -g prefix C-a</code>).</li>\n<li>Use plugins like <code>tmux-resurrect</code> for session persistence.</li>\n</ul>\n<p><strong>Reference</strong>: <a href=\"https://github.com/tmux/tmux\">tmux GitHub</a></p>\n",
			date: "17 de julio",
			slug: "/es/blog/el-cofre-definitivo-de-comandos-cli",
			isMain: false,
			icon: Terminal,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "ChatGPT",
					avatar: "/chatgpt-logo.png"
				}
			]
		}
	],
	pt: [
		{
			title: "Domando o PageSpeed do Google com SvelteKit para e-Commerce",
			excerpt: "Beleza, a gente venceu o monstro. Criamos valor pra caramba pro nosso cliente. O e-commerce deles agora é um troço lindo, rápido pra caralho, passa nos testes do PageSpeed do Google com sobra — e deixa no chinelo qualquer concorrente de orçamento farto. Dá uma olhada nisso!",
			content: "<p>Então, temos um cliente: <a href=\"http://braaay.com\">Braaay</a>.<br>É um negócio de vinhos em SP, com e-commerce, operação completa, aquele rolê.</p>\n<p>Daí lançamos um desafio meio doido: tirar eles do WordPress tradicional e jogar num front-end headless com SvelteKit, mantendo o backend do WooCommerce. Por quê? Pra não virar o jogo pra galera que opera — ninguém perde o chão — e, de quebra, explodir a performance. Carregamento? Rápido pra caralho.</p>\n<p>O front-end em SvelteKit roda na Vercel.<br><br />\nPra conversar com o WordPress, usamos o <a href=\"https://www.wpgraphql.com/\">WPGraphQL</a> — transformando o WP num servidor GraphQL direto — e o <a href=\"https://woographql.com/\">WooGraphQL</a> pra puxar tudo do WooCommerce: produtos, pedidos, cupons, o bagulho todo, com queries e mutations.</p>\n<p>👋 <em>No futuro, a gente pretende soltar uns plugins que fizemos por aí. A comunidade GraphQL + WordPress vai sentir o baque.</em></p>\n<p><em>(Continua...)</em></p>\n",
			date: "30 de agosto",
			slug: "/blog/domando-google-pagespeed-com-sveltekit-para-ecommerce",
			isMain: false,
			icon: ChartNoAxesCombined,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Claude AI",
					avatar: "/claude-logo.png"
				}
			]
		},
		{
			title: "Puppeteer e EasyOCR para Automação de Slots",
			excerpt: "Este post mostra como podemos usar o Puppeteer para controlar jogos de slot enquanto o EasyOCR extrai dados em tempo real, conectando os resultados das rodadas a modelos locais do Ollama para sugestões.",
			content: "<p>This is the content of my first post. It&#39;s written in Markdown.</p>\n",
			date: "29 de agosto",
			slug: "/blog/playwright-e-easyocr-para-automacoes-em-igaming",
			isMain: false,
			icon: Braces,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "O Cofre Definitivo de Comandos CLI",
			excerpt: "Mergulhe em um arsenal curado de comandos essenciais para Linux e MacOS, cada um documentado, etiquetado e pronto para potencializar seu fluxo de trabalho, desde criptografia com OpenSSL até produtividade com tmux.",
			content: "<h2>1. OpenSSL (Criptografia Simétrica)</h2>\n<p><strong>Tags</strong>: <code>encryption</code> <code>security</code> <code>openssl</code> <code>aes</code> <code>symmetric</code></p>\n<pre><code class=\"language-bash\"># Criptografar\nopenssl enc -aes-256-cbc -salt -pbkdf2 -iter 10000 \\\n  -in large-file.dat \\\n  -out large-file.dat.enc\n\n# Decifrar (mesmo valor iter)\nopenssl enc -aes-256-cbc -salt -pbkdf2 -iter 10000 \\\n  -in large-file.dat.enc \\\n  -out large-file-decrypted.dat \\\n  -d\n</code></pre>\n<p><strong>Referência</strong>: <a href=\"https://www.openssl.org/docs/man1.1.1/man1/openssl-enc.html\">Documentação do OpenSSL enc</a></p>\n<h2>2. Arquivamento e Compressão de Arquivos</h2>\n<p><strong>Tags</strong>: <code>archive</code> <code>compression</code> <code>tar</code> <code>gzip</code> <code>zip</code> <code>rsync</code></p>\n<pre><code class=\"language-bash\"># Criar um tarball comprimido com gzip de um diretório, preservando permissões e links simbólicos\n# -c: create, -z: gzip, -v: verbose, -f: file\ntar -czvf archive.tar.gz /path/to/dir\n</code></pre>\n<p><strong>Explicação</strong></p>\n<ul>\n<li>Ideal para backups ou agrupar vários arquivos.</li>\n<li>Use <code>-p</code> com <code>tar</code> para preservar propriedade ao restaurar como root.</li>\n</ul>\n<p><strong>Referência</strong>: <a href=\"https://www.gnu.org/software/tar/manual/\">Manual do GNU tar</a></p>\n<pre><code class=\"language-bash\"># Extrair um arquivo tar.gz no diretório atual\n# -x: extract, -z: gzip, -v: verbose, -f: file\ntar -xzvf archive.tar.gz\n</code></pre>\n<pre><code class=\"language-bash\"># Compactar um diretório em zip recursivamente\n# -r: recursive\nzip -r archive.zip /path/to/dir\n</code></pre>\n<pre><code class=\"language-bash\"># Descompactar um arquivo zip no diretório atual\nunzip archive.zip\n</code></pre>\n<pre><code class=\"language-bash\"># Sincronizar dois diretórios via SSH eficientemente\n# -a: archive mode, -v: verbose, -z: compress\nrsync -avz /local/dir/ user@host:/remote/dir/\n</code></pre>\n<p><strong>Dica</strong></p>\n<ul>\n<li>Use <code>rsync --dry-run</code> para simular antes de executar.</li>\n<li>Adicione <code>--delete</code> para remover arquivos extras no destino.</li>\n</ul>\n<hr>\n<h2>3. Processamento de Texto e Busca</h2>\n<p><strong>Tags</strong>: <code>grep</code> <code>awk</code> <code>sed</code> <code>find</code> <code>xargs</code> <code>text</code></p>\n<pre><code class=\"language-bash\"># Buscar recursivamente “TODO” em todos os arquivos, ignorando binários\ngrep -R --exclude-dir={.git,node_modules} &quot;TODO&quot; .\n</code></pre>\n<ul>\n<li><code>-R</code> ou <code>-r</code>: recursivo</li>\n<li><code>--exclude-dir</code>: pula pastas grandes</li>\n</ul>\n<pre><code class=\"language-bash\"># Imprimir a segunda coluna de um arquivo delimitado por espaços\nawk &#39;{print $2}&#39; file.txt\n</code></pre>\n<ul>\n<li>Útil para extração de colunas</li>\n<li>Ajuste separador com <code>-F&quot;,&quot;</code> para CSV</li>\n</ul>\n<pre><code class=\"language-bash\"># Substituir “foo” por “bar” em todas as linhas (in-place)\nsed -i &#39;s/foo/bar/g&#39; file.txt\n</code></pre>\n<ul>\n<li><code>-i</code>: edita o arquivo diretamente</li>\n<li>Use <code>-i.bak</code> para criar backup (ex.: <code>sed -i.bak …</code>)</li>\n</ul>\n<pre><code class=\"language-bash\"># Encontrar arquivos .log maiores que 10MB\nfind /var/log -type f -name &quot;*.log&quot; -size +10M\n</code></pre>\n<pre><code class=\"language-bash\"># Remover arquivos com mais de 7 dias em /tmp\nfind /tmp -type f -mtime +7 -print0 | xargs -0 rm -f\n</code></pre>\n<p><strong>Referência</strong>: <a href=\"https://www.gnu.org/software/grep/manual/\">GNU grep</a>, <a href=\"https://www.gnu.org/software/sed/manual/\">GNU sed</a></p>\n<hr>\n<h2>4. Fundamentos do Docker</h2>\n<p><strong>Tags</strong>: <code>docker</code> <code>container</code> <code>images</code> <code>compose</code></p>\n<pre><code class=\"language-bash\"># Listar contêineres em execução (ID, imagem, comando, tempo ativo)\ndocker ps --format &#39;table {{.ID}}\\t{{.Image}}\\t{{.Command}}\\t{{.RunningFor}}&#39;\n</code></pre>\n<pre><code class=\"language-bash\"># Baixar a imagem mais recente do Nginx\ndocker pull nginx:latest\n</code></pre>\n<pre><code class=\"language-bash\"># Executar contêiner em modo detached, mapeando porta 80\ndocker run -d --name web -p 80:80 nginx:latest\n</code></pre>\n<pre><code class=\"language-bash\"># Acompanhar logs do contêiner “web”\ndocker logs -f web\n</code></pre>\n<pre><code class=\"language-bash\"># Abrir shell dentro do contêiner\ndocker exec -it web /bin/bash\n</code></pre>\n<pre><code class=\"language-bash\"># Limpar contêineres, redes, imagens e cache não usados\ndocker system prune -af\n</code></pre>\n<pre><code class=\"language-bash\"># Subir serviços do docker-compose em detached\ndocker-compose up -d --build\n</code></pre>\n<p><strong>Dica</strong></p>\n<ul>\n<li>Etiquete suas imagens (ex.: <code>myimage:1.0</code>).</li>\n<li>Use <code>--rm</code> em <code>docker run</code> para limpeza automática.</li>\n</ul>\n<hr>\n<h2>5. Fundamentos do Tailscale</h2>\n<p><strong>Tags</strong>: <code>tailscale</code> <code>vpn</code> <code>ssh</code> <code>networking</code></p>\n<pre><code class=\"language-bash\"># Instalar Tailscale no Debian/Ubuntu\ncurl -fsSL https://tailscale.com/install.sh | sh\n\n# Autenticar e ativar Tailscale com rotas de sub-rede e SSH\n# --accept-routes: usa rotas anunciadas por nós\n# --ssh: habilita SSH integrado\ntailscale up --accept-routes --ssh\n</code></pre>\n<p><strong>Explicação</strong></p>\n<ul>\n<li><code>tailscale up</code>: conecta ao seu Tailnet</li>\n<li><code>--ssh</code>: ativa servidor SSH sem configuração extra</li>\n<li><code>--accept-routes</code>: usa rotas de sub-rede anunciadas por outros nós</li>\n</ul>\n<pre><code class=\"language-bash\"># Listar dispositivos e status de SSH\ntailscale status --ssh\n</code></pre>\n<pre><code class=\"language-bash\"># Conectar por SSH a outro dispositivo no Tailnet\ntailscale ssh user@device-name\n</code></pre>\n<pre><code class=\"language-bash\"># Desativar SSH do Tailscale\ntailscale down --ssh\n</code></pre>\n<p><strong>Dica</strong></p>\n<ul>\n<li>Tailscale SSH usa suas chaves e usuários existentes.</li>\n<li>Configure ACLs na console Tailscale para restringir acesso.</li>\n</ul>\n<p><strong>Referência</strong>: <a href=\"https://tailscale.com/kb/ssh\">Tailscale SSH</a></p>\n<hr>\n<h2>6. Produtividade com TMUX</h2>\n<p><strong>Tags</strong>: <code>tmux</code> <code>terminal</code> <code>multiplexing</code> <code>session</code></p>\n<pre><code class=\"language-bash\"># Iniciar sessão tmux chamada &quot;work&quot;\ntmux new -s work\n</code></pre>\n<pre><code class=\"language-bash\"># Listar sessões\ntmux ls\n</code></pre>\n<pre><code class=\"language-bash\"># Anexar à sessão &quot;work&quot;\ntmux attach -t work\n</code></pre>\n<pre><code class=\"language-bash\"># Desconectar da sessão (prefixo Ctrl+b)\n&lt;Ctrl+b&gt; d\n</code></pre>\n<pre><code class=\"language-bash\"># Nova janela\n&lt;Ctrl+b&gt; c\n</code></pre>\n<pre><code class=\"language-bash\"># Dividir painel horizontal\n&lt;Ctrl+b&gt; &quot;\n</code></pre>\n<pre><code class=\"language-bash\"># Dividir painel vertical\n&lt;Ctrl+b&gt; %\n</code></pre>\n<pre><code class=\"language-bash\"># Mudar de painel (prefixo + setas)\n&lt;Ctrl+b&gt; ←/→/↑/↓\n</code></pre>\n<pre><code class=\"language-bash\"># Redimensionar painel\n&lt;Ctrl+b&gt; : resize-pane -L 10\n</code></pre>\n<pre><code class=\"language-bash\"># Fechar painel\n&lt;Ctrl+b&gt; x\n</code></pre>\n<p><strong>Dica</strong></p>\n<ul>\n<li>Altere o <code>&lt;prefix&gt;</code> em <code>~/.tmux.conf</code> (ex.: <code>unbind C-b; set -g prefix C-a</code>).</li>\n<li>Use plugins como <code>tmux-resurrect</code> para salvar sessões.</li>\n</ul>\n<p><strong>Referência</strong>: <a href=\"https://github.com/tmux/tmux\">GitHub tmux</a></p>\n",
			date: "17 de julho",
			slug: "/blog/o-cofre-definitivo-de-comandos-cli",
			isMain: false,
			icon: Terminal,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "ChatGPT",
					avatar: "/chatgpt-logo.png"
				}
			]
		}
	]
};