<script lang="ts">
	import { openCommandPalette } from '$lib/stores/CommandPallete.state.svelte';
	import { getLocale } from '$paraglide/runtime';
	import { drawerState, toggleDrawer } from '$stores/DrawerState.state.svelte';
	import { Command, Menu, Search, X } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import ChatLlmButton from '../Buttons/ChatLlmButton.svelte';
	import LanguageButton from '../Buttons/LanguageButton.svelte';
	import LoginDashboardButton from '../Buttons/LoginDashboardButton.svelte';

	interface Props {
		showToolsShortcuts?: boolean;
	}
	let { showToolsShortcuts = true }: Props = $props();

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
	<div class="flex items-center gap-[10px] md:gap-4">
		<!-- Resto of the site -->
		<div class="relative hidden md:block">
			<button
				class="bg-base-200 hover:bg-base-100 fw-header-fs rounded-full p-3"
				onclick={handleHammerClick}
			>
				<!-- <Hammer class="h-5" strokeWidth="1" /> -->
				<Search class="h-5" strokeWidth="1" />
			</button>
			{#if showToolsShortcuts}
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
			{/if}
		</div>

		<ChatLlmButton showCheck={false} />
		<LanguageButton />
		<LoginDashboardButton />

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
