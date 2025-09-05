import { Star, ChartNoAxesCombined, Database } from '@lucide/svelte';

export const featuredPosts = {
	en: [
		{
			title: "Introducing the Futurewise Platform",
			excerpt: "A unified digital products platform, designed to transform the way businesses in Latin America handle e-commerce, payments, and IT.",
			content: "<p>Futurewise is more than just a collection of tools. It’s an <a href=\"https://futurewise.lat\">integrated ecosystem</a>, designed to provide accessible, modular, and intelligent solutions for growing businesses — with a special focus on emerging markets in LATAM.</p>\n<p><strong>Futurewise</strong><br><em>A Unified Digital Products Platform for Latin America.</em></p>\n",
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
			title: "Beating Google's Pagespeed with SvelteKit on e-Commerce",
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
			title: "Using SQLite for Delivering Blazingly Fast Read-Heavy Operations",
			excerpt: "A strategic approach to optimize data delivery, improve performance, and significantly reduce cloud costs for popular content.",
			content: "<p>SQLite is one of the most popular databases today, and <a href=\"https://www.youtube.com/watch?v=qf0GqRz-c74\">you might have miss it</a>.</p>\n<p>So we decided to give it a try for delivering ready-heavy blog posts in our <a href=\"https://www.futurewise.lat/en/store\">e-Commerce solution</a>... via <a href=\"https://turso.tech/\">Turso</a>.</p>\n",
			date: "August 30",
			slug: "/en/blog/sqlite",
			isMain: true,
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
			title: "Uso de SQLite para Entregar Operaciones de Lectura Intensiva Increíblemente Rápidas",
			excerpt: "Un enfoque estratégico para optimizar la entrega de datos, mejorar el rendimiento y reducir significativamente los costos en la nube para contenido popular.",
			content: "<p>SQLite es una de las bases de datos más populares en la actualidad, y <a href=\"https://www.youtube.com/watch?v=qf0GqRz-c74\">quizás la hayas pasado por alto</a>.</p>\n<p>Por ello, decidimos probarla para entregar posts de blog con gran cantidad de lecturas en nuestra <a href=\"https://www.futurewise.lat/es/store\">solución de e-Commerce</a>... a través de <a href=\"https://turso.tech/\">Turso</a>.</p>\n",
			date: "30 de agosto",
			slug: "/es/blog/sqlite",
			isMain: true,
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
			title: "Usando SQLite para Entregar Operações de Leitura Intensiva Incrivelmente Rápidas",
			excerpt: "Uma abordagem estratégica para otimizar a entrega de dados, melhorar o desempenho e reduzir significativamente os custos de nuvem para conteúdo popular.",
			content: "<p>SQLite é um dos bancos de dados mais populares hoje, e <a href=\"https://www.youtube.com/watch?v=qf0GqRz-c74\">você pode tê-lo ignorado</a>.</p>\n<p>Então, decidimos experimentá-lo para entregar posts de blog com alta demanda de leitura em nossa <a href=\"https://www.futurewise.lat/store\">solução de e-Commerce</a>... via <a href=\"https://turso.tech/\">Turso</a>.</p>\n",
			date: "30 de agosto",
			slug: "/blog/sqlite",
			isMain: true,
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