<script lang="ts">
	import { Check, Laptop, PcCase, RefreshCw } from '@lucide/svelte';
	import { MachineStatus, MachineType, type Machine } from '$lib/type/caresync-machines.types';
	import { onMount, onDestroy } from 'svelte';
	import { m } from '$paraglide/messages';
	import apiClient from '$lib/api';
	import CareSyncDashboardDevicesActions from './CareSyncDashboardDevicesActions.svelte';
	import { AppConfig } from '$lib/configs';
	import { localizeHref } from '$paraglide/runtime';

	let machines: Machine[] = $state([]);
	let isLoading = $state(true);
	let isRefreshing = $state(false);
	let error = $state<string | null>(null);
	let refreshInterval: any;
	let countdownInterval: any;
	let countdown = $state(AppConfig.caresync.deviceRefreshIntervalSeconds);

	const fetchDevices = async () => {
		try {
			const response = await apiClient.get('/caresync/devices');
			const apiData = response.data.data;

			machines = apiData.map((device: any): Machine => {
				const getStatus = (metrics: any): MachineStatus => {
					if (!metrics || Object.keys(metrics).length === 0 || !metrics.basic) {
						return MachineStatus.NO_DATA; // Default status if no metrics or basic metrics are available
					}

					const { cpu, memory, disk } = metrics.basic;

					if (
						(cpu && cpu.current > 90) ||
						(memory && memory.current_percent > 90) ||
						(disk && disk.percent > 95)
					) {
						return MachineStatus.ALERT;
					}
					if (
						(cpu && cpu.current > 75) ||
						(memory && memory.current_percent > 75) ||
						(disk && disk.percent > 85)
					) {
						return MachineStatus.PROBLEMS;
					}
					return MachineStatus.BOM;
				};

				const getMonthsActive = (installationDate: string): number => {
					const install = new Date(installationDate);
					const now = new Date();
					let months = (now.getFullYear() - install.getFullYear()) * 12;
					months -= install.getMonth();
					months += now.getMonth();
					return months <= 0 ? 0 : months;
				};

				return {
					id: device.id,
					device_id: device.deviceId,
					online: device.status === 'active',
					status: getStatus(device.metrics),
					type: device.type === 'NOTEBOOK' ? MachineType.NOTEBOOK : MachineType.DESKTOP,
					remoteAccess: device.remoteAccess,
					organization: device.company?.name || 'N/A',
					user: {
						name: device.contact?.name || 'N/A',
						state: device.contact?.state || 'N/A',
						city: device.contact?.city || 'N/A',
						image: device.contact?.image || '',
						contact: {
							type: 'whatsapp',
							value: device.contact?.phone || 'N/A'
						}
					},
					lastService: 'N/A',
					nextService: 'N/A',
					timeActive: device.deviceMetadata?.installation_date ? getMonthsActive(device.deviceMetadata.installation_date) : 0,
					serialNumber: device.deviceMetadata?.serial_number || 'N/A',
					brand: device.deviceMetadata?.model ? device.deviceMetadata.model.split(' ')[0] : 'N/A',
					model: device.deviceMetadata?.model || 'N/A'
				};
			});
		} catch (err: any) {
			error = err.message;
		}
	};

	const startCountdown = () => {
		countdownInterval = setInterval(() => {
			countdown--;
			if (countdown === 0) {
				countdown = AppConfig.caresync.deviceRefreshIntervalSeconds;
			}
		}, 1000);
	};

	onMount(async () => {
		await fetchDevices();
		isLoading = false;

		refreshInterval = setInterval(
			handleRefresh,
			AppConfig.caresync.deviceRefreshIntervalSeconds * 1000
		);
		startCountdown();
	});

	onDestroy(() => {
		clearInterval(refreshInterval);
		clearInterval(countdownInterval);
	});

	const handleRefresh = async () => {
		isRefreshing = true;
		error = null;
		countdown = AppConfig.caresync.deviceRefreshIntervalSeconds;
		await fetchDevices();
		isRefreshing = false;
	};
</script>

<div class="flex w-full flex-col">
	<div class="border-base-200 flex justify-start border-b">
		<CareSyncDashboardDevicesActions {handleRefresh} {isRefreshing} {countdown} />
	</div>

	<!-- <div class="overflow-x-auto"> -->
	<table class="table w-full border border-t-0">
		<thead>
			<tr>
				<th>ID</th>
				<th>Contato</th>
				<th>Tipo</th>
				<th>A. Remoto</th>
				<th>Online</th>
				<th>Status</th>
				<!-- <th>Org</th> -->

				<!-- <th>Última/Próxima Manutenção</th> -->
				<th>Tempo Ativo</th>
				<th>Nro Série</th>
				<th>Marca</th>
				<th>Acções</th>
			</tr>
		</thead>

		<tbody>
			{#if isLoading}
				<tr>
					<td colspan="11" class="text-center">Loading...</td>
				</tr>
			{:else if error}
				<tr>
					<td colspan="11" class="text-error text-center">{error}</td>
				</tr>
			{:else}
				{#each machines as machine, i (i)}
					{@const deviceUrl = localizeHref(`/dashboard/caresync/device/${machine.id}`)}
					<tr class={{ '': i == 0 }}>
						<td>
							<div class="flex items-center">
								<a href={deviceUrl} class="text-primary">
									{#if machine.type == 'NOTEBOOK'}
										NT
									{:else}
										DT
									{/if}
									-{machine.device_id}
								</a>

								<!-- Online/Offline status -->
							</div>
						</td>
						<td>
							<div class="flex items-center gap-3">
								{#if machine.user.image}
									<div class="avatar">
										<div class="mask mask-squircle aspect-square h-8">
											<img src={machine.user.image} alt="user" />
										</div>
									</div>
								{/if}
								<div>
									<div class="font-bold">{machine.user.name}</div>
									<div class=" text-xs opacity-50">{machine.user.state}, {machine.user.city}</div>
								</div>
							</div>
						</td>
						<td>
							<div class="flex items-center">
								{#if machine.type == 'NOTEBOOK'}
									<Laptop class="mr-[1px] aspect-square h-4" />
								{:else}
									<PcCase class="mr-[1px] aspect-square h-4" />
								{/if}
								{machine.type}
							</div>
						</td>
						<td>
							<div class="flex items-center">
								<Check
									class={[
										'mr-[1px] aspect-square h-4 ',
										machine.remoteAccess ? 'text-green-500' : 'text-red-500'
									]}
								/>
								{#if machine.remoteAccess}
									{m.yes()}
								{:else}
									{m.no()}
								{/if}
							</div>
						</td>

						<td>
							<div class="flex items-center">
								<div
									class={[
										'badge badge-outline relative flex items-center text-xs',
										machine.online ? 'badge-success' : 'badge-neutral'
									]}
								>
									{machine.online ? 'Online' : 'Offline'}
								</div>

								<!-- <div
								class={[
									'badge text-base-100 border-0 text-xs font-bold uppercase',
									machine.status == 'ALERT' &&
										'badge-error animate__animated animate__pulse animate__infinite infinite bg-red-500',
									machine.status == 'FINE' && 'badge-success',
									machine.status == 'PROBLEMS' && 'badge-warning',
									machine.status == 'MONITORING' && 'badge-neutral'
								]}
							>
								{machine.status}
							</div> -->
							</div>
						</td>
						<td>
							<div class="flex items-center">
								<div
									class={[
										'badge text-base-100 border-0 text-xs font-bold uppercase',
										machine.status == 'ALERT' &&
											'badge-error animate__animated animate__pulse animate__infinite infinite bg-red-500',
										machine.status == 'FINE' && 'badge-success',
										machine.status == 'PROBLEMS' && 'badge-warning',
										machine.status == 'MONITORING' && 'badge-neutral',
										machine.status == 'NO_DATA' && 'badge-info'
									]}
								>
									{machine.status}
								</div>
							</div>
						</td>
						<!-- <td>{machine.organization}</td> -->

						<!-- <td>
						<span class="text-neutral">
							{machine.lastService}
						</span>
						<span class="mx-2"> › </span>
						{machine.nextService}
					</td> -->
						<td>{machine.timeActive} meses</td>
						<td>
							<span class="badge badge-ghost badge-sm uppercase">{machine.serialNumber}</span>
						</td>
						<td class="uppercase">
							{machine.model}
						</td>
						<th>
							<a href={deviceUrl} class="drawer-button btn btn-sm btn-primary rounded-full">
								Detalhes
							</a>
							<!-- <button
							class="btn btn-primary btn-sm rounded-full"
							onclick={() => {
								alert('EM BREVE!');
							}}>Detalhes</button
						> -->
						</th>
					</tr>
				{/each}
			{/if}
		</tbody>
	</table>

	<!-- </div> -->
</div>

<style lang="postcss">
	@reference "tailwindcss";
	td {
		color: #e7e9ea;
	}
	th {
		@apply text-white;
	}
</style>
