<script lang="ts">
	import { Product } from '$lib/type/products.types';
	import HeaderButtons from '../Header/HeaderButtons.svelte';
	import CareSyncDashboard from '$dashboards/caresync-dash/CareSyncDashboard.svelte';

	interface Props {
		product: Product;
	}
	let { product }: Props = $props();
</script>

<div class="flex h-full w-full flex-col">
	<div class="border-base-200 flex h-25 items-center justify-between border-b">
		<!-- Dashboard title -->
		<div class="text-primary pl-5 text-lg font-black uppercase">Dashboard</div>
		<!-- Dashboard buttons -->
		<nav class="relative z-20 flex items-center justify-between pr-10">
			<HeaderButtons isDashboard={true} />
		</nav>
	</div>
	<div class="text-base-200 flex text-center">
		{#if product == 'CARESYNC'}
			<CareSyncDashboard />
		{:else}
			UNKNOWN DASHBOARD
		{/if}
	</div>
</div>
