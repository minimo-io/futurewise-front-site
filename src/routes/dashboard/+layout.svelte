<script lang="ts">
	import MenuLeft from '$lib/components/Dashboard/MenuLeft.svelte';
	import HeaderButtonsDashboard from '$lib/components/Header/HeaderButtonsDashboard.svelte';

	let { children } = $props();
</script>

<!-- Actual dashboard -->
<div class="mx-auto h-screen w-full gap-10 overflow-x-auto">
	<div class="mx-auto flex h-full flex-row">
		<MenuLeft />
		<!-- <ContentDashboard /> -->

		<div class="flex h-full w-full flex-col">
			<div class="border-base-200 flex h-[65px] items-center justify-between border-b md:h-25">
				<!-- Dashboard title -->
				<div class="text-primary pl-5 text-lg font-black uppercase">Dashboard</div>
				<!-- Dashboard buttons -->
				<nav class="relative z-20 flex items-center justify-between pr-10">
					<HeaderButtonsDashboard />
				</nav>
			</div>
			<div class="text-base-200 flex text-center">
				{@render children()}
			</div>
		</div>
	</div>
</div>
<!-- End Actual Dashboard -->
