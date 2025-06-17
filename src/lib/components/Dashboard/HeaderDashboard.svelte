<script lang="ts">
	import { fade } from 'svelte/transition';
	import HeaderLogo from '../Header/HeaderLogo.svelte';
	import HeaderButtons from '../Header/HeaderButtons.svelte';

	// let { buttons } = $props();
</script>

<header
	in:fade={{ duration: 150 }}
	class="border-primary-content relative px-(--fw-app-margin) md:px-0"
>
	<!-- Bg image -->
	<div class={['absolute inset-0 z-0 h-full bg-cover bg-center']}></div>

	<!-- Actual hero -->
	<div class="max-w-fw container mx-auto pt-5 pb-1">
		<nav class="relative z-20 flex items-center justify-between">
			<!-- Logos -->
			<HeaderLogo />

			<!-- Menus -->
			<HeaderButtons isDashboard={true} />
		</nav>
	</div>
	<!-- Navigation Dots -->
	<!-- <HeaderDots /> -->
	<!-- Decorations -->
	<div
		class="absolute top-[0%] right-[40%] z-10 hidden scale-50 opacity-60 md:bottom-[10%] md:block"
	>
		<img src="/bgs/cross.svg" alt="cross" class="origin-center" />
	</div>
</header>
