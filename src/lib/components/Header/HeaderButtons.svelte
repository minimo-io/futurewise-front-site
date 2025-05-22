<script lang="ts">
	import { Command, Globe, Hammer, Menu, Search, X } from '@lucide/svelte';
	import HeaderMenu from './HeaderMenu.svelte';
	import { onMount } from 'svelte';
	import { openCommandPalette } from '$lib/stores/CommandPallete.state.svelte';
	import { m } from '$paraglide/messages';
	import { toggleDrawer, drawerState } from '$stores/DrawerState.state.svelte';
	import { getLocale, locales, localizeHref } from '$paraglide/runtime';
	import { getLocaleName, redirectLocale } from '$utils';

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
				<!-- <Hammer class="h-5" strokeWidth="1" /> -->
				<Search class="h-5" strokeWidth="1" />
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

		<div class="dropdown dropdown-end">
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

			<ul class="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
				{#each locales as locale, i}
					<li>
						<button class="capitalize" onclick={() => redirectLocale(locale)}>
							<img src="/flags/{locale}.png" alt="flag-{locale}" class="aspect-1 h-[17px]" />
							<span class="self-center font-semibold tracking-wider capitalize"
								>{getLocaleName(locale)}</span
							>
						</button>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Mobile -->
		<button
			onclick={() => {
				// alert('Open drawer...');
				toggleDrawer();
			}}
			class="dropdown dropdown-end bg-base-200 hover:bg-base-100 fw-header-fs relative items-center rounded-full p-3 md:hidden"
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
			href={localizeHref('/soon')}
			class="bg-base-200 hover:bg-base-100 flex items-center rounded-full px-5 py-3 text-[13px] font-light uppercase md:px-8 md:text-[15px]"
		>
			<span class="relative top-[1px]">
				{m.login()}
			</span>
		</a>
	</div>
</div>
