<script lang="ts">
	import { page } from '$app/state';
	import HeaderButtons from './HeaderButtons.svelte';
	import HeaderContent from './HeaderContent.svelte';
	import HeaderDecorations from './HeaderDecorations.svelte';
	import HeaderDots from './HeaderDots.svelte';
	import HeaderLogo from './HeaderLogo.svelte';

	let currentPath = $derived(page.url.pathname);

	interface Props {
		background?: 'space' | 'rocket';
		opacity?: '0' | '40';

		titleRight: string;
		titleLeft: string;
		heroContent: string;
	}

	let {
		background = 'space',
		opacity = '40',
		titleLeft,
		titleRight,
		heroContent
	}: Props = $props();
</script>

<header
	class="header border-primary-content md:fw-border-b-divider-dot relative px-(--fw-app-margin) md:px-0"
>
	<!-- Bg image -->
	<div
		class={[
			'absolute inset-0 z-0 h-full bg-cover bg-center',
			opacity == '0' && 'opacity-none',
			opacity == '40' && 'opacity-40',
			background == 'space' && 'fw-bg-space',
			background == 'rocket' && 'fw-bg-rocket'
		]}
	></div>

	<!-- Actual hero -->
	<div class="max-w-fw container mx-auto py-5">
		<nav class="relative z-20 flex items-center justify-between">
			<!-- Logos -->
			<HeaderLogo />

			<!-- Menus -->
			<HeaderButtons />
		</nav>

		<HeaderContent {titleLeft} {titleRight} {heroContent} />
	</div>
	<!-- Navigation Dots -->
	<HeaderDots />
	<!-- Decorations -->
	<HeaderDecorations />
</header>
