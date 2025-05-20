<!-- src/lib/components/Home/Products.svelte -->
<script lang="ts">
	import ProductSingle from '$lib/components/Home/ProductSingle.svelte';
	import type { Brand } from '$lib/types/brands.types';
	import { Activity, Shrub, ShoppingBag, Bird, PackageOpen } from '@lucide/svelte';

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
			sloganDetails: 'Globais, em tempo real <br />via Fiat, USDT & BITCOIN',
			underDevelopment: false,
			icon: Bird
		},
		{
			name: 'Braaay',
			slogan: 'Clube de vinhos boutique',
			sloganDetails: 'E cervejas especiais <br /> MCP Server para IA',
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
			slogan: 'Fluxo integrado de envios.',
			sloganDetails: 'API. Dashboard. Plugins.',
			underDevelopment: false,
			icon: PackageOpen
		}

		// {
		// 	name: 'Growify',
		// 	slogan: 'Gestão de portfolio',
		// 	sloganDetails: 'De investimentos Crypto <br /> Forex, FIIs',
		// 	underDevelopment: false,
		// 	icon: Shrub
		// }
	];
</script>

<div class="relative mx-auto mt-10 mb-1 flex flex-col items-center justify-center md:flex-row">
	{#each products as product, i (product.name)}
		{@const align = i === 0 ? 'start' : i === products.length - 1 ? 'end' : 'center'}

		<!-- {@const align = 'center'} -->
		<!-- 	minWidth={product.name == 'Braaay' ? 'min-w-[366px]' : ''} -->
		<ProductSingle brand={product} {align} icon={product.icon} primary={product.primary} />
	{/each}

	<div class="absolute -bottom-[40%] left-[55%] scale-80 opacity-20">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>

	<!-- <div class="absolute -top-[55%] right-[55%] scale-50 opacity-50">
		<img src="/bgs/cross.svg" alt="cross" />
	</div> -->
</div>
