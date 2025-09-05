import { Star, Database, BrainCircuit } from '@lucide/svelte';

export const featuredPosts = {
	en: [
		{
			title: "Introducing the Futurewise Platform",
			excerpt: "A unified digital products platform, designed to transform the way businesses in Latin America handle e-commerce, payments, and IT.",
			content: "<p>Futurewise is more than just a collection of tools. It’s an <a href=\"https://futurewise.lat\">integrated ecosystem</a>, designed to provide accessible, modular, and intelligent solutions for growing businesses — with a special focus on emerging markets in LATAM.</p>\n<p><strong>Futurewise</strong><br><em>A Unified Digital Products Platform for Latin America.</em></p>\n",
			date: "September 5",
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
			title: "Transformers.js: How We Used Client-Side Inference to Make Our E-Commerce Smarter",
			excerpt: "Soon...",
			content: "<p>Soon...</p>\n",
			date: "September 4",
			slug: "/en/blog/transformers-js-ecommerce-experiment",
			isMain: false,
			icon: BrainCircuit,
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
			title: "Using SQLite for Delivering Blazingly Fast Read-Heavy Operations",
			excerpt: "A strategic approach to optimize data delivery, improve performance, and significantly reduce cloud costs for popular content.",
			content: "<p>SQLite is one of the most popular databases today, and <a href=\"https://www.youtube.com/watch?v=qf0GqRz-c74\">you might have miss it</a>.</p>\n<p>So we decided to give it a try for delivering ready-heavy blog posts in our <a href=\"https://www.futurewise.lat/en/store\">e-Commerce solution</a>... via <a href=\"https://turso.tech/\">Turso</a>.</p>\n",
			date: "August 30",
			slug: "/en/blog/sqlite",
			isMain: false,
			icon: Database,
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
			excerpt: "Una plataforma unificada de productos digitales, creada para transformar la forma en que los negocios de América Latina gestionan el comercio electrónico, los pagos y la TI.",
			content: "<p>Futurewise es más que una simple colección de herramientas. Es un <a href=\"https://futurewise.lat\">ecosistema integrado</a>, diseñado para ofrecer soluciones accesibles, modulares e inteligentes para empresas en crecimiento, con un enfoque especial en los mercados emergentes de LATAM.</p>\n<p><strong>Futurewise</strong><br><em>Una Plataforma Unificada de Productos Digitales para América Latina.</em></p>\n",
			date: "5 de septiembre",
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
			title: "Transformers.js: Inferencia del lado del cliente para hacer nuestro e-commerce más inteligente",
			excerpt: "En breve...",
			content: "<p>En breve...</p>\n",
			date: "4 de septiembre",
			slug: "/es/blog/transformers-js-experimento-ecommerce",
			isMain: false,
			icon: BrainCircuit,
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
			title: "Uso de SQLite para Entregar Operaciones de Lectura Intensiva Increíblemente Rápidas",
			excerpt: "Un enfoque estratégico para optimizar la entrega de datos, mejorar el rendimiento y reducir significativamente los costos en la nube para contenido popular.",
			content: "<p>SQLite es una de las bases de datos más populares en la actualidad, y <a href=\"https://www.youtube.com/watch?v=qf0GqRz-c74\">quizás la hayas pasado por alto</a>.</p>\n<p>Por ello, decidimos probarla para entregar posts de blog con gran cantidad de lecturas en nuestra <a href=\"https://www.futurewise.lat/es/store\">solución de e-Commerce</a>... a través de <a href=\"https://turso.tech/\">Turso</a>.</p>\n",
			date: "30 de agosto",
			slug: "/es/blog/sqlite",
			isMain: false,
			icon: Database,
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
			excerpt: "Uma plataforma unificada de produtos digitais, criada para transformar a forma como negócios da América Latina lidam com e-commerce, pagamentos e TI.",
			content: "<p>A Futurewise é mais do que uma simples coleção de ferramentas. É um <a href=\"https://futurewise.lat\">ecossistema</a> integrado, desenvolvido para oferecer soluções acessíveis, modulares e inteligentes para empresas em crescimento — com foco especial nos mercados emergentes da LATAM.</p>\n<p><strong>Futurewise</strong><br><em>Plataforma Unificada de Produtos Digitais para a América Latina.</em></p>\n",
			date: "5 de setembro",
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
			title: "Transformers.js: Inferência no lado do cliente para deixar nosso e-commerce mais inteligente",
			excerpt: "En breve...",
			content: "<p>Em breve...</p>\n",
			date: "4 de setembro",
			slug: "/blog/transformers-js-experimento-ecommerce",
			isMain: false,
			icon: BrainCircuit,
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
			title: "Usando SQLite para Entregar Operações de Leitura Intensiva Incrivelmente Rápidas",
			excerpt: "Uma abordagem estratégica para otimizar a entrega de dados, melhorar o desempenho e reduzir significativamente os custos de nuvem para conteúdo popular.",
			content: "<p>SQLite é um dos bancos de dados mais populares hoje, e <a href=\"https://www.youtube.com/watch?v=qf0GqRz-c74\">você pode tê-lo ignorado</a>.</p>\n<p>Então, decidimos experimentá-lo para entregar posts de blog com alta demanda de leitura em nossa <a href=\"https://www.futurewise.lat/store\">solução de e-Commerce</a>... via <a href=\"https://turso.tech/\">Turso</a>.</p>\n",
			date: "30 de agosto",
			slug: "/blog/sqlite",
			isMain: false,
			icon: Database,
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