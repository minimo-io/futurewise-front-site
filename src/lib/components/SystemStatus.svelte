<script lang="ts">
	import { AppConfig } from '$lib/configs';
	import { m } from '$paraglide/messages';
	import { Circle } from '@lucide/svelte';
</script>

<a
	href={AppConfig.status}
	target="_blank"
	rel="nofollow noreferrer"
	class="text-primary mt-2 flex items-center text-sm text-[15px] leading-5"
>
	<div>
		<Circle class="h-3" fill="#ff4016" />
	</div>
	<div class="font-sans">{m.allSystemsWorking()}</div>
</a>
