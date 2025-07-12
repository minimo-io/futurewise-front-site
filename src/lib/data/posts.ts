import { Star, Braces, Globe } from '@lucide/svelte';

export const posts = {
	en: [
		{
			title: "Puppeteer & EasyOCR for Slots Automation",
			excerpt: "This post shows how we can use Puppeteer to control slot games while EasyOCR extracts data in real-time, connecting spin results to local Ollama models for suggestions.",
			content: "<p>This is the content of my first post. It&#39;s written in Markdown.</p>\n",
			date: "August 29",
			slug: "/en/blog/puppeteer-and-easyocr-for-igaming-automation",
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
		},
		{
			title: "The future of programming",
			excerpt: "Andrej Karpathy's \"Software Is Changing (Again)\" introduces Software 3.0, LLMs, programmable with natural language, democratize coding. He sees LLMs as powerful, yet fallible, new operating systems driving \"partial autonomy apps\" and requiring software built for direct AI interaction.",
			content: "<p>This is the content of my first post. It&#39;s written in Markdown.</p>\n",
			date: "July 11",
			slug: "/en/blog/the-future-of-programming",
			isMain: true,
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
		},
		{
			title: "Introducing the Futurewise Platform",
			excerpt: "This is the excerpt for my first post and it will an awesome project, and nowone will believe it, not even me, a somehow svelte coder, turned into a Futurist.",
			content: "<p>This is the content of my first post. It&#39;s written in Markdown.</p>\n",
			date: "June 29",
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
		}
	],
	es: [
		{
			title: "Puppeteer y EasyOCR para la Automatización de Slots",
			excerpt: "Este post muestra cómo podemos usar Puppeteer para controlar juegos de tragamonedas mientras EasyOCR extrae datos en tiempo real, conectando los resultados de los giros a modelos locales de Ollama para sugerencias.",
			content: "<p>This is the content of my first post. It&#39;s written in Markdown.</p>\n",
			date: "29 de agosto",
			slug: "/es/blog/puppeteer-and-easyocr-for-igaming-automation",
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
		},
		{
			title: "El futuro de la programación",
			excerpt: "Andrej Karpathy destaca Software 3.0, LLMs programables con lenguaje natural democratizan la codificación. Los ve como sistemas operativos nuevos, potentes y falibles, impulsando \"apps de autonomía parcial\" y software para IA directa.",
			content: "<p>This is the content of my first post. It&#39;s written in Markdown.</p>\n",
			date: "11 de julio",
			slug: "/es/blog/the-future-of-programming",
			isMain: true,
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
		},
		{
			title: "Presentamos la Plataforma Futurewise",
			excerpt: "Este es el extracto de mi primera publicación y será un proyecto increíble, y nadie lo creerá, ni siquiera yo, un programador de svelte, convertido en un Futurista.",
			content: "<p>Este es el contenido de mi primera publicación. Está escrito in Markdown.</p>\n",
			date: "29 de junio",
			slug: "/es/blog/introducing-the-futurewise-platform",
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
		}
	],
	pt: [
		{
			title: "Puppeteer e EasyOCR para Automação de Slots",
			excerpt: "Este post mostra como podemos usar o Puppeteer para controlar jogos de slot enquanto o EasyOCR extrai dados em tempo real, conectando os resultados das rodadas a modelos locais do Ollama para sugestões.",
			content: "<p>This is the content of my first post. It&#39;s written in Markdown.</p>\n",
			date: "29 de agosto",
			slug: "/blog/puppeteer-and-easyocr-for-igaming-automation",
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
		},
		{
			title: "O futuro da programação",
			excerpt: "Andrej Karpathy em \"O Software Está Mudando (De Novo)\" destaca o Software 3.0, LLMs programáveis por linguagem natural democratizam a codificação. Ele os vê como novos OS, potentes e falíveis, impulsionando \"apps de autonomia parcial\" e software para IA.",
			content: "<p>This is the content of my first post. It&#39;s written in Markdown.</p>\n",
			date: "11 de julho",
			slug: "/blog/the-future-of-programming",
			isMain: true,
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
		},
		{
			title: "Apresentando a Plataforma Futurewise",
			excerpt: "Este é o trecho do meu primeiro post e será um projeto incrível, e ninguém vai acreditar, nem mesmo eu, um programador svelte, que se tornou um Futurista.",
			content: "<p>Este é o conteúdo do meu primeiro post. Está escrito em Markdown.</p>\n",
			date: "29 de junho",
			slug: "/blog/introducing-the-futurewise-platform",
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
		}
	]
};