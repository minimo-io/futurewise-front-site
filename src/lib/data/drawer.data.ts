import {
	Wine,
	PackageOpen,
	Droplets,
	Store,
	Factory,
	Hop,
	Activity,
	Bird,
	ShoppingBag,
	Box
} from '@lucide/svelte';
import type { DrawerData } from '$lib/types/drawer.types';

// pre-fetched data
export const drawerData = {
	en: [
		{
			id: 'products',
			name: 'Products',
			icon: Wine,
			subMenu: true
		} as DrawerData
	],
	pt: [
		{
			id: 'caresync',
			name: 'CareSync',
			slogan: 'Manutenção preditiva',
			icon: Activity,
			subMenu: false,
			isBold: true
		} as DrawerData,

		{
			id: 'finx',
			name: 'Finx',
			slogan: 'Pagamentos x-border em tempo real',
			icon: Bird,
			subMenu: false,
			isBold: true
		} as DrawerData,

		{
			id: 'baity',
			name: 'Bagity',
			slogan: 'E-commerce & menus inteligentes',
			icon: ShoppingBag,
			subMenu: false,
			isBold: true
		} as DrawerData,

		{
			id: 'delibra',
			name: 'Delibra',
			slogan: 'Fluxo integrado de envios',
			icon: Box,
			subMenu: false,
			isBold: true
		} as DrawerData,

		{
			id: 'braaay',
			name: 'Braaay',
			slogan: 'Clube vinhos boutique & MCP server',
			icon: Wine,
			isBold: true,
			subMenu: false
		} as DrawerData

		// {
		// 	id: 'organic',
		// 	name: 'Orgânicos',
		// 	icon: Leaf,
		// 	url: '/tag/vinhos-organicos/',
		// } as DrawerData,
	],
	es: [
		{
			id: 'products',
			name: 'Productos',
			icon: Wine,
			subMenu: true
		} as DrawerData,
		{
			id: 'beerstyles',
			name: 'Estilos',
			icon: Hop,
			subMenu: true
		} as DrawerData,
		{
			id: 'wines',
			name: 'Vinos',
			icon: Wine,
			url: '/uy/vinos/'
		} as DrawerData,
		{
			id: 'kits',
			name: 'Packs',
			icon: PackageOpen,
			url: ''
		} as DrawerData,
		{
			id: 'draft',
			name: 'Choperas',
			icon: Droplets,
			url: ''
		} as DrawerData,
		{
			id: 'breweries',
			name: 'Cervecerias',
			icon: Factory,
			url: ''
		} as DrawerData,
		{
			id: 'bars',
			name: 'Bares',
			icon: Store,
			url: ''
		} as DrawerData
	]
};
