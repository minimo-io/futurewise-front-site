// src/routes/blog/[slug]/+page.server.ts
import { error } from '@sveltejs/kit';
import { getLocale, localizeHref } from '$paraglide/runtime';
import type { PageServerLoad } from './$types';
import { posts } from '$lib/data/posts';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const lang = getLocale();
	const finalSlug = localizeHref(`/blog/${slug}`);
	// depends('paraglide:lang');

	// console.log('POSTS', posts[lang]);
	// console.log('FINAL_SLUG', finalSlug);
	// console.log('SLUG', slug);

	const post = posts[lang]?.find((p) => p.slug === finalSlug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	// Exclude the icon from serialization
	const { icon, ...serializablePost } = post;

	return {
		post: serializablePost,
		iconName: typeof icon === 'function' ? icon.name : null // Pass icon name if available
	};
};

// export const entries: EntryGenerator = () => {
// 	const allPosts = Object.values(posts).flat();
// 	const slugs = allPosts.map((post) => post.slug.split('/').pop() as string);
// 	const uniqueSlugs = [...new Set(slugs)];
// 	const allSlugs = uniqueSlugs.map((slug) => ({ slug }));
// 	console.log(allSlugs);
// 	return allSlugs;
// };

// export const prerender = true;
