<!-- src/lib/components/Home/Products.svelte -->
<script lang="ts">
	import ProductSingle from '$lib/components/Home/ProductSingle.svelte';
	import type { Brand } from '$lib/types/brands.types';

	let products: Brand[] = [
		{
			name: 'ViiVPay',
			slogan: 'LATAM PAYMENTS',
			sloganDetails: '',
			underDevelopment: false,
			link: 'https://viivpay.com',
			logo: '/clients/viivpay-logo.png'
		},
		{
			name: 'Braaay',
			slogan: 'BOUTIQUE WINES CLUB',
			sloganDetails: '',
			link: 'https://braaay.com/',
			underDevelopment: false,
			logo: '/clients/braaay-logo.png'
		}
		// {
		// 	name: 'AGF',
		// 	slogan: 'Call-Center/Tercerizacao',
		// 	sloganDetails: '',
		// 	link: 'https://agentefaz.net/',
		// 	underDevelopment: false,
		// 	logo: '/clients/agf-logo.png'
		// }
	];
</script>

<div class="max-w-futurewise relative mx-auto mt-8 flex">
	{#each products as product, i}
		{@const align = i === 0 ? 'start' : i === products.length - 1 ? 'end' : 'center'}
		<ProductSingle brand={product} {align} isClient={true} />
	{/each}

	<div class="absolute -top-[50%] right-[10%] scale-40 opacity-70">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>
</div>
