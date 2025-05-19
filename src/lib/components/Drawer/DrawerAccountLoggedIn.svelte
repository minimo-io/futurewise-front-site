<script lang="ts">
	import { page } from '$app/state';
	import {
		ChevronRight,
		Truck,
		Heart,
		House,
		Mail,
		LogOut,
		UsersRound,
		Coins,
		Sparkle
	} from '@lucide/svelte';
	import { openSubmenu } from '$stores/DrawerState.state.svelte';
	// import { redirectHref } from '$lib/utils';
	// import { logout } from '$lib/graphql/auth';
	// import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { m } from '$paraglide/messages';

	// let returnUrl = $derived(page.url.href);

	async function handleLogout() {
		console.log('Simulated logout');
		// event.preventDefault();
		// toggleLoader();
		// let logoutResult = logout();
		// redirectHref(returnUrl);
	}
</script>

<div class="flex flex-1 flex-col px-0 text-xs">
	<!-- Item with submenu -->
	<button
		onclick={() => alert('Em breve')}
		class="border-grey-lighter font-roboto text-grey-dark shine-effect flex w-full justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<Heart class="mr-2 h-4 w-4 self-center" fill="red" color="red" />
			<span class="self-center font-semibold">Minha lista</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<ChevronRight class="aspect-1 text-grey-dark w-4" />
		</div>
	</button>
	<!-- Item with submenu -->
	<button
		onclick={() => openSubmenu('account_loggedin', 'Meus pedidos')}
		class="border-grey-lighter font-roboto text-grey-dark shine-effect flex w-full justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<Truck class="mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">Meus pedidos</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<ChevronRight class="aspect-1 text-grey-dark w-4" />
		</div>
	</button>

	<!-- Item with submenu -->
	<button
		onclick={() => openSubmenu('account_myaddresses', 'Meus endereços')}
		class="border-grey-lighter font-roboto text-grey-dark shine-effect flex w-full justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<House class="mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">Meus dados</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<ChevronRight class="aspect-1 text-grey-dark w-4" />
		</div>
	</button>
	<!-- Item with submenu -->
	<button
		onclick={() => openSubmenu('account_emailpreferences', 'Preferências de e-mail')}
		class="border-grey-lighter font-roboto text-grey-dark shine-effect flex w-full justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<Mail class="mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">Preferências de e-mail</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<ChevronRight class="aspect-1 text-grey-dark w-4" />
		</div>
	</button>

	<button
		class="border-grey-lighter font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
		onclick={() => handleLogout()}
	>
		<div class="flex justify-center self-center text-left align-middle">
			<LogOut class="mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">{m.exit()}</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<ChevronRight class="aspect-1 text-grey-dark w-4" />
		</div>
	</button>

	<!-- Assinaturas -->
	<div class="flex flex-col px-0 text-xs">
		<div class="border-grey-lighter flex items-center border-b px-[30px]">
			<h2 class="my-5 text-base font-extrabold uppercase">Benefícios</h2>
		</div>
	</div>
	<button
		class="border-grey-lighter font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
		onclick={() => alert('Soon')}
	>
		<div class="flex justify-center self-center text-left align-middle">
			<Sparkle class="text-sun mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">Assinatura ao clube</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<ChevronRight class="aspect-1 text-grey-dark w-4" />
		</div>
	</button>
	<button
		class="border-grey-lighter font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
		onclick={() => alert('Soon')}
	>
		<div class="flex justify-center self-center text-left align-middle">
			<UsersRound class="mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">Compras coletivas</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<ChevronRight class="aspect-1 text-grey-dark w-4" />
		</div>
	</button>

	<button
		class="border-grey-lighter font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
		onclick={() => alert('Soon')}
	>
		<div class="flex justify-center self-center text-left align-middle">
			<Coins class="mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">Cashback</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<ChevronRight class="aspect-1 text-grey-dark w-4" />
		</div>
	</button>
</div>
