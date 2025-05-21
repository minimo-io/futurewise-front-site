<script lang="ts">
	import { Command, Globe, Hammer, Menu, X } from '@lucide/svelte';
	import HeaderMenu from './HeaderMenu.svelte';
	import { onMount } from 'svelte';
	import { openCommandPalette } from '$lib/stores/CommandPallete.state.svelte';
	import { m } from '$paraglide/messages';
	import { toggleDrawer, drawerState } from '$stores/DrawerState.state.svelte';
	import { getLocale } from '$paraglide/runtime';

	let isMac = $state<boolean | null>(null);
	let locale = $state(getLocale());

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
			<img
				src="/flags/{locale}.png"
				alt="flag"
				class="absolute -top-2 -right-1 h-[22px] w-[22px]"
			/>
			<Globe class="h-5" strokeWidth="1" />
		</button>

		<!-- Mobile -->
		<button
			onclick={() => {
				// alert('Open drawer...');
				toggleDrawer();
			}}
			class="bg-base-200 hover:bg-base-100 fw-header-fs relative items-center rounded-full p-3 md:hidden"
		>
			<img
				src="/flags/{locale}.png"
				alt="flag-{locale}"
				class="absolute -top-2 -right-1 h-[20px] w-[20px]"
			/>

			{#if drawerState.active}
				<X class="!mr-0 h-[22px]" />
			{:else}
				<Menu class="h-5" />
			{/if}
		</button>

		<!-- Desktop & Mobile -->
		<a
			href="https://dashboard.futurewise.lat/login"
			class="bg-base-200 hover:bg-base-100 flex items-center rounded-full px-5 py-3 text-[13px] font-light uppercase md:px-8 md:text-[15px]"
		>
			<span class="relative top-[1px]">
				{m.login()}
			</span>
		</a>
	</div>
</div>
