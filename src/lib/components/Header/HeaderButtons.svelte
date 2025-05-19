<script lang="ts">
	import { Command, Globe, Hammer, Menu } from '@lucide/svelte';
	import HeaderMenu from './HeaderMenu.svelte';
	import { onMount } from 'svelte';
	import { openCommandPalette } from '$lib/stores/CommandPallete.state.svelte'; // Import the open function
	import { m } from '$paraglide/messages';

	let isMac = $state<boolean | null>(null);

	onMount(() => {
		isMac = /Mac/i.test(navigator.userAgent);
	});

	function handleHammerClick() {
		openCommandPalette(); // Call the global open function
	}
</script>

<div class="flex items-center gap-10 md:gap-16">
	<HeaderMenu />
	<div class="flex items-center gap-[10px] md:gap-4">
		<!-- Desktop -->
		<div class="relative hidden md:block">
			<button
				class="bg-base-200 hover:bg-base-100 fw-header-fs rounded-full p-3"
				onclick={handleHammerClick}
			>
				<Hammer class="h-5" strokeWidth="1" />
			</button>
			<div
				class="absolute left-1/2 mt-1 flex -translate-x-1/2 scale-90 items-center justify-center pr-2 opacity-70"
			>
				{#if isMac}
					<Command class="h-[14px]" />
				{:else}
					<span>CTRL+</span>
				{/if}
				<span>K</span>
			</div>
		</div>

		<button
			class="bg-base-200 hover:bg-base-100 fw-header-fs relative hidden rounded-full px-3 py-3 md:block"
		>
			<img src="/flags/brazil.png" alt="flag" class="absolute -top-2 -right-1 h-[22px] w-[22px]" />
			<Globe class="h-5" strokeWidth="1" />
		</button>

		<!-- Mobile -->
		<button
			class="bg-base-200 hover:bg-base-100 fw-header-fs relative items-center rounded-full p-3 md:hidden"
		>
			<img src="/flags/brazil.png" alt="flag" class="absolute -top-2 -right-1 h-[20px] w-[20px]" />
			<Menu class="h-5" strokeWidth="1" />
		</button>

		<!-- Desktop & Mobile -->
		<button
			class="bg-base-200 hover:bg-base-100 flex items-center rounded-full px-5 py-3 text-[13px] font-light uppercase md:px-8 md:text-[15px]"
		>
			{m.login()}
		</button>
	</div>
</div>
