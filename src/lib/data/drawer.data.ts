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
			icon: Activity,
			subMenu: false,
			isBold: true,
			url: localizeHref('/caresync')
		} as DrawerData,

		{
			id: 'finx',
			name: 'FinX',
			slogan: 'Real-time x-border payments',
			icon: Bird,
			subMenu: false,
			isBold: true,
			url: localizeHref('/finx')
		} as DrawerData,

		{
			id: 'bagity',
			name: 'Bagity',
			slogan: 'E-commerce & smart menus',
			icon: ShoppingBag,
			subMenu: false,
			isBold: true,
			url: localizeHref('/bagity')
		} as DrawerData,

		{
			id: 'delibra',
			name: 'Delibra',
			slogan: 'Integrated shipping flows',
			icon: Box,
			subMenu: false,
			isBold: true,
			url: localizeHref('/delibra')
		} as DrawerData,

		{
			id: 'braaay',
			name: 'Braaay',
			slogan: 'Boutique wine club & MCP Server',
			icon: Wine,
			isBold: true,
			subMenu: false,
			url: 'https://braaay.com/'
		} as DrawerData
	],
	pt: [
		{
			id: 'caresync',
			name: 'CareSync',
			slogan: 'Manutenção TI preditiva',
			icon: Activity,
			subMenu: false,
			isBold: true,
			url: localizeHref('/caresync')
		} as DrawerData,

		{
			id: 'finx',
			name: 'FinX',
			slogan: 'Pagamentos x-border em tempo real',
			icon: Bird,
			subMenu: false,
			isBold: true,
			url: localizeHref('/finx')
		} as DrawerData,

		{
			id: 'bagity',
			name: 'Bagity',
			slogan: 'E-commerce & menus inteligentes',
			icon: ShoppingBag,
			subMenu: false,
			isBold: true,
			url: localizeHref('/bagity')
		} as DrawerData,

		{
			id: 'delibra',
			name: 'Delibra',
			slogan: 'Fluxo integrado de envios',
			icon: Box,
			subMenu: false,
			isBold: true,
			url: localizeHref('/delibra')
		} as DrawerData,

		{
			id: 'braaay',
			name: 'Braaay',
			slogan: 'Clube vinhos boutique & MCP server',
			icon: Wine,
			isBold: true,
			subMenu: false,
			url: 'https://braaay.com/'
		} as DrawerData
	],
	es: [
		{
			id: 'caresync',
			name: 'CareSync',
			slogan: 'Mantenimiento TI predictivo',
			icon: Activity,
			subMenu: false,
			isBold: true,
			url: localizeHref('/caresync')
		} as DrawerData,

		{
			id: 'finx',
			name: 'FinX',
			slogan: 'Pagos x-border en tiempo real',
			icon: Bird,
			subMenu: false,
			isBold: true,
			url: localizeHref('/finx')
		} as DrawerData,

		{
			id: 'bagity',
			name: 'Bagity',
			slogan: 'E-commerce & menús inteligentes',
			icon: ShoppingBag,
			subMenu: false,
			isBold: true,
			url: localizeHref('/bagity')
		} as DrawerData,

		{
			id: 'delibra',
			name: 'Delibra',
			slogan: 'Flujo integrado de envíos',
			icon: Box,
			subMenu: false,
			isBold: true,
			url: localizeHref('/delibra')
		} as DrawerData,

		{
			id: 'braaay',
			name: 'Braaay',
			slogan: 'Club de vinos boutique y MCP server',
			icon: Wine,
			isBold: true,
			subMenu: false,
			url: 'https://braaay.com/'
		} as DrawerData
	]
};
