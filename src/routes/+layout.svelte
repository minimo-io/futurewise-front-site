<script lang="ts">
	import '../app.css';
	import CommandPalette from '$lib/components/CommandPalette.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<Header />

<main class="font-sans-pro bg-base-100 text-base-content min-h-screen">
	{@render children()}

	<CommandPalette />
</main>

<Footer />
