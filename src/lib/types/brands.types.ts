import { type Icon as IconType } from '@lucide/svelte';

export interface Brand {
	name: string;
	logo?: string;
	slogan: string;
	sloganDetails: string;
	underDevelopment: boolean;
	link?: string;
	icon?: typeof IconType;
	primary?: boolean;
}
