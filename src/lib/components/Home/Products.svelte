<!-- src/lib/components/Home/Products.svelte -->
<script lang="ts">
	import ProductSingle from '$lib/components/Home/ProductSingle.svelte';
	import type { Brand } from '$lib/types/brands.types';
	import { Activity, Scale3D, Shrub, ShoppingBag } from '@lucide/svelte';

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
			sloganDetails: 'Transparentes via USD/USDT <br /> & BITCOIN',
			underDevelopment: false,
			icon: Scale3D
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
			name: 'Growify',
			slogan: 'Gestão de portfolio',
			sloganDetails: 'De investimentos Crypto <br /> Forex, FIIs',
			underDevelopment: false,
			icon: Shrub
		},
		{
			name: 'Bagity',
			slogan: 'e-Commerce & Menus',
			sloganDetails: 'Inteligentes & Na medida',
			underDevelopment: false,
			icon: ShoppingBag
		}
	];
</script>

<div class="relative mx-auto mt-10 mb-1 flex items-center justify-center">
	{#each products as product, i (product.name)}
		{@const align = i === 0 ? 'start' : i === products.length - 1 ? 'end' : 'center'}

		<!-- {@const align = 'center'} -->
		<!-- 	minWidth={product.name == 'Braaay' ? 'min-w-[366px]' : ''} -->
		<ProductSingle brand={product} {align} icon={product.icon} primary={product.primary} />
	{/each}

	<div class="absolute -top-[65%] left-[60%] scale-40 opacity-70">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>

	<div class="absolute -right-[20%] -bottom-[10%] scale-50 opacity-50">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>
</div>
