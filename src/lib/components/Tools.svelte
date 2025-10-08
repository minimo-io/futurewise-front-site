<script>
	import { m } from '$paraglide/messages';
	import { Wrench } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { scale, fly } from 'svelte/transition';

	let showButton = $state(true);
	let scrollY = $state(0);

	// Show button when user scrolls down 300px
	$effect(() => {
		showButton = scrollY >= 0;
	});

	onMount(() => {
		const updateScrollY = () => (scrollY = window.scrollY);
		window.addEventListener('scroll', updateScrollY);

		return () => {
			window.removeEventListener('scroll', updateScrollY);
		};
	});

	function showTools() {
		alert(`${m.soon()}`);
	}
</script>

<svelte:window bind:scrollY />

{#if showButton}
	<button
		onclick={showTools}
		class="bg-primary hover:bg-primary-700 active:bg-primary-800 fixed right-(--fw-app-margin) bottom-4 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-none text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl active:translate-y-0 sm:bottom-4 sm:h-10 sm:w-10 md:right-8 md:bottom-8 md:h-12 md:w-12"
		aria-label="Back to top"
		title="Back to top"
		in:fly={{ y: 100, duration: 300 }}
		out:scale={{ duration: 200 }}
	>
		<Wrench class="h-5" />
	</button>
{/if}
