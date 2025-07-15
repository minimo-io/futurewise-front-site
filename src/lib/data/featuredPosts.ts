import { Braces, Globe, Star } from '@lucide/svelte';

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
			title: "The future of programming",
			excerpt: "Andrej Karpathy's \"Software Is Changing (Again)\" introduces Software 3.0, LLMs, programmable with natural language, democratize coding. He sees LLMs as powerful, yet fallible, new operating systems driving \"partial autonomy apps\" and requiring software built for direct AI interaction.",
			content: "<p>This is the content of my first post. It&#39;s written in Markdown.</p>\n",
			date: "July 11",
			slug: "/en/blog/the-future-of-programming",
			isMain: false,
			icon: Globe,
			authors: [
				{
					fullName: "ChatGPT",
					avatar: "/chatgpt-logo.png"
				},
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
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
			title: "El futuro de la programación",
			excerpt: "Andrej Karpathy destaca Software 3.0, LLMs programables con lenguaje natural democratizan la codificación. Los ve como sistemas operativos nuevos, potentes y falibles, impulsando \"apps de autonomía parcial\" y software para IA directa.",
			content: "<p>This is the content of my first post. It&#39;s written in Markdown.</p>\n",
			date: "11 de julio",
			slug: "/es/blog/el-futuro-de-la-programacion",
			isMain: false,
			icon: Globe,
			authors: [
				{
					fullName: "ChatGPT",
					avatar: "/chatgpt-logo.png"
				},
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
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
			title: "O futuro da programação",
			excerpt: "Andrej Karpathy em \"O Software Está Mudando (De Novo)\" destaca o Software 3.0, LLMs programáveis por linguagem natural democratizam a codificação. Ele os vê como novos OS, potentes e falíveis, impulsionando \"apps de autonomia parcial\" e software para IA.",
			content: "<p>This is the content of my first post. It&#39;s written in Markdown.</p>\n",
			date: "11 de julho",
			slug: "/blog/o-futuro-da-programacao",
			isMain: false,
			icon: Globe,
			authors: [
				{
					fullName: "ChatGPT",
					avatar: "/chatgpt-logo.png"
				},
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				}
			]
		}
	]
};