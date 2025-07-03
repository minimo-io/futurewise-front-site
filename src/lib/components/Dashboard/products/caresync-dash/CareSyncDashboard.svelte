<script lang="ts">
	import CareSyncDashboardDevices from './CareSyncDashboardDevices.svelte';

	// This should be store (selected from the menu)
	const loadAction = 'caresync_devices';
</script>

<div class="h-full w-full">
	<!-- All different Caresync menu option components here -->

	{#if loadAction == 'caresync_devices'}
		<CareSyncDashboardDevices />
	{/if}
</div>
