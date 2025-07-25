<script lang="ts">
	import Actions from './components/Actions.svelte';
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { formatEventTime } from '$utils';
	import Toast from '$lib/components/Toast.svelte';
	import { PencilLine } from '@lucide/svelte';

	let selectedEvent = $state<any>(null);
	let isEditing = $state(false);
	let editingDescription = $state('');
	let modal = $state<HTMLDialogElement>();
	let showToast = $state(false);
	let toastMessage = $state('');
	let toastType: 'success' | 'error' = $state('success');

	let { data } = $props();

	function openModal(event: any) {
		selectedEvent = event;
		isEditing = false;
		if (modal) {
			modal.showModal();
		}
	}

	function startEditing() {
		isEditing = true;
		editingDescription = selectedEvent?.description || '';
	}

	function cancelEditing() {
		isEditing = false;
		editingDescription = '';
	}

	function triggerToast(message: string, type: 'success' | 'error') {
		toastMessage = message;
		toastType = type;
		showToast = true;
		setTimeout(() => {
			showToast = false;
		}, 3000);
	}
</script>

<Toast bind:show={showToast} message={toastMessage} type={toastType} />
<Actions countdown={10} handleRefresh={() => {}} isRefreshing={false} />
<div class="overflow-x-auto">
	<table class="table w-full">
		<thead>
			<tr>
				<th>Event Time</th>
				<th>Event Type</th>
				<th>Technician</th>
				<th>Content</th>
			</tr>
		</thead>
		<tbody class="text-white">
			{#if data.deviceHistory && data.deviceHistory.length > 0}
				{#each data.deviceHistory as event, i (i)}
					<tr>
						<td>{formatEventTime(event.event_time)}</td>
						<td>{event.event_type}</td>
						<td>{event.technician_name}</td>
						<td>
							<button class="btn btn-sm btn-primary btn-outline" onclick={() => openModal(event)}>
								Detalhes
							</button>
						</td>
					</tr>
				{/each}
			{:else}
				<tr>
					<td colspan="4" class="text-secondary text-center">No history found for this device.</td>
				</tr>
			{/if}
		</tbody>
	</table>
</div>

<!-- Service Details Modal -->
<dialog bind:this={modal} class="modal modal-backdrop">
	<div class="modal-backdrop h-dvh bg-[rgba(0,0,0,0.8)]"></div>

	<form method="dialog">
		<button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2 text-white">✕</button>
	</form>
	<div class="modal-box border-base-300 max-h-[90%] w-11/12 max-w-5xl border">
		<div class="border-base-200 flex items-center justify-between border-b pb-3">
			<h3 class="text-base-content text-left text-lg font-bold uppercase">Detalhes do Serviço</h3>
			{#if !isEditing}
				<button class="btn btn-sm btn-secondary btn-outline" onclick={startEditing}>
					<PencilLine class="mr-1 h-4 w-4" />
					Edit
				</button>
			{:else}
				<div class="flex items-center gap-2">
					<button type="button" class="btn btn-sm btn-ghost" onclick={cancelEditing}>
						Cancel
					</button>
					<button type="submit" form="edit-service-form" class="btn btn-sm btn-primary">
						Save Changes
					</button>
				</div>
			{/if}
		</div>

		{#if !isEditing}
			<!-- View Mode -->
			<div class="py-4">
				<div class="text-secondary border-base-200 mb-5 border-b pb-4 text-left font-mono text-xs">
					{formatEventTime(selectedEvent?.event_time)} -
					{selectedEvent?.technician_name}
				</div>
				<p class="text-base-content mb-4 text-left font-mono text-xs whitespace-pre-wrap">
					{selectedEvent?.description || 'No description available'}
				</p>
			</div>
		{:else}
			<!-- Edit Mode -->
			<form
				method="POST"
				action="?/updateServiceHistory"
				id="edit-service-form"
				use:enhance={() => {
					return async ({ result }) => {
						if (result.type === 'success') {
							isEditing = false;
							modal?.close();
							triggerToast('Service history updated successfully!', 'success');
							invalidateAll();
						} else if (result.type === 'error') {
							triggerToast('Failed to update service history.', 'error');
						}
					};
				}}
			>
				<input type="hidden" name="historyId" value={selectedEvent?.id} />
				<div class="border-base-300 flex h-full border py-4">
					<textarea
						name="description"
						bind:value={editingDescription}
						class="textarea textarea-bordered text-base-content bg-base-100 h-80 w-full font-mono text-xs md:h-96"
						placeholder="Enter service description..."
						required
					></textarea>
				</div>
			</form>
		{/if}
	</div>

	<form method="dialog">
		<button>close</button>
	</form>
</dialog>
