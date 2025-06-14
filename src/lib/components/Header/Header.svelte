<script lang="ts">
	import { page } from '$app/state';
	import HeaderButtons from './HeaderButtons.svelte';
	import HeaderContent from './HeaderContent.svelte';
	import HeaderDecorations from './HeaderDecorations.svelte';
	import HeaderDots from './HeaderDots.svelte';
	import HeaderLogo from './HeaderLogo.svelte';
	import { fade } from 'svelte/transition';
	import { deLocalizeUrl } from '$paraglide/runtime';

	// let currentPath = $derived(page.url.pathname);
	const delocalizedPath = deLocalizeUrl(page.url).pathname;

	interface Props {
		background?: 'space' | 'rocket' | 'astronaut' | 'construction';
		opacity?: '0' | '40';

		titleRight: string;
		titleLeft: string;
		heroContent: string;
		buttons?: boolean;
	}

	let {
		background = 'space',
		opacity = '40',
		titleLeft,
		titleRight,
		heroContent,
		buttons = true
	}: Props = $props();
</script>

<header
	in:fade={{ duration: 150 }}
	class="border-primary-content relative px-(--fw-app-margin) md:px-0"
>
	<!-- Bg image -->
	<div
		class={[
			'absolute inset-0 z-0 h-full bg-cover bg-center',
			opacity == '0' && 'opacity-none',
			opacity == '40' && 'opacity-40',
			background == 'space' && 'fw-bg-space',
			background == 'astronaut' && 'fw-bg-astronaut',
			background == 'construction' && 'fw-bg-construction',
			background == 'rocket' && 'fw-bg-rocket scale-x-[-1] bg-right md:scale-x-100 md:bg-center'
		]}
	></div>

	<!-- Actual hero -->
	<div class="max-w-fw container mx-auto pt-5 pb-1">
		<nav class="relative z-20 flex items-center justify-between">
			<!-- Logos -->
			<HeaderLogo />

			<!-- Menus -->

			<HeaderButtons />
		</nav>

		<HeaderContent {titleLeft} {titleRight} {heroContent} {buttons} />
	</div>
	<!-- Navigation Dots -->
	<HeaderDots />
	<!-- Decorations -->
	<HeaderDecorations />

	<!-- {#if delocalizedPath == '/'} -->
	<!-- <div
		class="pointer-events-none absolute right-0 bottom-0 left-0 block h-20 bg-gradient-to-t from-black via-black/20 to-transparent md:block"
	></div> -->
	<!-- {/if} -->
</header>
