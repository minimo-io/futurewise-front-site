<!-- src/lib/components/Home/Products.svelte -->
<script lang="ts">
	import ProductSingle from '$lib/components/Home/ProductSingle.svelte';
	import type { Brand } from '$lib/types/brands.types';

	let products: Brand[] = [
		{
			name: 'Caresync',
			slogan: 'Manutenção TI preditiva',
			sloganDetails: 'e preventiva potenciada por IA',
			underDevelopment: false
		},
		{
			name: 'Bagity',
			slogan: 'e-Commerce & Menus',
			sloganDetails: 'Inteligentes & Na medida',
			underDevelopment: false
		},
		{
			name: 'ViiVPay',
			slogan: 'Pagamentos x-border',
			sloganDetails: 'Transparentes via USD/USDT <br /> & BITCOIN',
			underDevelopment: false
		},
		{
			name: 'Growify',
			slogan: 'Gestão de porfolio',
			sloganDetails: 'De investimentos Bitcoin/Crypto <br /> Forex, FIIs',
			underDevelopment: true
		}
	];
</script>

<div class="max-w-futurewise relative mx-auto mt-8 flex">
	{#each products as product, i}
		{@const align = i === 0 ? 'start' : i === products.length - 1 ? 'end' : 'center'}
		<ProductSingle brand={product} {align} />
	{/each}

	<div class="absolute -top-[65%] left-[60%] scale-40 opacity-70">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>
</div>
