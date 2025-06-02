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
	import BackToTop from '$lib/components/BackToTop.svelte';

	let { children } = $props();

	afterNavigate(() => {
		// Close drawer if active
		closeDrawer();
	});

	function globalKeyHandler(event: KeyboardEvent) {
		// Only fire “L” when neither ⌘ (meta) nor Ctrl is held down
		if ((event.key === 'l' || event.key === 'L') && !event.metaKey && !event.ctrlKey) {
			event.preventDefault();
			goto(localizeHref('/login'));
		}

		// “B” always goes back one page
		if ((event.key === 'b' || event.key === 'B') && !event.metaKey && !event.ctrlKey) {
			event.preventDefault();
			if (browser) {
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

<!-- Footer -->
<Footer />

<!-- Back To Top -->
<BackToTop />
