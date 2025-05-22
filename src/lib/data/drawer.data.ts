import { Wine, Activity, Bird, ShoppingBag, Box } from '@lucide/svelte';
import type { DrawerData } from '$lib/types/drawer.types';
import { localizeHref } from '$paraglide/runtime';

// pre-fetched data
export const drawerData = {
	en: [
		{
			id: 'caresync',
			name: 'CareSync',
			slogan: 'Predictive IT maintenance',
			sloganSimple: '',
			details: 'IT Asset Management <br />AI-Powered',
			icon: Activity,
			subMenu: false,
			isBold: true,
			url: localizeHref('/caresync')
		} as DrawerData,

		{
			id: 'finx',
			name: 'FinX',
			slogan: 'Real-time X-Border payments',
			sloganSimple: 'X-Border payments',
			details: 'Global and transparent<br />Fiat, Stablecoins & Bitcoin',
			icon: Bird,
			subMenu: false,
			isBold: true,
			url: localizeHref('/finx')
		} as DrawerData,

		{
			id: 'braaay',
			name: 'Braaay',
			slogan: 'Boutique wine club + MCP Server',
			sloganSimple: 'Boutique wine club',
			details: '+Special Beers and Olive Oils<br/>+MCP Server',
			icon: Wine,
			isBold: true,
			subMenu: false,
			primary: true,
			logo: '/clients/braaay-logo.png',
			url: 'https://braaay.com/'
		} as DrawerData,

		{
			id: 'bagity',
			name: 'Bagity',
			slogan: 'E-commerce & smart menus',
			sloganSimple: 'E-commerce & menus',
			details: 'Headless Woocommerce<br />Ghost and Shopify',
			icon: ShoppingBag,
			subMenu: false,
			isBold: true,
			url: localizeHref('/bagity')
		} as DrawerData,

		{
			id: 'delibra',
			name: 'Delibra',
			slogan: 'Integrated shipping workflow',
			sloganSimple: 'Integrated shipping workflow',
			details: 'Automation, tracking<br />and agility',
			icon: Box,
			subMenu: false,
			isBold: true,
			url: localizeHref('/delibra')
		} as DrawerData
	],
	pt: [
		{
			id: 'caresync',
			name: 'CareSync',
			slogan: 'Manutenção TI preditiva',
			sloganSimple: '',
			details: 'Gestão de ativos TI <br />Potenciados por IA',
			icon: Activity,
			subMenu: false,
			isBold: true,
			url: localizeHref('/caresync')
		} as DrawerData,

		{
			id: 'finx',
			name: 'FinX',
			slogan: 'Pagamentos X-Border em tempo real',
			sloganSimple: 'Pagamentos X-Border',
			details: 'Globais e transparentes<br />Fiat, Stablecins & Bitcoin',
			icon: Bird,
			subMenu: false,
			isBold: true,
			url: localizeHref('/finx')
		} as DrawerData,

		{
			id: 'braaay',
			name: 'Braaay',
			slogan: 'Clube vinhos boutique + MCP Server',
			sloganSimple: 'Clube vinhos boutique',
			details: '+Cervejas e Azeites especiais<br/>+MCP Server',
			icon: Wine,
			isBold: true,
			subMenu: false,
			primary: true,
			logo: '/clients/braaay-logo.png',
			url: 'https://braaay.com/'
		} as DrawerData,

		{
			id: 'bagity',
			name: 'Bagity',
			slogan: 'E-commerce & menus inteligentes',
			sloganSimple: 'E-commerce & menus',
			details: 'Headless Woocommerce<br />Ghost e Shopify',
			icon: ShoppingBag,
			subMenu: false,
			isBold: true,
			url: localizeHref('/bagity')
		} as DrawerData,

		{
			id: 'delibra',
			name: 'Delibra',
			slogan: 'Fluxo integrado de envios',
			sloganSimple: 'Fluxo integrado de envios',
			details: 'Automação, rastreio<br />e agilidade',
			icon: Box,
			subMenu: false,
			isBold: true,
			url: localizeHref('/delibra')
		} as DrawerData
	],
	es: [
		{
			id: 'caresync',
			name: 'CareSync',
			slogan: 'Mantenimiento TI predictivo',
			sloganSimple: '',
			details: 'Gestión de activos TI <br />Potenciados por IA',
			icon: Activity,
			subMenu: false,
			isBold: true,
			url: localizeHref('/caresync')
		} as DrawerData,

		{
			id: 'finx',
			name: 'FinX',
			slogan: 'Pagos transfronterizos en tiempo real',
			sloganSimple: 'Pagos transfronterizos',
			details: 'Globales y transparentes<br />Fiat, Stablecoins y Bitcoin',
			icon: Bird,
			subMenu: false,
			isBold: true,
			url: localizeHref('/finx')
		} as DrawerData,

		{
			id: 'braaay',
			name: 'Braaay',
			slogan: 'Club de vinos boutique + MCP Server',
			sloganSimple: 'Club de vinos boutique',
			details: '+Cervezas y Aceites especiales<br/>+MCP Server',
			icon: Wine,
			isBold: true,
			subMenu: false,
			primary: true,
			logo: '/clients/braaay-logo.png',
			url: 'https://braaay.com/'
		} as DrawerData,

		{
			id: 'bagity',
			name: 'Bagity',
			slogan: 'E-commerce y menús inteligentes',
			sloganSimple: 'E-commerce y menús',
			details: 'Headless Woocommerce<br />Ghost y Shopify',
			icon: ShoppingBag,
			subMenu: false,
			isBold: true,
			url: localizeHref('/bagity')
		} as DrawerData,

		{
			id: 'delibra',
			name: 'Delibra',
			slogan: 'Flujo integrado de envíos',
			sloganSimple: 'Flujo integrado de envíos',
			details: 'Automatización, seguimiento<br />y agilidad',
			icon: Box,
			subMenu: false,
			isBold: true,
			url: localizeHref('/delibra')
		} as DrawerData
	]
};
