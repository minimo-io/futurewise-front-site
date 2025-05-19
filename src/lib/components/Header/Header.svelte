<script lang="ts">
	import HeaderButtons from './HeaderButtons.svelte';
	import HeaderContent from './HeaderContent.svelte';
	import HeaderDecorations from './HeaderDecorations.svelte';
	import HeaderDots from './HeaderDots.svelte';
	import HeaderLogo from './HeaderLogo.svelte';
</script>

<header
	class="header border-primary-content md:fw-border-b-divider-dot relative px-(--fw-app-margin) md:px-0"
>
	<!-- Bg image -->
	<div
		class="absolute inset-0 z-0 h-full bg-[url('/bgs/ngc-2899.jpg')] bg-cover bg-center opacity-40"
	></div>

	<!-- Actual hero -->
	<div class="max-w-fw container mx-auto py-5">
		<nav class="relative z-10 flex items-center justify-between">
			<!-- Logos -->
			<HeaderLogo />

			<!-- Menus -->
			<HeaderButtons />
		</nav>

		<HeaderContent />
	</div>
	<!-- Dots navigation -->
	<HeaderDots />
	<!-- Decorations -->
	<HeaderDecorations />
</header>
