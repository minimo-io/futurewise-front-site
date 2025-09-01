<!-- src/lib/components/Header/HeaderLogoDashboard.svelte -->
<script lang="ts">
	import { localizeHref } from '$paraglide/runtime';

	interface Props {
		isCollapsed?: boolean;
	}
	let { isCollapsed = false }: Props = $props();
</script>

<div class="flex items-start">
	<a href={localizeHref('/')}>
		<!-- Desktop -->
		<div class="{isCollapsed ? 'hidden' : 'hidden md:flex'} flex-row">
			<img
				src="/logos/futurewise-logo-header.svg"
				alt="futurewise-logo"
				class="h-[50px] max-h-[55px] md:h-[55px]"
			/>
		</div>
		<!-- Mobile / Collapsed -->
		<div class="{isCollapsed ? 'flex' : 'flex md:hidden'} flex-row">
			<img
				src="/logos/futurewise-logo.png"
				alt="futurewise-logo"
				class="!aspect-square !h-[65px] !max-h-none !w-[72px] !max-w-none object-cover"
			/>
		</div>
	</a>
</div>
