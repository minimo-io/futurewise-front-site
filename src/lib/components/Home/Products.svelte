<script lang="ts">
	import ProductSingle from '$lib/components/Home/ProductSingle.svelte';
</script>

<div class="max-w-futurewise relative mx-auto mt-14 flex justify-evenly border">
	<!-- Product Card 1 -->
	<ProductSingle brand={{ name: 'CareSync' }} />

	<!-- Product Card 2 -->
	<ProductSingle brand={{ name: 'Bagity' }} />

	<!-- Product Card 3 -->
	<ProductSingle brand={{ name: 'ViiVPay' }} />

	<!-- Product Card 4 -->
	<ProductSingle brand={{ name: 'Growify' }} />
</div>
