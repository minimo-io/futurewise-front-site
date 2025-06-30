// src/routes/blog/[slug]/+page.server.ts
import { error } from '@sveltejs/kit';
import { posts } from '$lib/data/posts';

export async function load({ params }) {
	const { slug } = params;
	const post = posts.find((p) => p.slug === slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	// Exclude the icon from serialization
	const { icon, ...serializablePost } = post;

	return {
		post: serializablePost,
		iconName: typeof icon === 'function' ? icon.name : null // Pass icon name if available
	};
}
