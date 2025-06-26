<script lang="ts">
	import { m } from '$paraglide/messages';
	import { ChevronDown } from '@lucide/svelte';
	// import { getLocale } from '$paraglide/runtime';

	// let locale = $state(getLocale());
</script>

<button
	class="bg-base-200 relative hidden rounded-full px-6 py-2 font-sans text-[19px] font-normal hover:opacity-100 md:block"
>
	<div
		class="badge badge-primary absolute -top-[12px] left-1/2 h-[18px] -translate-x-1/2 text-center font-sans text-[10px] font-bold tracking-widest uppercase"
	>
		{m.product()}
	</div>

	<div class="flex flex-row items-center gap-1 hover:opacity-50">
		<span class="text-primary text-base font-medium">CareSync</span>
		<ChevronDown class="text-primary h-5 w-5" />
	</div>
</button>
