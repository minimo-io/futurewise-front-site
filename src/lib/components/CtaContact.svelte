<script lang="ts">
	import { AppConfig } from '$lib/configs';
	import { m } from '$paraglide/messages';
</script>

<section
	class="border-base-200 fw-border-t-divider fw-border-t-divider-dot !relative mx-(--fw-app-margin) border-t px-0 py-16 text-center"
>
	<h2 class="font-pixel mb-4 text-2xl font-bold tracking-wider uppercase md:text-3xl">
		{m.ctaStillHaveQuestions()}
	</h2>
	<p class="text-secondary mx-auto mb-6 max-w-3xl text-lg md:text-2xl">
		{m.ctaText()}
	</p>
	<a
		href={AppConfig.calendar}
		target="_blank"
		rel="nofollow noreferrer"
		class="inline-block rounded-full bg-white px-6 py-2 font-bold text-black transition hover:bg-gray-200"
	>
		{m.scheduleMeeting()}
	</a>

	<!-- Decoration -->
	<div
		class="absolute -top-[5%] -left-[10%] z-50 scale-35 opacity-50 md:top-[5%] md:left-[20%] md:scale-90"
	>
		<img src="/bgs/cross.svg" alt="cross" />
	</div>
</section>
