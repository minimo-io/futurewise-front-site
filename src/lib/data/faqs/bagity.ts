import type { Faq } from '$lib/type/faq.types';

export const bagityFaqs: Record<string, Faq[]> = {
	en: [
		{
			question: 'What is an MCP server?',
			answer:
				'An MCP server (Model Context Protocol) is a communication protocol designed to connect generative AI applications with data and AI tools. It acts as an interface layer that allows language models (LLMs) to access data from databases, files, and APIs in real time.'
		},
		{
			question: 'How does Bagity use MCP servers in the context of e-commerce?',
			answer:
				'Bagity uses MCP servers to connect online stores with advanced language models like Claude and ChatGPT. This integration enables generative AI to access product data and APIs in real time, allowing AI to interact directly with the store—generating recommendations, assisting customers, and powering conversational interfaces. Our goal is to prepare our clients’ e-commerce platforms for the future of AI-driven shopping.'
		},
		{
			question: 'What payment methods does Bagity support in the checkout?',
			answer:
				'Bagity offers an express checkout supporting PIX, Boleto, credit/debit cards, and Bitcoin via FinXPay, ensuring fast and secure transactions with high conversion rates.'
		},
		{
			question: 'How does the pricing work for Bagity Basic and Bagity Pro?',
			answer:
				'Bagity Basic is a fixed R$99/month plan. Bagity PRO+ has no upfront costs and charges 5–10% per sale, ideal for premium e-commerce with full platform access and optional customizations by task.'
		},
		{
			question: 'Can I customize the design and UX of my store?',
			answer:
				'Yes. We offer unlimited customization in design, UX, and functionalities, with AI-powered content generation, prototyping, and headless composable front-ends to match your brand’s needs.'
		},
		{
			question: 'What integrations are available with Bagity?',
			answer:
				'Bagity integrates via API and webhooks with major ERPs, CRMs (via AutoCRM), and payment platforms like FinXPay, as well as CMSs like WooCommerce and Ghost.'
		},
		{
			question: 'How does AI enhance my e-commerce with Bagity?',
			answer:
				'We include AI features such as automated product content generation, intelligent lead qualification via AutoCRM chatbot, and analytics powered by machine learning to boost sales and customer engagement.'
		},
		{
			question: 'Is SEO and indexing optimized for AI discovery?',
			answer:
				'Yes. Our proprietary technology and specialized cloud infrastructure ensure high indexing on Google and compatibility with LLMs for better discoverability and search performance.'
		}
	],
	es: [
		{
			question: '¿Qué es un servidor MCP?',
			answer:
				'Un servidor MCP (Model Context Protocol) es un protocolo de comunicación diseñado para conectar aplicaciones de IA generativa con datos y herramientas de IA. Actúa como una capa de interfaz que permite a los modelos de lenguaje (LLMs) acceder en tiempo real a datos de bases de datos, archivos y APIs.'
		},
		{
			question: '¿Cómo usa Bagity los servidores MCP en el comercio electrónico?',
			answer:
				'Bagity utiliza servidores MCP para conectar tiendas online con modelos avanzados como Claude y ChatGPT, permitiendo que la IA generativa acceda a datos de productos y APIs en tiempo real para generar recomendaciones, asistir a clientes y ofrecer interfaces conversacionales.'
		},
		{
			question: '¿Qué métodos de pago admite Bagity en el checkout?',
			answer:
				'Bagity ofrece un checkout exprés con PIX, Boleto, tarjetas de crédito/débito y Bitcoin vía FinXPay, garantizando transacciones rápidas y seguras con altas tasas de conversión.'
		},
		{
			question: '¿Cómo funciona la estructura de precios de Bagity Basic y Bagity Pro?',
			answer:
				'Bagity Basic cuesta R$99/mes fijo. Bagity PRO+ no tiene costo inicial y cobra entre 5–10% por venta, ideal para e-commerce premium con acceso completo y personalizaciones opcionales por tarea.'
		},
		{
			question: '¿Puedo personalizar el diseño y la UX de mi tienda?',
			answer:
				'Sí. Ofrecemos personalización ilimitada en diseño, UX y funcionalidades, con generación de contenido por IA, prototipado y front-ends componibles headless para adaptarse a tu marca.'
		},
		{
			question: '¿Qué integraciones están disponibles con Bagity?',
			answer:
				'Bagity se integra vía API y webhooks con los principales ERPs, CRMs (a través de AutoCRM) y plataformas de pago como FinXPay, así como CMSs como WooCommerce y Ghost.'
		},
		{
			question: '¿Cómo mejora la IA mi e-commerce con Bagity?',
			answer:
				'Incluimos funciones de IA como generación automática de contenido de productos, calificación inteligente de leads mediante el chatbot AutoCRM y análisis impulsados por ML para aumentar ventas y engagement.'
		},
		{
			question: '¿Está optimizado el SEO y la indexación para descubrimiento por IA?',
			answer:
				'Sí. Nuestra tecnología propia y la infraestructura especializada en la nube garantizan una alta indexación en Google y compatibilidad con LLMs para mejorar la visibilidad y rendimiento de búsqueda.'
		}
	],
	pt: [
		{
			question: 'O que é um servidor MCP?',
			answer:
				'Um servidor MCP (Model Context Protocol) é um protocolo de comunicação criado para conectar aplicações de IA generativa a dados e ferramentas de IA. Atua como uma camada de interface que permite que LLMs acessem, em tempo real, dados de bancos de dados, arquivos e APIs.'
		},
		{
			question: 'Como o Bagity usa servidores MCP no e-commerce?',
			answer:
				'O Bagity usa servidores MCP para conectar lojas online a modelos avançados como Claude e ChatGPT, permitindo que a IA gerativa acesse dados de produtos e APIs em tempo real, gere recomendações, auxilie clientes e ofereça interfaces conversacionais.'
		},
		{
			question: 'Quais métodos de pagamento o Bagity suporta no checkout?',
			answer:
				'O Bagity oferece checkout expresso com PIX, Boleto, cartão de crédito/débito e Bitcoin via FinXPay, garantindo transações rápidas e seguras com altas taxas de conversão.'
		},
		{
			question: 'Como funciona a precificação do Bagity Basic e do Bagity PRO+?',
			answer:
				'O Bagity Basic custa R$99/mês fixo. O Bagity PRO+ não tem custo inicial e cobra 5–10% por venda, ideal para e-commerce premium com acesso completo à plataforma e personalizações opcionais por tarefa.'
		},
		{
			question: 'Posso customizar o design e a UX da minha loja?',
			answer:
				'Sim. Oferecemos customização ilimitada em design, UX e funcionalidades, com geração de conteúdo por IA, prototipagem e front-ends headless componíveis para atender às necessidades da sua marca.'
		},
		{
			question: 'Quais integrações o Bagity oferece?',
			answer:
				'O Bagity integra via API e webhooks com os principais ERPs, CRMs (via AutoCRM) e plataformas de pagamento como FinXPay, além de CMSs como WooCommerce e Ghost.'
		},
		{
			question: 'Como a IA potencializa meu e-commerce com Bagity?',
			answer:
				'Incluímos recursos de IA como geração automática de conteúdo de produtos, qualificação inteligente de leads com o chatbot AutoCRM e análises baseadas em ML para aumentar vendas e engajamento.'
		},
		{
			question: 'O SEO e a indexação estão otimizados para descoberta por IA?',
			answer:
				'Sim. Nossa tecnologia própria e infraestrutura especializada na nuvem garantem alta indexação no Google e compatibilidade com LLMs para melhor visibilidade e performance de busca.'
		}
	]
};
