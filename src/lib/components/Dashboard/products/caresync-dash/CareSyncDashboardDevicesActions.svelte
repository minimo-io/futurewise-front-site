<script lang="ts">
	import { RefreshCw } from '@lucide/svelte';
	import { m } from '$paraglide/messages';

	const { handleRefresh, isRefreshing, countdown } = $props<{
		handleRefresh: () => unknown;
		isRefreshing: boolean;
		countdown: number;
	}>();
</script>

<div>
	<div class="flex items-center justify-end p-4">
		<button class="btn btn-primary" onclick={handleRefresh} disabled={isRefreshing}>
			<RefreshCw class="h-4 w-4 {isRefreshing ? 'animate-spin' : ''}" />
			{m.refresh()}
		</button>
		<div class="ml-4 text-sm text-gray-500">
			{m.refreshingIn({ seconds: countdown })}
		</div>
	</div>
</div>
