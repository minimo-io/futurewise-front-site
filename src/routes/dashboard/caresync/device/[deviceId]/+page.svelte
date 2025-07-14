<script lang="ts">
	import CareSyncDashboardDevicesActions from '$dashboards/caresync-dash/CareSyncDashboardDevicesActions.svelte';
	import type { Device } from '$types/caresync-machines.types';
	import { machineTypeCode } from '$utils';
	import { Laptop, PcCase } from '@lucide/svelte';
	import type { PageProps } from './$types';
	import Actions from './components/Actions.svelte';

	let { data }: PageProps = $props();

	let device: Device = $state(data.device);
	let deviceName = $derived(`${machineTypeCode(device.device_type)}-${device.device_id}`);

	let modal = $state<HTMLDialogElement>();

	function openModal() {
		if (modal) {
			modal.showModal();
		}
	}
</script>

<div class="flex w-full flex-col">
	<!-- Title -->
	<div class="flex flex-row border-r border-b">
		<div class="border-base-200 flex w-1/3 border-r p-5">
			<h1 class="text-base-content mr-2 flex items-center text-left text-xl font-bold">
				{#if device.device_type == 'NOTEBOOK'}
					<Laptop class="mr-[1px] aspect-square h-4" />
				{:else}
					<PcCase class="mr-[1px] aspect-square h-4" />
				{/if}
				{deviceName}
			</h1>
			<div>
				<div
					class={[
						'badge text-base-100 border-0 text-xs font-bold uppercase',
						data.device.status == 'ALERT' &&
							'badge-error animate__animated animate__pulse animate__infinite infinite bg-red-500',
						data.device.status == 'FINE' && 'badge-success',
						data.device.status == 'PROBLEMS' && 'badge-warning',
						data.device.status == 'MONITORING' && 'badge-neutral',
						data.device.status == 'NO_DATA' && 'badge-info'
					]}
				>
					{data.device.status}
				</div>
			</div>
		</div>

		<div class="w-2/3 p-5">
			<h2 class="text-base-content text-xl font-bold">Device History</h2>
		</div>
	</div>

	<!-- Main Box -->
	<div class="flex">
		<!-- Left -->
		<div class="border-base-200 w-1/3 border-r p-5">
			<div class="text-secondary text-left">
				<p><strong>Marca:</strong> {device.device_metadata.model ?? 'N/A'}</p>
				<p><strong>Serial:</strong> {device.device_metadata.serial_number ?? 'N/A'}</p>
				<p><strong>Device Type:</strong> {data.device.device_type}</p>
				<p>
					<strong>Remote Access:</strong>
					{data.device.remote_access ? 'Enabled' : 'Disabled'}
				</p>
				<img src="/devices/dell-vostro-3681.jpg" class="my-5 w-full rounded-xl" alt="dell-vostro" />
			</div>
		</div>
		<!-- Right -->
		<div class="w-2/3 py-0">
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
									<td>{new Date(event.event_time).toLocaleString()}</td>
									<td>{event.event_type}</td>
									<td>{event.technician_name}</td>
									<td>
										<!-- Open the modal using ID.showModal() method -->
										<button
											class="btn btn-sm btn-primary btn-outline rounded-full"
											onclick={openModal}
										>
											Detalhes
										</button>

										<dialog bind:this={modal} class="modal">
											<form method="dialog">
												<button
													class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2 text-white"
													>✕</button
												>
											</form>
											<div class="modal-box border-base-300 max-h-[90%] w-11/12 max-w-5xl border">
												<h3 class="border-base-200 border-b pb-3 text-lg font-bold uppercase">
													Detalhes do Serviço
												</h3>
												<p class="py-4 font-mono text-xs whitespace-pre-wrap">
													{event.description}
												</p>
											</div>
											<form method="dialog" class="modal-backdrop">
												<button>close</button>
											</form>
										</dialog>
									</td>
								</tr>
							{/each}
						{:else}
							<tr>
								<td colspan="4" class="text-secondary text-center"
									>No history found for this device.</td
								>
							</tr>
						{/if}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
