<script lang="ts">
	import { Command, Globe, Menu, Search, X } from '@lucide/svelte';
	import { page } from '$app/state';
	import HeaderMenu from './HeaderMenu.svelte';
	import { onMount } from 'svelte';
	import { openCommandPalette } from '$lib/stores/CommandPallete.state.svelte';
	import { m } from '$paraglide/messages';
	import { toggleDrawer, drawerState } from '$stores/DrawerState.state.svelte';
	import { getLocale, locales, localizeHref } from '$paraglide/runtime';
	import { getLocaleName, redirectLocale } from '$utils';
	import HeaderMenuDashboard from './HeaderMenuDashboard.svelte';
	import LanguageButton from '../Buttons/LanguageButton.svelte';
	import LoginDashboardButton from '../Buttons/LoginDashboardButton.svelte';
	import NotificationsButton from '../Buttons/NotificationsButton.svelte';
	import HelpButton from '../Buttons/HelpButton.svelte';
	import ProductSwitchButton from '../Buttons/ProductSwitchButton.svelte';

	interface Props {
		isDashboard?: boolean;
	}
	let { isDashboard = false }: Props = $props();

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
	{#if isDashboard}
		<HeaderMenuDashboard />
	{:else}
		<HeaderMenu />
	{/if}

	<div class="flex items-center gap-[10px] md:gap-4">
		<!-- Left header buttons -->
		{#if isDashboard}
			<!-- Dashboard -->
			<LanguageButton />
			<NotificationsButton />
			<HelpButton />
			<ProductSwitchButton />
			<!-- End Dashboard -->
		{:else}
			<!-- Resto of the site -->
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

			<LanguageButton />
			<LoginDashboardButton />
		{/if}

		<!-- Mobile Menu Trigger Button -->
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
	</div>
</div>
