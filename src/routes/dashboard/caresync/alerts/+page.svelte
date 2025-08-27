<script lang="ts">
	import type { PageData } from './$types';
	import { machineTypeCode } from '$utils/string.utils';
	import { localizeHref } from '$paraglide/runtime';
	import { formatEventTime } from '$utils/date.utils';

	export let data: PageData;

	let descriptionModal: HTMLDialogElement;
	let selectedAlertDescription: string | null = null;

	const severityClasses = {
		HIGH: 'badge-error',
		NORMAL: 'badge-warning',
		LOW: 'badge-success'
	};

	function openDescriptionModal(description: string) {
		selectedAlertDescription = description;
		if (descriptionModal) {
			descriptionModal.showModal();
		}
	}
</script>

<div class="container mx-auto">
	<div class="border-base-200 border-b py-4">
		<h1 class="text-base-content text-2xl font-bold">CareSync Device Alerts</h1>
	</div>

	<div class="overflow-x-auto">
		<table class="table w-full">
			<thead>
				<tr>
					<th class="text-base-content">Device</th>
					<th class="text-base-content">Created At</th>
					<th class="text-base-content">Solved At</th>
					<th class="text-base-content">Alert Type</th>
					<th class="text-base-content">Technician</th>
					<th class="text-base-content">Status</th>
					<th class="text-base-content">Severity</th>
					<th class="text-base-content">Actions</th>
				</tr>
			</thead>
			<tbody>
				{#if data.alerts && data.alerts.length > 0}
					{#each data.alerts as alert}
						{@const deviceUrl = localizeHref(`/dashboard/caresync/device/${alert.device_id}`)}
						<tr>
							<td class="text-base-content">
								<a href={deviceUrl} class="text-primary">
									{machineTypeCode(alert.device_type)}-{alert.device_report_id}{alert.is_owned_by_contact ? '-CP' : ''}
								</a>
							</td>
							<td class="text-base-content">{formatEventTime(alert.created_at)}</td>
							<td class="text-base-content"
								>{alert.solved_at ? formatEventTime(alert.solved_at) : 'N/A'}</td
							>
							<td class="text-base-content">{alert.alert_type_name}</td>
							<td class="text-base-content">{alert.technician_name}</td>
							<td>
								<div class="badge badge-outline">{alert.status}</div>
							</td>
							<td>
								<div class={`badge ${severityClasses[alert.severity] || 'badge-ghost'}`}>
									{alert.severity}
								</div>
							</td>
							<td>
								<button class="btn btn-sm btn-primary" on:click={() => openDescriptionModal(alert.description)}>
									Details
								</button>
							</td>
						</tr>
					{/each}
				{:else}
					<tr>
						<td colspan="8" class="text-base-content py-4 text-center">No alerts found.</td>
					</tr>
				{/if}
			</tbody>
		</table>
	</div>
</div>

<dialog bind:this={descriptionModal} class="modal">
	<form method="dialog">
		<button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2 z-10 text-base-content">✕</button>
	</form>
	<div class="modal-box border-base-300 w-11/12 max-w-4xl border p-0">
		<div class="p-4 text-left">
			<h3 class="font-bold text-lg text-base-content">Alert Description</h3>
			<p class="py-4 text-base-content font-mono text-xs">{selectedAlertDescription}</p>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>