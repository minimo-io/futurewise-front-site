<script lang="ts">
	import { RefreshCw } from '@lucide/svelte';
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';

	const { handleRefresh, isRefreshing, countdown } = $props<{
		handleRefresh: () => unknown;
		isRefreshing: boolean;
		countdown: number;
	}>();
</script>

<div class="border-base-200 flex justify-start border-b">
	<div class="flex items-center justify-end p-4">
		<a
			href={localizeHref('/dashboard/caresync/add-device')}
			class="btn btn-sm btn-secondary mr-2 tracking-wide"
		>
			{m.addDevice()}
		</a>
		<button
			class="btn btn-sm btn-primary tracking-wide"
			onclick={handleRefresh}
			disabled={isRefreshing}
		>
			<RefreshCw class="h-4 w-4 {isRefreshing ? 'animate-spin' : ''}" />
			{m.refresh()}
		</button>
		<div class="ml-4 text-sm text-gray-500">
			{m.refreshingIn({ seconds: countdown })}
		</div>
	</div>
</div>
