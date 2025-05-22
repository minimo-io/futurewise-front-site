<!-- src/lib/components/Home/Products.svelte -->
<script lang="ts">
	import ProductSingle from '$lib/components/Home/ProductSingle.svelte';
	import type { Brand } from '$lib/types/brands.types';
	import { Activity, ShoppingBag, Bird, Box } from '@lucide/svelte';
	import { getLocale } from '$paraglide/runtime';
	import { drawerData } from '$lib/data/drawer.data';

	const locale = $state(getLocale());
	let drawerDataForLang = $state(drawerData[locale]);

	let products: Brand[] = [
		{
			name: 'CareSync',
			slogan: 'Manutenção preditiva',
			sloganDetails: 'e preventiva potenciada por IA<br />E gestão de ativos TI',
			underDevelopment: false,
			icon: Activity
		},

		{
			name: 'FinX',
			slogan: 'Pagamentos x-border',
			sloganDetails: 'Globais, em tempo real <br />Fiat, USDT & BITCOIN',
			underDevelopment: false,
			icon: Bird
		},
		{
			name: 'Braaay',
			slogan: 'Clube vinhos boutique',
			sloganDetails: '+ Cervejas especiais <br /> IA MCP Server',
			underDevelopment: false,
			link: 'https://braaay.com/',
			logo: '/clients/braaay-logo.png',
			primary: true
		},
		{
			name: 'Bagity',
			slogan: 'e-Commerce & Menus',
			sloganDetails: 'Inteligentes & Na medida',
			underDevelopment: false,
			icon: ShoppingBag
		},

		{
			name: 'Delibra',
			slogan: 'Fluxo integrado de envios',
			sloganDetails: 'API. Dashboard. Plugins.',
			underDevelopment: false,
			icon: Box
		}
	];
</script>

<div
	class="relative mx-auto mt-10 mb-1 flex flex-col items-center justify-center gap-5 md:flex-row md:gap-0"
>
	<!-- {#each products as product, i (product.name)}
		{@const align = i === 0 ? 'start' : i === products.length - 1 ? 'end' : 'center'}

		<ProductSingle
			count={i}
			brand={product}
			{align}
			icon={product.icon}
			primary={product.primary}
		/>
	{/each} -->

	{#each drawerDataForLang as product, i (product.name)}
		{@const align = i === 0 ? 'start' : i === products.length - 1 ? 'end' : 'center'}

		<ProductSingle
			count={i}
			brand={product}
			{align}
			icon={product.icon}
			primary={product.primary}
		/>
	{/each}

	<div class="absolute -bottom-[40%] left-[55%] scale-80 opacity-20">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>
</div>
