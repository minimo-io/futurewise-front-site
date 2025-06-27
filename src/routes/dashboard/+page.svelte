<script lang="ts">
	import BarRight from '$lib/components/Dashboard/BarRight.svelte';
	import ContentDashboard from '$lib/components/Dashboard/ContentDashboard.svelte';
	import { Product } from '$lib/type/products.types';
</script>

<!-- Actual dashboard -->
<div class=" mx-auto w-full gap-10">
	<div class="mx-auto flex flex-row">
		<BarRight />
		<ContentDashboard product={Product.CARESYNC} />
	</div>
</div>
<!-- End Actual Dashboard -->
