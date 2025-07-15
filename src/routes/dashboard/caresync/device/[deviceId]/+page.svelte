<script lang="ts">
	import type { Device } from '$types/caresync-machines.types';
	import { machineTypeCode } from '$utils';
	import { Eye, Image, Laptop, PcCase, Edit3 } from '@lucide/svelte';
	import type { PageProps } from './$types';
	import Actions from './components/Actions.svelte';
	import { enhance } from '$app/forms';
	import Toast from '$lib/components/Toast.svelte';
	import { invalidateAll } from '$app/navigation';
	import { formatPhoneNumberForWhatsapp } from '$lib/utils/phone.utils';
	import { formatEventTime } from '$lib/utils/date.utils';
	import { m } from '$paraglide/messages';

	let { data }: PageProps = $props();

	let device: Device = $state(data.device);
	let deviceName = $derived(`${machineTypeCode(device.device_type)}-${device.device_id}`);

	let modal = $state<HTMLDialogElement>();
	let imageModal = $state<HTMLDialogElement>();
	let selectedImage = $state<{ src: string; alt: string } | null>(null);
	let selectedEvent = $state<any>(null);
	let isEditing = $state(false);
	let editingDescription = $state('');
	let showToast = $state(false);
	let toastMessage = $state('');
	let toastType: 'success' | 'error' = $state('success');

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

	function openImageModal(src: string, alt: string) {
		selectedImage = { src, alt };
		if (imageModal) {
			imageModal.showModal();
		}
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
			<h2 class="text-base-content text-xl font-bold">{m.servicesHistory()}</h2>
		</div>
	</div>

	<!-- Main Box -->
	<div class="flex">
		<!-- Left -->
		<div class="border-base-200 w-1/3 border-r">
			<div class="text-secondary flex flex-col justify-between text-left">
				<div class="fw-device-details flex-1">
					<div class="border-base-200 flex flex-wrap justify-between border-b p-3">
						<div class="mr-3">Modelo:</div>
						<strong>{device.device_metadata.model ?? 'N/A'} / {data.device.device_type}</strong>
					</div>
					<div class="border-base-200 flex flex-wrap justify-between border-b p-3">
						<div class="mr-3">Contato:</div>
						<div class="text-right">
							<strong>{device.contact_name ?? 'N/A'}</strong>
							{#if device.contact_email}
								<br />
								{device.contact_email}
							{/if}
							{#if device.contact_phone}
								<br />
								{#if formatPhoneNumberForWhatsapp(device.contact_phone)}
									<a
										href="https://wa.me/{formatPhoneNumberForWhatsapp(device.contact_phone)}"
										target="_blank"
										class="link-primary link"
									>
										{device.contact_phone}
									</a>
								{:else}
									{device.contact_phone}
								{/if}
							{/if}
						</div>
					</div>

					<!-- <div class="border-base-200 flex flex-wrap justify-between border-b p-3">
						<div class="mr-3">Nro Série:</div>
						<strong>{device. ?? 'N/A'}</strong>
					</div> -->

					<div class="border-base-200 flex flex-wrap justify-between border-b p-3">
						<div class="mr-3">Nro Série:</div>
						<strong>{device.device_metadata.serial_number ?? 'N/A'}</strong>
					</div>
					<div class="border-base-200 flex flex-wrap justify-between border-b p-3">
						<div class="mr-3">Procesador:</div>
						<strong>{data.device.device_metadata.processor}</strong>
					</div>
					<div class="border-base-200 flex flex-wrap justify-between border-b p-3">
						<div class="mr-3">HDD:</div>
						<strong>{data.device.device_metadata.hdd}</strong>
					</div>
					<div class="border-base-200 flex flex-wrap justify-between border-b p-3">
						<div class="mr-3">RAM:</div>
						<strong>{data.device.device_metadata.ram}</strong>
					</div>
					<!-- <div class="border-base-200 border-b p-4">
						<strong>Remote Access:</strong>
						{data.device.remote_access ? 'Enabled' : 'Disabled'}
					</div> -->
				</div>

				<!-- Gallery -->
				<div class="border-base-200 border-b p-4">
					<h2 class="text-base-content mr-2 flex items-center text-left text-lg font-bold">
						<Image class="mr-[1px] aspect-square h-4" />
						Imagens
					</h2>
				</div>

				<div class="fw-gallery">
					<button
						class="group fw-gallery-item h-[100px] w-[100px]"
						onclick={() => openImageModal('/devices/dell-vostro-3681.jpg', 'Dell Vostro 3681')}
					>
						<img
							src="/devices/dell-vostro-3681.jpg"
							class="h-full w-full object-cover"
							alt="dell-vostro"
						/>
						<div class="fw-gallery-overlay">
							<Eye class="h-6 w-6 text-white" />
						</div>
					</button>
					<button
						class="group fw-gallery-item h-[100px] w-[100px]"
						onclick={() => openImageModal('/devices/vostro-2.jpg', 'Dell Vostro 2')}
					>
						<img src="/devices/vostro-2.jpg" class="h-full w-full object-cover" alt="dell-vostro" />
						<div class="fw-gallery-overlay">
							<Eye class="text-base-content h-6 w-6" />
						</div>
					</button>
				</div>

				<!-- Image Modal -->
				<dialog bind:this={imageModal} class="modal">
					<form method="dialog">
						<button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2 z-10 text-white"
							>✕</button
						>
					</form>
					<div class="modal-box border-base-300 max-h-[90%] w-11/12 max-w-4xl border p-0">
						{#if selectedImage}
							<img
								src={selectedImage.src}
								alt={selectedImage.alt}
								class="h-auto w-full object-contain"
							/>
						{/if}
					</div>
					<form method="dialog" class="modal-backdrop">
						<button>close</button>
					</form>
				</dialog>
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
									<td>{formatEventTime(event.event_time)}</td>
									<td>{event.event_type}</td>
									<td>{event.technician_name}</td>
									<td>
										<button
											class="btn btn-sm btn-primary btn-outline"
											onclick={() => openModal(event)}
										>
											Detalhes
										</button>
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

			<!-- Service Details Modal -->
			<dialog bind:this={modal} class="modal">
				<form method="dialog">
					<button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2 text-white"
						>✕</button
					>
				</form>
				<div class="modal-box border-base-300 max-h-[90%] w-11/12 max-w-5xl border">
					<div class="border-base-200 flex items-center justify-between border-b pb-3">
						<h3 class="text-base-content text-left text-lg font-bold uppercase">
							Detalhes do Serviço
						</h3>
						{#if !isEditing}
							<button class="btn btn-sm btn-secondary btn-outline" onclick={startEditing}>
								<Edit3 class="mr-1 h-4 w-4" />
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
				<form method="dialog" class="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</div>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";
	.fw-device-details {
		@apply text-sm;
	}
	/* Styles for each gallery item */
	.fw-gallery {
		@apply flex flex-wrap gap-1;
	}
	.fw-gallery-item {
		@apply relative overflow-hidden border-0 bg-transparent p-0;
	}

	.fw-gallery-item img {
		@apply transition-all duration-300;
	}

	/* This rule applies directly to the item when hovered */
	.fw-gallery-item:hover img {
		@apply scale-110;
	}

	/* Styles for the overlay (default hidden state) */
	.fw-gallery-overlay {
		/* CORRECTED: Changed bg-black bg-opacity-40 to bg-black/40 */
		@apply pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300;
	}

	/* Styles for the overlay when the parent item is hovered */
	.fw-gallery-item:hover .fw-gallery-overlay {
		@apply pointer-events-auto opacity-100;
	}
</style>
