<script lang="ts">
	import {
		ChevronRight,
		Tag,
		Headset,
		Globe,
		FlaskConical,
		PencilLine,
		Rss,
		FileCode
	} from '@lucide/svelte';
	import { openSubmenu } from '$stores/DrawerState.state.svelte';
	import { drawerData } from '$lib/data/drawer.data';
	import { localizeHref, getLocale } from '$paraglide/runtime';
	import WhatsappButton from '../WhatsappButton.svelte';
	import { getLocaleName } from '$utils';
	import { m } from '$paraglide/messages';
	const locale = $state(getLocale());
	let drawerDataForLang = $state(drawerData[locale]);
</script>

<div
	class="border-base-300 flex flex-1 flex-col overflow-x-hidden overflow-y-auto border-t px-0 text-xs"
>
	<!-- Item with submenu -->
	<button
		onclick={() => openSubmenu('fw_menu_languages', 'Idiomas')}
		class="border-base-300 font-roboto text-grey-dark shine-effect flex w-full justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<Globe class="mr-2 h-4 w-4 self-center" />
			<div class="self-center font-semibold">Idiomas</div>
			<div class="text-secondary ml-1 flex items-center gap-1">
				<span>—</span>
				<img src="/flags/{locale}.png" alt="flag-{locale}" class="aspect-1 h-[16px]" />
				<span class="capitalize">{getLocaleName(locale)}</span>
			</div>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<ChevronRight class="aspect-1 text-grey-dark w-4" />
		</div>
	</button>

	<h2 class="font-pixel my-4 px-[30px] text-base font-extrabold tracking-wider uppercase">
		{m.menuProducts()}
	</h2>
	<!-- Item with submenu -->
	<!-- <h2 class="my-5 px-[30px] text-base font-extrabold uppercase">PRODUTOS</h2> -->
	{#each drawerDataForLang as drawer, i}
		{#if drawer.subMenu}
			<!-- With Submenues -->
			<button
				onclick={() => openSubmenu(drawer.id, drawer.name)}
				class={[
					'border-base-300 font-roboto text-grey-dark shine-effect flex w-full justify-between border-b px-[30px] py-3 text-left align-middle text-sm',
					i == 0 ? 'border-t' : ''
				]}
			>
				<div class="flex justify-center self-center text-left align-middle">
					<!-- <Wine class="w-4 h-4 self-center mr-2" /> -->
					{#if drawer.logo}
						<img src={drawer.logo} alt={`${drawer.name} logo`} class="mr-0 w-12 max-w-12" />
					{:else if drawer.icon}
						<drawer.icon class="mr-2 h-4 w-4 self-center" />
					{/if}
					<!-- {#if drawer.icon}
						
					{/if} -->
					<div class={['self-center', drawer.isBold ? 'font-bold' : 'font-semibold']}>
						{drawer.name}
					</div>
					{#if drawer.slogan}
						<div class="text-secondary ml-1 truncate">— {drawer.sloganSimple}</div>
					{/if}
				</div>
				<div class="text-grey-medium flex flex-row self-center align-middle">
					<ChevronRight class="aspect-1 text-grey-dark w-4" />
				</div>
			</button>
		{:else}
			<a
				href={drawer.url}
				class={[
					'border-base-300 font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm',
					i == 0 ? 'border-t' : ''
				]}
			>
				<div class="flex min-w-0 flex-1 items-center">
					{#if drawer.logo}
						<img
							src={drawer.logo}
							alt={`${drawer.name} logo`}
							class="relative -left-[1px] mr-1 w-6 max-w-5 flex-shrink-0"
						/>
					{:else if drawer.icon}
						<drawer.icon class="mr-2 h-4 w-4 flex-shrink-0 self-center" />
					{/if}
					<div class={['flex-shrink-0 self-center', drawer.isBold ? 'font-bold' : 'font-semibold']}>
						{drawer.name}
					</div>
					{#if drawer.slogan}
						<div class="text-secondary ml-1 min-w-0 flex-1 truncate">
							— {drawer.slogan}
						</div>
					{/if}
				</div>
			</a>
		{/if}
	{/each}

	<!-- Fixed Extra Menu -->
	<h2 class="font-pixel my-4 px-[30px] text-base font-extrabold tracking-wider uppercase">
		{m.developers()}
	</h2>
	<a
		href={localizeHref('/docs')}
		class="border-base-300 font-roboto text-grey-dark shine-effect flex w-full justify-between border-t border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<FileCode class="mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">{m.documentation()}</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<!-- <ChevronRight class="aspect-1 text-grey-dark w-4" /> -->
		</div>
	</a>

	<a
		href={localizeHref('/status')}
		class="border-base-300 font-roboto text-grey-dark shine-effect flex w-full justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<Rss class="mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">API Status / Changelog</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<!-- <ChevronRight class="aspect-1 text-grey-dark w-4" /> -->
		</div>
	</a>

	<!-- Fixed Extra Menu -->
	<h2 class="font-pixel my-4 px-[30px] text-base font-extrabold tracking-wider uppercase">
		{m.resources()}
	</h2>

	<a
		href={localizeHref('/precios/')}
		class="border-base-300 font-roboto text-grey-dark shine-effect flex justify-between border-t border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<Tag class="text-sun mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">{m.menuPrices()}</span>
		</div>
		<!-- <div class="text-grey-medium flex flex-row self-center align-middle">
			<ChevronRight class="aspect-1 text-grey-dark w-4" />
		</div> -->
	</a>

	<!-- Item with submenu -->
	<a
		href={localizeHref('/login')}
		class="border-base-300 font-roboto text-grey-dark shine-effect flex w-full justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<FlaskConical class="mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">{m.aboutUs()}</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<!-- <ChevronRight class="aspect-1 text-grey-dark w-4" /> -->
		</div>
	</a>

	<!-- Item with submenu -->
	<button
		onclick={() => openSubmenu('account_loggedin', 'Minha conta')}
		class="border-base-300 font-roboto text-grey-dark shine-effect flex w-full justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<PencilLine class="mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">Blog</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<!-- <ChevronRight class="aspect-1 text-grey-dark w-4" /> -->
		</div>
	</button>

	<!-- Item with submenu -->
	<div
		class="border-base-300 font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<!-- <img class="w-4 h-4 self-center mr-2" src="/images/flags/uruguay.png" alt="uruguay-flag" /> -->
			<Headset class="mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">Atendimento</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<WhatsappButton />
		</div>
	</div>
</div>
