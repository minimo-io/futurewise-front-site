import {
	Wine,
	Globe,
	PackageOpen,
	Droplets,
	Store,
	Factory,
	Hop,
	Code,
	Layers,
	FlaskConical
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
			id: 'products',
			name: 'Produtos',
			icon: Layers,
			subMenu: true
		} as DrawerData,
		{
			id: 'developers',
			name: 'Desenvolvedores',
			icon: Code,
			subMenu: true
		} as DrawerData,
		{
			id: 'languages',
			name: 'Idiomas',
			icon: Globe,
			subMenu: true
		} as DrawerData,

		// {
		// 	id: 'organic',
		// 	name: 'Orgânicos',
		// 	icon: Leaf,
		// 	url: '/tag/vinhos-organicos/',
		// 	color: 'green'
		// } as DrawerData,

		{
			id: 'lab',
			name: 'Laboratório',
			url: '/lab/',
			icon: FlaskConical
		} as DrawerData
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
