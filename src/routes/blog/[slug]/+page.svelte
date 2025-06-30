<script lang="ts">
	import type { PageData } from './$types';
	import { m } from '$paraglide/messages';
	import Meta from '$lib/components/Meta.svelte';
	import HeaderDefined from '$lib/components/Header/HeaderDefined.svelte';
	import CtaContact from '$lib/components/CtaContact.svelte';

	let { data }: { data: PageData } = $props();
	// Or destructure directly:
	// let { data: { post } }: { data: PageData } = $props();
</script>

<Meta title={data.post.title} description={data.post.excerpt} />
<HeaderDefined headerButtons="institutional" mobileBorderB={true} />

<main>
	<div
		class="max-w-fw border-x-base-200 relative container my-0 text-center md:mx-auto md:border-0 md:border-x"
	>
		<article class="prose prose-invert mx-auto p-8">
			<h1>{data.post.title}</h1>
			<p class="lead">{data.post.excerpt}</p>
			{@html data.post.content}
		</article>

		<CtaContact />
	</div>
</main>
