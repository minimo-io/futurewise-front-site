<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../app.css';
	import CommandPalette from '$lib/components/CommandPalette.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { afterNavigate, goto } from '$app/navigation';
	import { closeDrawer } from '$lib/stores/DrawerState.state.svelte';
	import Drawer from '$lib/components/Drawer/Drawer.svelte';
	import { onMount } from 'svelte';
	import { localizeHref } from '$paraglide/runtime';
	import { browser } from '$app/environment';

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

	function globalKeyHandler(event: KeyboardEvent) {
		// Command+K (Mac) or Ctrl+K (Windows/Linux)
		if (event.key === 'l' || event.key === 'L') {
			event.preventDefault();
			goto(localizeHref('/login'));
		}

		if (event.key === 'b' || event.key === 'B') {
			event.preventDefault();
			if (browser) {
				// Remove current page and go to previous
				window.history.back();
			}
		}
	}

	onMount(() => {
		document.addEventListener('keydown', globalKeyHandler);

		return () => {
			document.removeEventListener('keydown', globalKeyHandler);
		};
	});
</script>

<Meta />

{@render children()}

<!-- CMD + K -->
<CommandPalette />

<!-- Used as a mobile menu -->
<Drawer />

<Footer />
