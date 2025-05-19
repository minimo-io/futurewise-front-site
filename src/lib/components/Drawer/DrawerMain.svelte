<script lang="ts">
	import { ChevronRight, CircleUser, Headset, Truck, Heart, Sparkle } from '@lucide/svelte';
	import { openSubmenu } from '$stores/DrawerState.state.svelte';
	import { drawerData } from '$lib/data/drawer.data';
	import { localizeHref, getLocale } from '../../../paraglide/runtime';
	// import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	// import WhatsappButton from '../buttons/WhatsappButton.svelte';
	// import { isAuthenticated } from '$lib/graphql/auth';

	let drawerDataForLang = $state(drawerData[getLocale()]);
</script>

<div class="flex flex-1 flex-col overflow-y-auto px-0 text-xs">
	<!-- <h2 class="px-[30px] my-5 uppercase font-extrabold text-base">Olá Erika,</h2> -->
	<!-- Item with submenu -->
	{#each drawerDataForLang as drawer, i}
		{#if drawer.subMenu}
			<button
				onclick={() => openSubmenu(drawer.id, drawer.name)}
				class={[
					'border-grey-lighter font-roboto text-grey-dark shine-effect flex w-full justify-between border-b px-[30px] py-3 text-left align-middle text-sm',
					drawer?.color == 'green' && '!text-bra',
					drawer?.color == 'red' && '!text-[red]'
				]}
			>
				<div class="flex justify-center self-center text-left align-middle">
					<!-- <Wine class="w-4 h-4 self-center mr-2" /> -->
					{#if drawer.icon}
						<drawer.icon class="mr-2 h-4 w-4 self-center" />
					{/if}
					<span class="self-center font-semibold">{drawer.name}</span>
				</div>
				<div class="text-grey-medium flex flex-row self-center align-middle">
					<ChevronRight class="aspect-1 text-grey-dark w-4" />
				</div>
			</button>
		{:else}
			<a
				href={drawer.url}
				class={[
					'border-grey-lighter font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm',
					drawer?.color == 'green' && '!text-bra',
					drawer?.color == 'red' && '!text-[red]'
				]}
			>
				<div class="flex justify-center self-center text-left align-middle">
					<drawer.icon class="mr-2 h-4 w-4 self-center" />
					<span class="self-center font-semibold">{drawer.name}</span>
				</div>
			</a>
		{/if}
	{/each}

	<!-- Fixed Extra Menu -->
	<h2 class="my-5 px-[30px] text-base font-extrabold uppercase">Conta</h2>
	{#if 1 == 1}
		<!-- Item with submenu -->
		<a
			href={localizeHref('/login')}
			class="border-grey-lighter font-roboto text-grey-dark shine-effect flex w-full justify-between border-t border-b px-[30px] py-3 text-left align-middle text-sm"
		>
			<div class="flex justify-center self-center text-left align-middle">
				<CircleUser class="mr-2 h-4 w-4 self-center" />
				<span class="self-center font-semibold">Acesso / Cadastro</span>
			</div>
			<div class="text-grey-medium flex flex-row self-center align-middle">
				<ChevronRight class="aspect-1 text-grey-dark w-4" />
			</div>
		</a>
	{:else}
		<!-- Item with submenu -->
		<button
			onclick={() => openSubmenu('account_loggedin', 'Minha conta')}
			class="border-grey-lighter font-roboto text-grey-dark shine-effect flex w-full justify-between border-t px-[30px] py-3 text-left align-middle text-sm"
		>
			<div class="flex justify-center self-center text-left align-middle">
				<CircleUser class="mr-2 h-4 w-4 self-center" />
				<span class="self-center font-semibold">Minha Conta</span>
			</div>
			<div class="text-grey-medium flex flex-row self-center align-middle">
				<ChevronRight class="aspect-1 text-grey-dark w-4" />
			</div>
		</button>
		<!-- Item with submenu -->
		<button
			onclick={() => alert('Em breve')}
			class="border-grey-lighter font-roboto text-grey-dark shine-effect flex w-full justify-between border-t border-b px-[30px] py-3 text-left align-middle text-sm"
		>
			<div class="flex justify-center self-center text-left align-middle">
				<Heart class="mr-2 h-4 w-4 self-center" fill="red" color="red" />
				<span class="self-center font-semibold">Minha lista</span>
			</div>
			<div class="text-grey-medium flex flex-row self-center align-middle">
				<ChevronRight class="aspect-1 text-grey-dark w-4" />
			</div>
		</button>
	{/if}
	<a
		href="/clube/"
		class="border-grey-lighter font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<Sparkle class="text-sun mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">Clube de benefícios — Conheça!</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<ChevronRight class="aspect-1 text-grey-dark w-4" />
		</div>
	</a>

	<!-- Item with submenu -->
	<div
		class="border-grey-lighter font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<!-- <img class="w-4 h-4 self-center mr-2" src="/images/flags/uruguay.png" alt="uruguay-flag" /> -->
			<Headset class="mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">Atendimento</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<!-- <WhatsappButton /> -->
			Whatsapp button
		</div>
	</div>
</div>
