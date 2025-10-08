<script lang="ts">
	import { ChevronDown, Circle, Code, Loader, Recycle, Share, X } from '@lucide/svelte';
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { AppConfig } from '$lib/configs';
</script>

<div class="border-base-200 flex justify-start border-b">
	<div class="flex items-center justify-end gap-2 p-4">
		<a
			href={localizeHref(AppConfig.dashboards.care.actions.addDevice)}
			class="bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary flex items-center gap-2 rounded-lg border px-5 py-2 text-xs transition-all duration-300"
		>
			{m.addNote()}
			(N)
		</a>
		<button
			class="bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary flex items-center gap-2 rounded-lg border px-5 py-2 text-xs transition-all duration-300"
		>
			<Share class="h-4 w-4" />
			{m.share()}
		</button>
		<button
			class="bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary flex items-center gap-2 rounded-lg border px-5 py-2 text-xs transition-all duration-300"
		>
			<Code class="h-4 w-4" />
			Encriptar
		</button>
		<button
			class="bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary flex items-center gap-2 rounded-lg border px-5 py-2 text-xs transition-all duration-300"
		>
			<!-- <Import class="h-4 w-4" /> -->
			Import/Export
			<ChevronDown class="mx-0 h-3 w-[10px] px-0" />
		</button>
		<button
			class="bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary flex items-center gap-2 rounded-lg border px-5 py-2 text-xs transition-all duration-300"
		>
			<Circle class="h-3 w-3" />
			Sync
		</button>

		<div class="text-neutral ml-2 flex items-center text-sm">
			<X class="h-3" />
			<span> Not synched </span>
		</div>
	</div>
</div>
