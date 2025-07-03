<script lang="ts">
	import { m } from '$paraglide/messages';
	import { ChevronDown } from '@lucide/svelte';
	// import { getLocale } from '$paraglide/runtime';

	// let locale = $state(getLocale());
</script>

<div class="relative my-2 flex flex-col items-center justify-center">
	<div class="badge badge-xs absolute -top-[16px] px-3 font-bold tracking-widest uppercase">
		{m.product()}
	</div>
	<button class="my-2 flex w-full justify-center hover:opacity-100">
		<div class="flex flex-row items-center gap-1 hover:opacity-50">
			<span class="text-primary text-[18px] font-bold">CareSync</span>
			<ChevronDown class="text-primary h-5 w-5" />
		</div>
	</button>
</div>
