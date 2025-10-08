<script lang="ts">
	import {
		ChevronDown,
		Circle,
		Code,
		Delete,
		Loader,
		Plus,
		Recycle,
		Share,
		X
	} from '@lucide/svelte';
	import { m } from '$paraglide/messages';
	import DashboardButton from '$lib/components/Buttons/DashboardButton.svelte';
</script>

<div class="border-base-200 flex justify-start border-b">
	<div class="flex items-center justify-end gap-2 p-4">
		<!-- Share -->
		<DashboardButton
			type="primary"
			onclick={() => {
				alert('soon');
			}}
		>
			<Share class="h-3 w-3" />
			{m.share()}
		</DashboardButton>

		<!-- New note -->
		<DashboardButton
			onclick={() => {
				alert('soon');
			}}
		>
			<Plus class="h-3 w-3" />
			{m.addNote()}
		</DashboardButton>

		<DashboardButton href="#">
			<Plus class="h-3 w-3" />
			{m.addNote()}
		</DashboardButton>

		<!-- Encrypt -->
		<DashboardButton
			onclick={() => {
				alert('soon');
			}}
		>
			<Code class="h-3 w-3" />
			{m.encrypt()}
		</DashboardButton>

		<!-- Delete -->
		<DashboardButton
			onclick={() => {
				alert('soon');
			}}
		>
			<Delete class="h-3 w-3" />
			{m.delete()}
		</DashboardButton>

		<button
			class="bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary flex items-center gap-2 rounded-lg border px-5 py-2 text-xs transition-all duration-300"
		>
			{`${m.import()}/${m.export()}`}
			<ChevronDown class="mx-0 h-3 w-[10px] px-0" />
		</button>

		<!-- Sync -->
		<DashboardButton
			onclick={() => {
				alert('soon');
			}}
		>
			<Circle class="h-3 w-3" />
			{m.sync()}
		</DashboardButton>

		<div class="text-neutral ml-2 flex items-center text-sm">
			<X class="h-3" />
			<span> {m.notSynced()} </span>
		</div>
	</div>
</div>
