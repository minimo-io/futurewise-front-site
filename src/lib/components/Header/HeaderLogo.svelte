<script lang="ts">
	import { localizeHref } from '$paraglide/runtime';
	import HeaderLogoDashboard from './HeaderLogoDashboard.svelte';
	interface Props {
		isDashboard?: boolean;
	}
	let { isDashboard = false }: Props = $props();
</script>

{#if isDashboard}
	<HeaderLogoDashboard />
{:else}
	<div class="flex items-start">
		<a href={localizeHref('/')}>
			<div class="flex flex-row">
				<img
					src="/logos/futurewise-logo-header.svg"
					alt="futurewise-logo"
					class="h-[50px] max-h-[55px] md:h-[55px]"
				/>
			</div>
		</a>
	</div>
{/if}
