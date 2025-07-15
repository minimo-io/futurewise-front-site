<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { ToastType } from '$lib/type/toast.types';

	let { message, type, show = $bindable() }: { message: string; type: ToastType; show: boolean } = $props();

	const typeClasses = {
		success: 'alert-success',
		error: 'alert-error'
	};
</script>

{#if show}
	<div transition:fly={{ y: 20, duration: 300 }} class="toast toast-top toast-center z-50">
		<div class="alert {typeClasses[type]}">
			<span>{message}</span>
		</div>
	</div>
{/if}