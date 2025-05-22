<script lang="ts">
	import { m } from '$paraglide/messages';
	import TitleSection from '../TitleSection.svelte';
	import { smoothScroll } from '$utils';

	function conditionalSmoothScroll(node: HTMLElement) {
		// if (url === '#know-more') {
		return smoothScroll(node);
		// }
	}
</script>

<!-- Hero Section -->
<div class="relative my-15 max-w-4xl md:my-20">
	<!-- Section title -->
	<TitleSection titleLeft={m.welcome()} titleRight={m.theFuture()} />

	<p
		class="text-secondary font-regular my-6 font-sans text-[20px] leading-[120%] font-normal tracking-wide md:text-[25px] md:leading-[118%]"
	>
		{@html m.homeHero()}

		<!-- a platform of digital products and a development lab focused on innovation in LATAM -->
	</p>
	<div class="mt-8 flex flex-wrap gap-2 md:gap-3">
		<a href="#know-more" use:conditionalSmoothScroll class="fw-button fw-button-lg">
			<span>{m.learnMore()}</span>
		</a>
		<a
			href="https://calendar.app.google/oDbeDazTLXApijoR8"
			target="_blank"
			rel="nofollow noopener	"
			class="fw-button fw-button-lg fw-button-outline"
		>
			<span>{m.scheduleMeeting()}</span>
		</a>
	</div>
</div>
