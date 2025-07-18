<script lang="ts">
	import { localizeHref } from '$paraglide/runtime';
</script>

<div class="flex items-start">
	<a href={localizeHref('/')}>
		<!-- Desktop -->
		<div class="hidden flex-row md:flex">
			<img
				src="/logos/futurewise-logo-header.svg"
				alt="futurewise-logo"
				class="h-[50px] max-h-[55px] md:h-[55px]"
			/>
		</div>
		<!-- Mobile -->
		<div class="flex flex-row md:hidden">
			<img
				src="/logos/futurewise-logo.png"
				alt="futurewise-logo"
				class="!aspect-square !h-[65px] !max-h-none !w-[65px] !max-w-none object-cover"
			/>
		</div>
	</a>
</div>
