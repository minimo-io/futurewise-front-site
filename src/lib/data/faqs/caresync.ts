import type { Faq } from '$lib/type/faq.types';

export const caresyncFaqs: Record<string, Faq[]> = {
	en: [
		{
			question: 'What does ITAM (IT Asset Management) mean?',
			answer:
				'ITAM, which stands for Information Technology Asset Management, is a set of practices and processes that an organization uses to monitor, control, and optimize the entire lifecycle of its IT assets.'
		},
		{
			question: 'What does ITSM (IT Service Management) mean?',
			answer:
				'ITSM (Information Technology Service Management), or IT Service Management, is a set of processes and practices focused on designing, creating, delivering, supporting, and improving the IT services an organization offers to its end-users (internal or external clients). This includes Incident Management and Service Request Management.'
		},
		{
			question: 'How do I calculate my price?',
			answer:
				'At CareSync, we have two modalities: <strong>Self-management</strong> and the <strong>Managed/MSP mode</strong>. The Self-management mode has a cost per device of R$10/month, and Service Orders are charged per hour of technician work, R$50, on-demand, with detailed real-time reports of the work being performed and full transparency, with tracking via the Service Dashboard. The MSP mode is by monthly contract.'
		},
		{
			question: 'Is there a limit on users?',
			answer:
				'CareSync does not impose any limits on the number of users or features. Every device you add has full access to all system capabilities, including real-time asset monitoring, predictive failure detection and maintenance, tagging, service history, trend analysis, and more.'
		},
		{
			question: 'One of CareSync’s engagement models is "Managed/MSP"—but what exactly is an MSP?',
			answer:
				'In IT, an MSP (Managed Service Provider) is an outsourced company that takes responsibility for managing and supporting part or all of another organization’s IT infrastructure. Unlike the reactive "break‑fix" model—where support is called only after something fails—an MSP delivers proactive, ongoing monitoring, maintenance, and management under a monthly subscription contract. With CareSync’s MSP mode, we handle preventive and predictive maintenance on your devices, ensuring maximum uptime and freeing your team to focus on core business.'
		}
	],

	es: [
		{
			question: '¿Qué significa ITAM (Gestión de Activos de TI)?',
			answer:
				'ITAM, que significa Gestión de Activos de TI (Information Technology Asset Management), es un conjunto de prácticas y procesos que una organización utiliza para monitorear, controlar y optimizar el ciclo de vida completo de sus activos de TI.'
		},
		{
			question: '¿Qué significa ITSM (Gestión de Servicios de TI)?',
			answer:
				'ITSM (Information Technology Service Management), o Gestión de Servicios de TI, es un conjunto de procesos y prácticas enfocadas en diseñar, crear, entregar, soportar y mejorar los servicios de TI que una organización ofrece a sus usuarios finales (clientes internos o externos). Esto incluye la Gestión de Incidentes y la Gestión de Solicitudes de Servicio.'
		},
		{
			question: '¿Cómo calculo mi precio?',
			answer:
				'En CareSync, tenemos dos modalidades: <strong>Autogestión</strong> y el modo <strong>Gestionado/MSP</strong>. El modo Autogestión tiene un costo por equipo de R$10/mes y las Órdenes de Servicio se cobran por hora de trabajo de los técnicos, R$50, bajo demanda, con informes detallados en tiempo real del trabajo realizado y total transparencia, con seguimiento a través del Panel de Servicios. El modo MSP es por contrato mensual.'
		},
		{
			question: '¿Existe un límite de usuarios?',
			answer:
				'CareSync no impone límites en la cantidad de usuarios ni en las funcionalidades. Cada equipo que agregues tiene acceso completo a todas las capacidades del sistema, incluyendo monitoreo en tiempo real de activos, detección predictiva de fallas y mantenimiento, etiquetado, historial de servicios, análisis de tendencias y más.'
		},
		{
			question:
				'Uno de los modelos de contratación de CareSync es "Gestionado/MSP", ¿pero qué es exactamente un MSP?',
			answer:
				'En TI, un MSP (Managed Service Provider) es una empresa externa que asume la responsabilidad de gestionar y soportar parte o toda la infraestructura de TI de otra organización. A diferencia del modelo reactivo "rompe‑arregla", donde se solicita soporte solo cuando algo falla, un MSP ofrece monitoreo continuo, mantenimiento proactivo y gestión bajo un contrato de suscripción mensual. Con el modo MSP de CareSync, nos encargamos del mantenimiento preventivo e predictivo de sus equipos, garantizando máxima disponibilidad y liberando a su equipo para enfocarse en el negocio.'
		}
	],

	pt: [
		{
			question: 'O que significa ITAM? (Gerenciamento de Ativos de TI)',
			answer:
				'ITAM, que significa Gerenciamento de Ativos de TI (Information Technology Asset Management), é um conjunto de práticas e processos que uma organização utiliza para monitorar, controlar e otimizar o ciclo de vida completo de seus ativos de TI.'
		},
		{
			question: 'O que significa ITSM? (Gerenciamento de Serviços de TI)',
			answer:
				'ITSM (Information Technology Service Management), ou Gerenciamento de Serviços de TI, é um conjunto de processos e práticas focadas em projetar, criar, entregar, suportar e melhorar os serviços de TI que uma organização oferece aos seus usuários finais (clientes internos ou externos). Inclui Gerenciamento de Incidentes e Gerenciamento de Requisições de Serviço.'
		},
		{
			question: 'Como eu calculo o meu preço?',
			answer:
				'Na CareSync, temos duas modalidades: <strong>Auto-gestão</strong> e o modo <strong>Gerenciado/MSP</strong>. O modo Auto-gestão tem um custo por equipamento de R$10/Mês e as Ordens de Serviço são cobradas por hora de trabalho dos técnicos, R$50, sob demanda, com relatórios detalhados em tempo real do trabalho sendo realizado e transparência total. O acompanhamento é via o Dashboard de Serviços. O modo MSP é por contrato mensal.'
		},
		{
			question: 'Existe um limite de usuários?',
			answer:
				'A CareSync não impõe limites de usuários nem de funcionalidades. Cada equipamento adicionado tem acesso completo a todas as funcionalidades do sistema, incluindo monitoramento em tempo real de ativos, detecção preditiva de falhas e manutenção, tagging, histórico de serviços, análise de tendências e muito mais.'
		},
		{
			question: 'Um dos modelos de contratação é "Gestionado/MSP", mas o que exatamente é um MSP?',
			answer:
				'Em TI, um MSP (Managed Service Provider) é uma empresa terceirizada que assume a responsabilidade pela gestão e suporte de parte ou de toda a infraestrutura de TI de outra organização. Em vez de um modelo reativo de "quebra‑conserta", onde o cliente chama suporte apenas após uma falha, o MSP oferece monitoramento contínuo, manutenção proativa e gerenciamento sob contrato mensal. No modo MSP da CareSync, cuidamos da manutenção preventiva e preditiva dos seus equipamentos, garantindo máxima disponibilidade e liberando sua equipe para focar no negócio.'
		}
	]
};
