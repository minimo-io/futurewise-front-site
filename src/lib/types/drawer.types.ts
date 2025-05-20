import { type Icon as IconType } from '@lucide/svelte';

export interface DrawerData {
	id: string;
	name: string;
	slogan?: string;
	icon: typeof IconType;
	subMenu: boolean;
	url?: string;
	isBold?: boolean;
}

export interface Grapes {
	name: string;
	url: string;
	count: number;
}

// Define the type for the source data
export interface WineCountrySource {
	name: string;
	url: string;
	flag: string;
	count: number;
}

export interface WineCountriesData {
	pt: WineCountrySource[];
	uy: WineCountrySource[];
}
