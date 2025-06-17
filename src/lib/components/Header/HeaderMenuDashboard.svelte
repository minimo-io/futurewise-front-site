<script lang="ts">
	import { ChevronDown, Headset } from '@lucide/svelte';
	import { getLocale, localizeHref } from '$paraglide/runtime';
	import { drawerData } from '$lib/data/drawer.data';
	import { m } from '$paraglide/messages';

	const locale = $state(getLocale());
	let drawerDataForLang = $state(drawerData[locale]);
</script>

<div class="fw-header-fs z-50 hidden items-center justify-center gap-12 md:flex">
	<!-- <a href={localizeHref('/clientes')} class="flex items-center gap-1 uppercase">
		<Headset class="h-4" />
		{m.menuHelp()}
	</a> -->
</div>
