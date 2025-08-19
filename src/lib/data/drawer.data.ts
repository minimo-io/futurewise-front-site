import { Activity, Bird, BotMessageSquare, ShoppingBag } from '@lucide/svelte';
import type { ProductDrawerData } from '$lib/type/products.types';
import { localizeHref } from '$paraglide/runtime';

// pre-fetched data
export const drawerData = {
	en: [
		{
			id: 'caresync',
			name: 'CareSync',
			slogan: 'Predictive IT Maintenance + ITMS',
			sloganSimple: '',
			details: 'IT Asset Management + Services <br />AI-Powered',
			icon: Activity,
			subMenu: false,
			isBold: true,
			url: localizeHref('/caresync')
		} as ProductDrawerData,

		// {
		// 	id: 'braaay',
		// 	name: 'Braaay',
		// 	slogan: 'Boutique wine club + MCP Server',
		// 	sloganSimple: 'Boutique wine club',
		// 	details: '+Special Beers and Olive Oils<br/>+MCP Server',
		// 	icon: Wine,
		// 	isBold: true,
		// 	subMenu: false,
		// 	primary: true,
		// 	logo: '/clients/braaay-logo.png',
		// 	url: 'https://braaay.com/'
		// } as DrawerData,

		{
			id: 'bagity',
			name: 'Bagity',
			slogan: 'Headless E-commerce with Superpowers',
			sloganSimple: 'E-commerce with Superpowers',
			details: 'Headless Front-End<br />Modern UX + MCP Servers',
			icon: ShoppingBag,
			subMenu: false,
			isBold: true,
			underDevelopment: false,
			primary: true,
			online: true,
			url: localizeHref('/bagity')
		} as ProductDrawerData,

		{
			id: 'finx',
			name: 'FinXPay',
			slogan: 'Real-time Cross-Border Payments',
			sloganSimple: 'X-Border Real-Time Payments',
			details: 'Global and transparent<br />Fiat, Stablecoins & Bitcoin',
			icon: Bird,
			logo: '/products/finx/finx-logo-2.svg',
			subMenu: false,
			isBold: true,
			primary: true,
			underDevelopment: true,
			url: localizeHref('/finx')
		} as ProductDrawerData,

		// {
		// 	id: 'delibra',
		// 	name: 'Delibra',
		// 	slogan: 'Integrated Shipping Workflow',
		// 	sloganSimple: 'Integrated shipping workflow',
		// 	details: 'Automation, tracking<br />and price',
		// 	icon: Box,
		// 	subMenu: false,
		// 	isBold: true,
		// 	url: localizeHref('/delibra')
		// } as DrawerData,

		{
			id: 'autocrm',
			name: 'AutoCRM',
			slogan: 'HelpDesk Automation with AI',
			sloganSimple: 'HelpDesk Automation',
			details: 'IA ChatBot <br />That Syncs with your CRM',
			icon: BotMessageSquare,
			subMenu: false,
			isBold: true,
			underDevelopment: true,
			url: localizeHref('/soon')
		} as ProductDrawerData

		// {
		// 	id: 'nostradamus',
		// 	name: 'Nostradamus',
		// 	slogan: 'On-Demand Nostr Intelligence',
		// 	sloganSimple: 'On-Demand Nostr Intelligence',
		// 	details: 'Sats-Driven Nostr Insights<br />See Further on Nostr.',
		// 	icon: WandSparkles,
		// 	subMenu: false,
		// 	isBold: true,
		// 	url: localizeHref('/nostradamus')
		// } as DrawerData
	],
	pt: [
		// {
		// 	id: 'braaay',
		// 	name: 'Braaay',
		// 	slogan: 'Clube vinhos boutique + MCP Server',
		// 	sloganSimple: 'Clube vinhos boutique',
		// 	details: '+Cervejas e Azeites especiais<br/>+MCP Server',
		// 	icon: Wine,
		// 	isBold: true,
		// 	subMenu: false,
		// 	primary: true,
		// 	logo: '/clients/braaay-logo.png',
		// 	url: 'https://braaay.com/'
		// } as DrawerData,
		{
			id: 'caresync',
			name: 'CareSync',
			slogan: 'Manutenção TI Preditiva + ITMS',
			sloganSimple: '',
			details: 'Gestão de ativos TI + Serviços <br />Potenciados por IA',
			icon: Activity,
			subMenu: false,
			isBold: true,
			primary: false,
			underDevelopment: true,
			url: localizeHref('/caresync')
		} as ProductDrawerData,

		{
			id: 'bagity',
			name: 'Bagity',
			slogan: 'Headless E-commerce com Superpoderes',
			sloganSimple: 'E-commerce com Superpoderes',
			details: 'Headless Front-End<br />UX moderno + MCP Servers',
			icon: ShoppingBag,
			// underDevelopment: true,
			primary: true,
			subMenu: false,
			isBold: true,
			online: true,
			url: localizeHref('/bagity')
		} as ProductDrawerData,

		{
			id: 'finx',
			name: 'FinXPay',
			slogan: 'Pagamentos X-Border em Tempo Real',
			sloganSimple: 'Pagamentos X-Border Instantâneos',
			details: 'Transparentes & Real-Time<br />Fiat, Stablecoins & Bitcoin',
			icon: Bird,
			logo: '/products/finx/finx-logo-2.svg',
			subMenu: false,
			isBold: true,
			primary: true,
			underDevelopment: true,
			url: localizeHref('/finx')
		} as ProductDrawerData,

		// {
		// 	id: 'delibra',
		// 	name: 'Delibra',
		// 	slogan: 'Fluxo Integrado de Envios',
		// 	sloganSimple: 'Fluxo integrado de envios',
		// 	details: 'Automação, rastreio<br />e melhor preço',
		// 	icon: Box,
		// 	subMenu: false,
		// 	isBold: true,
		// 	url: localizeHref('/delibra')
		// } as DrawerData,

		// {
		// 	id: 'nostradamus',
		// 	name: 'Nostradamus',
		// 	slogan: 'On-Demand Nostr Intelligence',
		// 	sloganSimple: 'On-Demand Nostr Intelligence',
		// 	details: 'Sats-Driven Nostr Insights<br />See Further.',
		// 	icon: WandSparkles,
		// 	subMenu: false,
		// 	isBold: true,
		// 	url: localizeHref('/nostradamus')
		// } as DrawerData
		{
			id: 'autocrm',
			name: 'AutoCRM',
			slogan: 'Automatização de Atendimentos',
			sloganSimple: 'Automatização de Atendimentos',
			details: 'Chatbot de IA <br />Que sincroniza com seu CRM',
			icon: BotMessageSquare,
			subMenu: false,
			isBold: true,
			underDevelopment: true,
			url: localizeHref('/soon')
		} as ProductDrawerData
	],
	es: [
		{
			id: 'caresync',
			name: 'CareSync',
			slogan: 'Mantenimiento TI Predictivo + ITMS',
			sloganSimple: '',
			details: 'Gestión de activos TI + Servicios <br />Potenciados por IA',
			icon: Activity,
			subMenu: false,
			isBold: true,
			url: localizeHref('/caresync')
		} as ProductDrawerData,

		// {
		// 	id: 'braaay',
		// 	name: 'Braaay',
		// 	slogan: 'Club de vinos boutique + MCP Server',
		// 	sloganSimple: 'Club de vinos boutique',
		// 	details: '+Cervezas y Aceites especiales<br/>+MCP Server',
		// 	icon: Wine,
		// 	isBold: true,
		// 	subMenu: false,
		// 	primary: true,
		// 	logo: '/clients/braaay-logo.png',
		// 	url: 'https://braaay.com/'
		// } as DrawerData,

		{
			id: 'bagity',
			name: 'Bagity',
			slogan: 'E-commerce Headless con Superpoderes',
			sloganSimple: 'E-commerce con Superpoderes',
			details: 'Headless Front-End <br />UX moderno + Servidores MCP',
			icon: ShoppingBag,
			underDevelopment: false,
			subMenu: false,
			isBold: true,
			primary: true,
			online: true,
			url: localizeHref('/bagity')
		} as ProductDrawerData,

		{
			id: 'finx',
			name: 'FinXPay',
			slogan: 'Pagos X-Border en Tiempo Real',
			sloganSimple: 'Pagos Globales Instantáneos',
			details: 'Transparentes & Real-Time<br />Fiat, Stablecoins y Bitcoin',
			icon: Bird,
			logo: '/products/finx/finx-logo-2.svg',
			primary: true,
			subMenu: false,
			isBold: true,
			underDevelopment: true,
			url: localizeHref('/finx')
		} as ProductDrawerData,

		// {
		// 	id: 'delibra',
		// 	name: 'Delibra',
		// 	slogan: 'Flujo Integrado de Envíos',
		// 	sloganSimple: 'Flujo integrado de envíos',
		// 	details: 'Automatización, seguimiento<br />y mejor precio',
		// 	icon: Box,
		// 	subMenu: false,
		// 	isBold: true,
		// 	url: localizeHref('/delibra')
		// } as DrawerData,

		// {
		// 	id: 'nostradamus',
		// 	name: 'Nostradamus',
		// 	slogan: 'On-Demand Nostr Intelligence',
		// 	sloganSimple: 'On-Demand Nostr Intelligence',
		// 	details: 'Sats-Driven Nostr Insights<br />See Further on Nostr.',
		// 	icon: WandSparkles,
		// 	subMenu: false,
		// 	isBold: true,
		// 	url: localizeHref('/nostradamus')
		// } as DrawerData

		{
			id: 'autocrm',
			name: 'AutoCRM',
			slogan: 'Automatización de Asistencia con IA',
			sloganSimple: 'Automatización de Asistencia',
			details: 'Chatbot de IA <br />Que se sincroniza con tu CRM',
			icon: BotMessageSquare,
			underDevelopment: true,
			subMenu: false,
			isBold: true,
			url: localizeHref('/soon')
		} as ProductDrawerData
	]
};
