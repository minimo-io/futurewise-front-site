import type { PostAuthor } from '$types/blog.types';

export function authorsComposeName(authors: PostAuthor[]): string {
	const firstNames = authors.map((author) => author.fullName.trim().split(' ')[0]);
	return firstNames.join(' & ');
}
