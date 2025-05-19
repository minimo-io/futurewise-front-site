<!-- src/lib/components/ui/Drawer.svelte -->
<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import { drawerState, goBackToMainMenu } from '$stores/DrawerState.state.svelte';
	import { ArrowLeft } from '@lucide/svelte';

	import DrawerMain from './DrawerMain.svelte';
	import DrawerAccount from './DrawerAccount.svelte';
	import DrawerAccountLoggedIn from './DrawerAccountLoggedIn.svelte';
</script>

<div
	class="fixed inset-y-0 left-0 z-10 transform border-0 transition-transform duration-200 ease-in-out"
	class:translate-y-0={drawerState.active}
	class:-translate-y-full={!drawerState.active}
	class:mt-[115px]={drawerState.active}
>
	<div class="flex h-full w-screen flex-col justify-start overflow-hidden bg-white md:w-64">
		{#if drawerState.currentSubmenu}
			<div class="flex flex-col px-0 text-xs">
				<div class="border-grey-lighter flex items-center border-b px-[30px]">
					<button onclick={goBackToMainMenu} class="text-blue mr-3 flex items-center">
						<ArrowLeft class="h-4 w-4" />

						<h2 class="my-5 text-base font-extrabold uppercase">{drawerState.currentName}</h2>
					</button>
				</div>
			</div>
		{/if}

		{#if !drawerState.currentSubmenu}
			<DrawerMain />
		{:else if drawerState.currentSubmenu === 'account'}
			<div in:fly={{ x: 300, duration: 300, easing: quintOut }} class="overflow-y-auto">
				<DrawerAccount />
			</div>
		{:else if drawerState.currentSubmenu === 'account_loggedin'}
			<div in:fly={{ x: 300, duration: 300, easing: quintOut }} class="overflow-y-auto">
				<DrawerAccountLoggedIn />
			</div>
		{/if}
	</div>
</div>
