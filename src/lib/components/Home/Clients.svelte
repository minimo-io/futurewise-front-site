<!-- src/lib/components/Home/Products.svelte -->
<script lang="ts">
	import ProductSingle from '$lib/components/Home/ProductSingle.svelte';
	import type { Brand } from '$lib/types/brands.types';
	import Pill from '../Pill.svelte';

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
	<!-- {#each products as product, i} -->
	<!-- {@const align = i === 0 ? 'start' : i === products.length - 1 ? 'end' : 'center'} -->

	<!-- VIIVPAY -->
	<ProductSingle
		brand={{
			name: 'ViiVPay',
			slogan: 'PAGAMENTOS',
			sloganDetails: 'Visitar',
			underDevelopment: false,
			link: 'https://viivpay.com',
			logo: '/clients/viivpay-logo.png'
		}}
		align={'center'}
		isClient={true}
		primary={true}
		minWidth="min-w-[366px]"
	/>
	<!-- {/each} -->

	<!-- BRAAAY -->
	<ProductSingle
		brand={{
			name: 'Braaay',
			slogan: 'CLUBE DE VINHOS',
			sloganDetails: 'Visitar',
			link: 'https://braaay.com/',
			underDevelopment: false,
			logo: '/clients/braaay-logo.png'
		}}
		align={'center'}
		minWidth="min-w-[366px]"
		primary={true}
		isClient={true}
	/>

	<!-- AGF -->
	<!-- <ProductSingle
		brand={{
			name: 'AGF',
			slogan: 'Terceirização',
			sloganDetails: '',
			link: 'https://agentefaz.net/',
			underDevelopment: false,
			logo: '/clients/agf-logo.png'
		}}
		align={'center'}
		isClient={true}
	/> -->

	<a
		href="https://agentefaz.net"
		rel="nofollow noopener"
		target="_blank"
		class="relative min-w-[366px] rounded-sm opacity-90 hover:opacity-50"
	>
		<div class="mb-4 flex flex-col justify-center">
			<div class="flex items-center justify-center">
				<div class="flex h-[60px] items-center">
					<img src="/clients/agf-logo.png" alt="AGF" class="h-[53px]" />
				</div>
			</div>
			<div class="justify-center">
				<div class="mx-auto max-w-[38%]">
					<Pill color="primary" text="Terceirização" />
				</div>
				<div
					class="text-primary mt-[10px] text-center text-[12px] tracking-wider uppercase opacity-70"
				>
					Visitar
				</div>
			</div>
		</div>
	</a>

	<div class="absolute -top-[50%] right-[10%] scale-40 opacity-70">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>
</div>
