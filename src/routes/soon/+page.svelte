<script lang="ts">
	import { m } from '$paraglide/messages';
	import { Send } from '@lucide/svelte';
</script>

<div class="my-10 text-center text-2xl">
	<div class="mb-2">{m.soon()}</div>
	<a
		class="text-primary flex flex-row items-center justify-center gap-2"
		href="mailto:nicolas@futurewise.lat"
	>
		<Send class="h-5" />
		<span>{m.getInTouch()}</span>
	</a>
</div>
