import { type Icon as IconType } from '@lucide/svelte';

export interface PostAuthor {
	avatar: string;
	fullName: string;
}

export interface Post {
	title: string;
	excerpt: string;
	content?: string;
	date: string;
	slug: string;
	isMain?: boolean;
	icon?: typeof IconType;
	authors: PostAuthor[];
}
