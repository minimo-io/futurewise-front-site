<script lang="ts">
	import type { Post } from '$lib/type/blog.types';
	import TopPostsCard from './topPostsCard.svelte';
	import { posts } from '$lib/data/posts';

	let articles: Post[] = posts;
</script>

<div class="border-base-200 relative grid grid-cols-1 gap-1 border-b md:grid-cols-3 md:gap-0">
	{#each articles as article, i (i)}
		<TopPostsCard {article} />
	{/each}
</div>
