import { Activity, Cable, ShoppingBag, Zap } from '@lucide/svelte';
import type { ProductDrawerData } from '$lib/type/products.types';
import { localizeHref } from '$paraglide/runtime';

// pre-fetched data
export const drawerData = {
	en: [
		{
			id: 'care',
			name: 'Care',
			slogan: 'Predictive IT Maintenance + ITMS',
			sloganSimple: '',
			details: 'IT Asset Management + Services <br />AI-Powered',
			icon: Activity,
			subMenu: false,
			isBold: true,
			primary: false,
			url: localizeHref('/care')
		} as ProductDrawerData,

		{
			id: 'store',
			name: 'Store',
			slogan: 'Headless E-commerce with Superpowers',
			sloganSimple: 'E-commerce with Superpowers',
			details: 'Headless Front-End<br />Modern UX + MCP Servers',
			icon: ShoppingBag,
			subMenu: false,
			isBold: true,
			underDevelopment: false,
			primary: false,
			online: true,
			url: localizeHref('/store')
		} as ProductDrawerData,

		{
			id: 'pay',
			name: 'Pay',
			slogan: 'Real-time X-Border Payments',
			sloganSimple: 'X-Border BTC/USDT Payments',
			details: 'Transparent, Realtime<br /> & Cross-border',
			icon: Zap,
			subMenu: false,
			isBold: true,
			primary: false,
			underDevelopment: true,
			url: localizeHref('/pay')
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
			id: 'apis',
			name: 'APIs',
			slogan: 'Tools for Fast App development',
			sloganSimple: 'Tools for Fast App development',
			details: 'Enterprise ready APIs<br /> Integrate in a few lines of code',
			icon: Cable,
			subMenu: false,
			isBold: true,
			primary: true,
			underDevelopment: true,
			url: localizeHref('/docs')
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
		{
			id: 'care',
			name: 'Care',
			slogan: 'Manutenção TI Preditiva + ITMS',
			sloganSimple: '',
			details: 'Gestão de ativos TI + Serviços <br />Potenciados por IA',
			icon: Activity,
			subMenu: false,
			isBold: true,
			primary: false,
			underDevelopment: true,
			url: localizeHref('/care')
		} as ProductDrawerData,

		{
			id: 'store',
			name: 'Store',
			slogan: 'Headless E-commerce com Superpoderes',
			sloganSimple: 'E-commerce com Superpoderes',
			details: 'Headless Front-End<br />UX moderno + MCP Servers',
			icon: ShoppingBag,
			// underDevelopment: true,
			primary: false,
			subMenu: false,
			isBold: true,
			online: true,
			url: localizeHref('/store')
		} as ProductDrawerData,

		{
			id: 'pay',
			name: 'Pay',
			slogan: 'Pagamentos X-Border em Tempo Real',
			sloganSimple: 'Pagamentos X-Border BTC/USDT',
			details: 'Transparentes, Real-Time<br /> & Cross-Border',
			icon: Zap,
			subMenu: false,
			isBold: true,
			primary: false,
			underDevelopment: true,
			url: localizeHref('/pay')
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
			id: 'apis',
			name: 'APIs',
			slogan: 'Ferramentas para Desenvolvimento',
			sloganSimple: 'Ferramentas para Desenvolvimento',
			details: 'APIs prontas para empresas<br /> Integre em poucas linhas de código',
			icon: Cable,
			primary: true,
			subMenu: false,
			isBold: true,
			underDevelopment: true,
			url: localizeHref('/soon')
		} as ProductDrawerData
	],
	es: [
		{
			id: 'care',
			name: 'Care',
			slogan: 'Mantenimiento TI Predictivo + ITMS',
			sloganSimple: '',
			details: 'Gestión de activos TI + Servicios <br />Potenciados por IA',
			icon: Activity,
			subMenu: false,
			isBold: true,
			primary: false,
			url: localizeHref('/care')
		} as ProductDrawerData,

		{
			id: 'store',
			name: 'Store',
			slogan: 'E-commerce Headless con Superpoderes',
			sloganSimple: 'E-commerce con Superpoderes',
			details: 'Headless Front-End <br />UX moderno + Servidores MCP',
			icon: ShoppingBag,
			underDevelopment: false,
			subMenu: false,
			isBold: true,
			primary: false,
			online: true,
			url: localizeHref('/store')
		} as ProductDrawerData,

		// slogan: 'Real-time X-Border Payments',
		// sloganSimple: 'X-Border BTC/USDT Payments',
		// details: 'Transparent, Realtime<br /> & Cross-border',

		{
			id: 'pay',
			name: 'Pay',

			slogan: 'Pagos X-Border en Tiempo Real',
			sloganSimple: 'Pagos BTC/USDT X-Border',
			details: 'Transparentes, en Tiempo Real<br /> y Cross-Border',
			icon: Zap,
			primary: false,
			subMenu: false,
			isBold: true,
			underDevelopment: true,
			url: localizeHref('/pay')
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
			id: 'apis',
			name: 'APIs',
			slogan: 'Herramientas para Desarrollo Ágil',
			sloganSimple: 'Herramientas para desarrollo',
			details: 'APIs listas para empresas<br /> Integre en pocas líneas de código',
			icon: Cable,
			primary: true,
			underDevelopment: true,
			subMenu: false,
			isBold: true,
			url: localizeHref('/soon')
		} as ProductDrawerData
	]
};
