import { Braces, Star, ChartNoAxesCombined } from '@lucide/svelte';

export const featuredPosts = {
	en: [
		{
			title: "Introducing the Futurewise Platform",
			excerpt: "This is the excerpt for my first post and it will an awesome project, and nowone will believe it, not even me, a somehow svelte coder, turned into a Futurist.",
			content: "<p>This is the content of my first post. It&#39;s written in Markdown.</p>\n",
			date: "August 31",
			slug: "/en/blog/introducing-the-futurewise-platform",
			isMain: true,
			icon: Star,
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
			title: "Beating Google's Pagespeed with SvelteKit for e-Commerce",
			excerpt: "So we beat the Thing, and we created a lot of value for our client. Their e-commerce is now shiny, efficient, thing that load fast, passing Google’s PageSpeed tyranny tests, much better than any of their big-budgeted competitors. Check this out!",
			content: "<p>So we have a client, it&#39;s called <a href=\"http://braaay.com\">Braaay</a>\nIt&#39;s a wine business, in Sao Paulo, and e-commerce operation and what not.</p>\n<p>Ok so... we setup a kind of ambitious goal: To move our client from a Wordpress to a Headless Sveltekit front-end while still keeping their Woocommerce backend so we don&#39;t cause havok among people operating the platform, in order to (drastically ::promise::) improve the load times.</p>\n<p>The SvekteKit front-end is hosted at Vercel.\n<br />\nWe are using the <a href=\"https://www.wpgraphql.com/\">WPGraphQL</a> plugin for Wordpress to use our previous instance as a GraphQL server + <a href=\"https://woographql.com/\">WooGraphQL</a> plugin to get Woocommerce endpoints for queries and mutations.</p>\n<p>👋 <em>We plan to contribute to this GraphQL over Wordpress crowd in the future, with some of the plugin we developed</em></p>\n<p><em>(To be continued...)</em></p>\n",
			date: "August 30",
			slug: "/en/blog/beating-google-pagespeed-with-sveltekit",
			isMain: true,
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
			isMain: true,
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
		}
	],
	es: [
		{
			title: "Presentando la Plataforma Futurewise",
			excerpt: "Este es el extracto de mi primera publicación y será un proyecto increíble, y nadie lo creerá, ni siquiera yo, un programador de svelte, convertido en un Futurista.",
			content: "<p>Este es el contenido de mi primera publicación. Está escrito in Markdown.</p>\n",
			date: "31 de agosto",
			slug: "/es/blog/presentando-la-plataforma-futurewise",
			isMain: true,
			icon: Star,
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
			title: "Domando Google PageSpeed con SvelteKit para e-Commerce",
			excerpt: "Bueno, le ganamos al monstruo. Creamos un valor brutal para nuestro cliente. Su e-commerce ahora es una cosa brillante, rápida como un rayo, que pasa los test tiránicos del PageSpeed de Google con sobra — y deja en visto a cualquier competidor con presupuesto gordo. Echa un ojo a esto.",
			content: "<p>Tenemos un cliente: <a href=\"http://braaay.com\">Braaay</a>.<br>Negocio de vinos en São Paulo, e-commerce completo, todo el rollo.</p>\n<p>Entonces, nos propusimos un reto medio loco: sacarlos del WordPress tradicional y meterlos en un front-end headless con SvelteKit, pero dejando el backend en WooCommerce. ¿Por qué? Para no joderle la vida a los que operan el sistema — que sigan tranquilos — y de paso, volar la performance por los aires. Velocidad de carga? Brutal.</p>\n<p>El front-end en SvelteKit corre en Vercel.<br><br />\nPara hablar con WordPress, usamos <a href=\"https://www.wpgraphql.com/\">WPGraphQL</a> — convirtiendo el WP en un servidor GraphQL puro — y <a href=\"https://woographql.com/\">WooGraphQL</a> para sacar todo del WooCommerce: productos, pedidos, cupones, el paquete completo, con queries y mutations.</p>\n<p>👋 <em>En el futuro, vamos a soltar algunos plugins que hicimos. La comunidad GraphQL + WordPress va a sentir el impacto.</em></p>\n<p><em>(Continúa... porque después vamos a subir al nivel Pro con WooGraphQL y vamos a destripar con Bundles, Subscriptions y todo lo que se mueva.)</em></p>\n",
			date: "30 de agosto",
			slug: "/es/blog/domando-pagespeed-de-google-con-sveltekit-para-ecommerce",
			isMain: true,
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
			isMain: true,
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
		}
	],
	pt: [
		{
			title: "Apresentando a Plataforma Futurewise",
			excerpt: "A Futurewise é a nossa plataforma unificada de produtos digitais, criada para transformar a forma como negócios da América Latina lidam com e-commerce, pagamentos e ativos de TI.",
			content: "<p>A Futurewise é mais do que uma simples coleção de ferramentas. É um <a href=\"https://futurewise.lat\">ecossistema</a> integrado, desenvolvido para oferecer soluções acessíveis, modulares e inteligentes para empresas em crescimento — com foco especial nos mercados emergentes da LATAM.</p>\n<h2>Nossos Produtos</h2>\n<h3>Bagity — E-commerce Headless com WordPress + SvelteKit</h3>\n<p>Crie lojas modernas e rápidas com <strong>tecnologia headless</strong>, integrando a flexibilidade do WordPress com o poder do SvelteKit. Ideal para negócios que querem vender com performance, liberdade criativa e baixo custo.</p>\n<h3>FinX — Pagamentos Lightning, Cripto e Fiat</h3>\n<p>Envie e receba valores em <strong>tempo real</strong>, local ou internacionalmente. O <strong>FinX</strong> conecta diferentes métodos de pagamento, incluindo a rede Lightning, com foco em <strong>velocidade</strong>, <strong>baixo custo</strong> e <strong>compliance local</strong>.</p>\n<h3>CareSync — Monitoramento Inteligente de Ativos de TI</h3>\n<p>Uma plataforma de <strong>manutenção proativa e emergencial</strong> para notebooks e PCs, voltada para MSPs, escolas e pequenas empresas. Inclui alertas, relatórios e até substituição emergencial de máquinas.</p>\n<h2>Nosso Compromisso</h2>\n<ul>\n<li><strong>Inovação com propósito</strong>: Soluções pensadas para as necessidades reais da região.</li>\n<li><strong>Baixo custo operacional</strong>: Planos acessíveis e gratuitos para quem está começando.</li>\n<li><strong>Crescimento sustentável</strong>: Ferramentas escaláveis para acompanhar sua jornada.</li>\n</ul>\n<h2>Fale com a Gente</h2>\n<p>Estamos em constante evolução e abertos à colaboração. Tem uma ideia? Quer testar um dos nossos produtos? Fale conosco:</p>\n<p>👉 <a href=\"https://futurewise.lat\">futurewise.lat</a></p>\n<p><strong>Futurewise</strong><br><em>Plataforma Unificada de Produtos Digitais para a América Latina.</em></p>\n",
			date: "31 de agosto",
			slug: "/blog/apresentando-a-plataforma-futurewise",
			isMain: true,
			icon: Star,
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
			title: "Domando o PageSpeed do Google com SvelteKit para e-Commerce",
			excerpt: "Beleza, a gente venceu o monstro. Criamos valor pra caramba pro nosso cliente. O e-commerce deles agora é um troço lindo, rápido pra caralho, passa nos testes do PageSpeed do Google com sobra — e deixa no chinelo qualquer concorrente de orçamento farto. Dá uma olhada nisso!",
			content: "<p>Então, temos um cliente: <a href=\"http://braaay.com\">Braaay</a>.<br>É um negócio de vinhos em SP, com e-commerce, operação completa, aquele rolê.</p>\n<p>Daí lançamos um desafio meio doido: tirar eles do WordPress tradicional e jogar num front-end headless com SvelteKit, mantendo o backend do WooCommerce. Por quê? Pra não virar o jogo pra galera que opera — ninguém perde o chão — e, de quebra, explodir a performance. Carregamento? Rápido pra caralho.</p>\n<p>O front-end em SvelteKit roda na Vercel.<br><br />\nPra conversar com o WordPress, usamos o <a href=\"https://www.wpgraphql.com/\">WPGraphQL</a> — transformando o WP num servidor GraphQL direto — e o <a href=\"https://woographql.com/\">WooGraphQL</a> pra puxar tudo do WooCommerce: produtos, pedidos, cupons, o bagulho todo, com queries e mutations.</p>\n<p>👋 <em>No futuro, a gente pretende soltar uns plugins que fizemos por aí. A comunidade GraphQL + WordPress vai sentir o baque.</em></p>\n<p><em>(Continua...)</em></p>\n",
			date: "30 de agosto",
			slug: "/blog/domando-google-pagespeed-com-sveltekit-para-ecommerce",
			isMain: true,
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
			isMain: true,
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
		}
	]
};