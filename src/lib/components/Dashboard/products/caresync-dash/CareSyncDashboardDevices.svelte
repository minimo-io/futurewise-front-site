<script lang="ts">
	import { Check, Contact, Laptop, PcCase } from '@lucide/svelte';
	import { MachineStatus, MachineType, type Machine } from '$lib/type/caresync-machines.types';
	import { onMount } from 'svelte';
	import { m } from '$paraglide/messages';

	let machines: Machine[] = $state([]);

	onMount(() => {
		// Test machine 1
		machines?.push({
			id: '0001',
			online: true,
			status: MachineStatus.BOM,
			type: MachineType.NOTEBOOK,
			remoteAccess: true,
			organization: 'AGF',
			user: {
				name: 'Erika Bezerra',
				state: 'SP',
				city: 'São Paulo',
				image: '',
				contact: {
					type: 'whatsapp',
					value: '11966090457'
				}
			},
			lastService: 'set. 25, 2025',
			nextService: 'Em 20 días',
			timeActive: 1231,
			serialNumber: 'PE03UAU4',
			brand: 'Lenovo',
			model: 'Yoga 520-14IKB'
		});
		// Test machine 2
		machines?.push({
			id: '0002',
			online: false,
			status: MachineStatus.BOM,
			type: MachineType.NOTEBOOK,
			remoteAccess: false,
			organization: 'Alphaville',
			user: {
				name: 'Robson Caires',
				state: 'SP',
				city: 'São Paulo',
				image: '',
				contact: {
					type: 'whatsapp',
					value: '2414441241'
				}
			},
			lastService: 'out. 12, 2025',
			nextService: 'Em 10 días',
			timeActive: 24,
			serialNumber: 'NXAH1AL005149004C69Z00',
			brand: 'Dell',
			model: 'Supercomputer V2'
		});
		// Test machine 3
		machines?.push({
			id: '0003',
			online: false,
			status: MachineStatus.BOM,
			type: MachineType.NOTEBOOK,
			remoteAccess: true,
			organization: 'AGF',
			user: {
				name: 'Erika Bezerra',
				state: 'SP',
				city: 'São Paulo',
				image: '',
				contact: {
					type: 'whatsapp',
					value: '11966090457'
				}
			},
			lastService: 'set. 25, 2025',
			nextService: 'Em 20 días',
			timeActive: 1231,
			serialNumber: 'PE03UAU4',
			brand: 'Lenovo',
			model: 'Yoga 520-14IKB'
		});
		// Test machine 4
		machines?.push({
			id: '0001',
			online: false,
			status: MachineStatus.PROBLEMS,
			type: MachineType.DESKTOP,
			remoteAccess: true,
			organization: 'AGF',
			user: {
				name: 'Nicolas Erramuspe',
				state: 'MG',
				city: 'Belo Horizonte',
				image: 'https://img.daisyui.com/images/profile/demo/2@94.webp',
				contact: {
					type: 'whatsapp',
					value: '11966090457'
				}
			},
			lastService: 'set. 25, 2025',
			nextService: 'Em 20 días',
			timeActive: 1231,
			serialNumber: 'XFfQff1451',
			brand: 'Apple',
			model: 'MacBook Pro 5'
		});

		// Test machine 5
		machines?.push({
			id: '0005',
			online: true,
			status: MachineStatus.BOM,
			type: MachineType.NOTEBOOK,
			remoteAccess: true,
			organization: 'AGF',
			user: {
				name: 'Erika Bezerra',
				state: 'SP',
				city: 'São Paulo',
				image: '',
				contact: {
					type: 'whatsapp',
					value: '11966090457'
				}
			},
			lastService: 'set. 25, 2025',
			nextService: 'Em 20 días',
			timeActive: 1231,
			serialNumber: 'PE03UAU4',
			brand: 'Lenovo',
			model: 'Yoga 520-14IKB'
		});

		// Test machine 6
		machines?.push({
			id: '0006',
			online: true,
			status: MachineStatus.PROBLEMS,
			type: MachineType.NOTEBOOK,
			remoteAccess: true,
			organization: 'AGF',
			user: {
				name: 'Erika Bezerra',
				state: 'SP',
				city: 'São Paulo',
				image: '',
				contact: {
					type: 'whatsapp',
					value: '11966090457'
				}
			},
			lastService: 'set. 25, 2025',
			nextService: 'Em 20 días',
			timeActive: 1231,
			serialNumber: 'PE03UAU4',
			brand: 'Lenovo',
			model: 'Yoga 520-14IKB'
		});
		// Test machine 6
		machines?.push({
			id: '0002',
			online: false,
			status: MachineStatus.BOM,
			type: MachineType.DESKTOP,
			remoteAccess: true,
			organization: 'AGF',
			user: {
				name: 'Pepe Gonzáles',
				state: 'RS',
				city: 'Port Alegre',
				image: '',
				contact: {
					type: 'whatsapp',
					value: '11966090457'
				}
			},
			lastService: 'set. 25, 2025',
			nextService: 'Em 20 días',
			timeActive: 1231,
			serialNumber: 'SFMFFk1rha',
			brand: 'HP',
			model: '520-14IKB'
		});
		// Test machine 6
		machines?.push({
			id: '0006',
			online: false,
			status: MachineStatus.MONITORING,
			type: MachineType.NOTEBOOK,
			remoteAccess: true,
			organization: 'AGF',
			user: {
				name: 'Erika Bezerra',
				state: 'SP',
				city: 'São Paulo',
				image: '',
				contact: {
					type: 'whatsapp',
					value: '11966090457'
				}
			},
			lastService: 'set. 25, 2025',
			nextService: 'Em 20 días',
			timeActive: 1231,
			serialNumber: 'PE03UAU4',
			brand: 'Lenovo',
			model: 'Yoga 520-14IKB'
		});

		// Test machine 2
		machines?.push({
			id: '0003',
			online: false,
			status: MachineStatus.ALERT,
			type: MachineType.NOTEBOOK,
			remoteAccess: false,
			organization: 'Alphaville',
			user: {
				name: 'Robson Caires',
				state: 'SP',
				city: 'São Paulo',
				image: '',
				contact: {
					type: 'whatsapp',
					value: '2414441241'
				}
			},
			lastService: 'out. 12, 2025',
			nextService: 'Em 10 días',
			timeActive: 24,
			serialNumber: 'NXAH1AL005149004C69Z00',
			brand: 'Dell',
			model: 'Supercomputer V2'
		});

		// Test machine 7
		machines?.push({
			id: '0007',
			online: false,
			status: MachineStatus.BOM,
			type: MachineType.NOTEBOOK,
			remoteAccess: true,
			organization: 'AGF',
			user: {
				name: 'Erika Bezerra',
				state: 'SP',
				city: 'São Paulo',
				image: '',
				contact: {
					type: 'whatsapp',
					value: '11966090457'
				}
			},
			lastService: 'set. 25, 2025',
			nextService: 'Em 20 días',
			timeActive: 1231,
			serialNumber: 'PE03UAU4',
			brand: 'Lenovo',
			model: 'Yoga 520-14IKB'
		});

		// Test machine 8
		machines?.push({
			id: '0008',
			online: false,
			status: MachineStatus.BOM,
			type: MachineType.NOTEBOOK,
			remoteAccess: true,
			organization: 'AGF',
			user: {
				name: 'Erika Bezerra',
				state: 'SP',
				city: 'São Paulo',
				image: '',
				contact: {
					type: 'whatsapp',
					value: '11966090457'
				}
			},
			lastService: 'set. 25, 2025',
			nextService: 'Em 20 días',
			timeActive: 1231,
			serialNumber: 'PE03UAU4',
			brand: 'Lenovo',
			model: 'Yoga 520-14IKB'
		});
		// Test machine 9
		machines?.push({
			id: '0009',
			online: false,
			status: MachineStatus.BOM,
			type: MachineType.NOTEBOOK,
			remoteAccess: true,
			organization: 'AGF',
			user: {
				name: 'Erika Bezerra',
				state: 'SP',
				city: 'São Paulo',
				image: '',
				contact: {
					type: 'whatsapp',
					value: '11966090457'
				}
			},
			lastService: 'set. 25, 2025',
			nextService: 'Em 20 días',
			timeActive: 1231,
			serialNumber: 'PE03UAU4',
			brand: 'Lenovo',
			model: 'Yoga 520-14IKB'
		});
	});
</script>

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
		<!-- row 1 -->
		{#each machines as machine, i (i)}
			<tr class={{ '': i == 0 }}>
				<td>
					<div class="flex items-center">
						<a href="/#" class="text-primary">
							{#if machine.type == 'NOTEBOOK'}
								NT
							{:else}
								DT
							{/if}
							-{machine.id}
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
								machine.status == 'MONITORING' && 'badge-neutral'
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
					<label for="my-drawer-4" class="drawer-button btn btn-sm btn-primary rounded-full"
						>Detalhes</label
					>
					<!-- <button
						class="btn btn-primary btn-sm rounded-full"
						onclick={() => {
							alert('EM BREVE!');
						}}>Detalhes</button
					> -->
				</th>
			</tr>
		{/each}
	</tbody>
</table>

<!-- </div> -->

<style lang="postcss">
	@reference "tailwindcss";
	td {
		color: #e7e9ea;
	}
	th {
		@apply text-white;
	}
</style>
