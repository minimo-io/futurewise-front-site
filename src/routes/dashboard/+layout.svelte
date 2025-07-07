<script lang="ts">
	import BarRight from '$lib/components/Dashboard/BarRight.svelte';
	import HeaderButtons from '$lib/components/Header/HeaderButtons.svelte';

	// interface Props {
	// 	product: Product | undefined;
	// }
	// let { product }: Props = $props();

	// import ContentDashboard from '$lib/components/Dashboard/ContentDashboard.svelte';

	let { children } = $props();
</script>

<!-- Actual dashboard -->
<div class="mx-auto h-screen w-full gap-10">
	<div class="mx-auto flex flex-row">
		<BarRight />
		<!-- <ContentDashboard /> -->

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
				{@render children()}
			</div>
		</div>
	</div>
</div>
<!-- End Actual Dashboard -->
