<script lang="ts">
	import '../app.css';
	import CommandPalette from '$lib/components/CommandPalette.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { afterNavigate } from '$app/navigation';
	import { closeDrawer } from '$lib/stores/DrawerState.state.svelte';
	import Drawer from '$lib/components/Drawer/Drawer.svelte';

	let { children } = $props();

	afterNavigate(() => {
		// Close drawer if active
		closeDrawer();
		// reset horizontal scroll on menu if exsits
		// const secondaryMenus = document.querySelectorAll('.bry-secondary-menu');

		// secondaryMenus.forEach((menu) => {
		// 	if (menu instanceof HTMLElement) {
		// 		menu.scrollLeft = 0;
		// 	}
		// });
	});
</script>

<Meta />

<Header />

<main class="font-sans-pro bg-base-100 text-base-content mx-(--fw-app-margin) min-h-screen">
	{@render children()}
</main>

<!-- CMD + K -->
<CommandPalette />

<!-- Used as a mobile menu -->
<Drawer />

<Footer />
