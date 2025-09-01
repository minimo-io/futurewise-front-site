import { type Icon as IconType } from '@lucide/svelte';

export enum Product {
	CARE = 'CARE',
	PAY = 'PAY',
	STORE = 'STORE',
	API = 'APIS'
}

export interface ProductDrawerData {
	id: string;
	name: string;
	slogan?: string;
	sloganSimple?: string;
	icon: typeof IconType;
	details: string;
	// subMenu: boolean;
	url?: string;
	isBold?: boolean;
	primary: boolean;
	logo?: string;
	underDevelopment?: boolean;
	online?: boolean;
}
