<!-- src/lib/components/Home/Products.svelte -->
<script lang="ts">
	import ProductSingle from '$lib/components/Home/ProductSingle.svelte';
	import type { Brand } from '$lib/types/brands.types';
	import { Activity, ShoppingBag, Scale3D, Shrub } from '@lucide/svelte';

	let products: Brand[] = [
		{
			name: 'CareSync',
			slogan: 'Manutenção TI preditiva',
			sloganDetails: 'e preventiva potenciada por IA',
			underDevelopment: false,
			icon: Activity
		},
		{
			name: 'Bagity',
			slogan: 'e-Commerce & Menus',
			sloganDetails: 'Inteligentes & Na medida',
			underDevelopment: false,
			icon: ShoppingBag
		},
		{
			name: 'FinXB',
			slogan: 'Pagamentos x-border',
			sloganDetails: 'Transparentes via USD/USDT <br /> & BITCOIN',
			underDevelopment: false,
			icon: Scale3D
		},
		{
			name: 'Growify',
			slogan: 'Gestão de porfolio',
			sloganDetails: 'De investimentos Bitcoin/Crypto <br /> Forex, FIIs',
			underDevelopment: true,
			icon: Shrub
		}
	];
</script>

<div class="max-w-futurewise relative mx-auto mt-10 mb-1 flex">
	{#each products as product, i (product.name)}
		{@const align = i === 0 ? 'start' : i === products.length - 1 ? 'end' : 'center'}
		<!-- {@const align = 'center'} -->

		<ProductSingle brand={product} {align} icon={product.icon} />
	{/each}

	<div class="absolute -top-[65%] left-[60%] scale-40 opacity-70">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>

	<div class="absolute -right-[20%] -bottom-[10%] scale-50 opacity-50">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>
</div>
