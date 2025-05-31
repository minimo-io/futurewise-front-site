<script lang="ts">
	import HeaderLogo from '$lib/components/Header/HeaderLogo.svelte';
	import { fade } from 'svelte/transition';
	import HeaderLoginButtons from './HeaderLoginButtons.svelte';
	// import HeaderDecorations from './HeaderDecorations.svelte';
</script>

<header
	in:fade={{ duration: 150 }}
	class="border-primary-content border-b-base-200 relative border-b px-(--fw-app-margin) pb-4 md:px-0"
>
	<!-- Actual hero -->
	<div class="max-w-fw container mx-auto pt-5 pb-1">
		<nav class="relative z-20 flex items-center justify-between">
			<!-- Logos -->
			<HeaderLogo />

			<!-- Menus -->
			<HeaderLoginButtons />
		</nav>
	</div>
	<!-- Decorations -->
	<!-- <HeaderDecorations /> -->
</header>
