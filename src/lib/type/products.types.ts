import { type Icon as IconType } from '@lucide/svelte';

export enum Product {
	CARESYNC = 'CARESYNC',
	FINX = 'FINX',
	BAGITY = 'BAGITY',
	AUTOCRM = 'AUTOCRM'
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
	primary?: boolean;
	logo?: string;
	underDevelopment?: boolean;
}
