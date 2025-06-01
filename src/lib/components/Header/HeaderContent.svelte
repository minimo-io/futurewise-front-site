<script lang="ts">
	import { m } from '$paraglide/messages';
	import TitleSection from '../TitleSection.svelte';
	import { smoothScroll } from '$utils';
	import { localizeHref } from '$paraglide/runtime';
	import { AppConfig } from '$lib/configs';

	let url = $state('#know-more');

	function conditionalSmoothScroll(node: HTMLElement) {
		if (url === '#know-more') {
			return smoothScroll(node);
		}
	}
	interface Props {
		titleRight: string;
		titleLeft: string;
		heroContent: string;
		buttons: boolean;
	}
	let { titleRight, titleLeft, heroContent, buttons = true }: Props = $props();
</script>

<!-- Hero Section -->
<div class="relative mt-15 mb-10 max-w-4xl md:my-20">
	<!-- Section title -->
	<TitleSection {titleLeft} {titleRight} />

	<p
		class="text-secondary font-regular my-6 font-sans text-[20px] leading-[120%] font-normal tracking-wide md:text-[25px] md:leading-[118%]"
	>
		{@html heroContent}

		<!-- a platform of digital products and a development lab focused on innovation in LATAM -->
	</p>
	{#if buttons}
		<div class="mt-8 flex flex-wrap gap-2 md:gap-3">
			<a href={url} use:conditionalSmoothScroll class="fw-button fw-button-lg">
				<span>{m.learnMore()}</span>
			</a>
			<a
				href={AppConfig.calendar}
				target="_blank"
				rel="nofollow noopener	"
				class="fw-button fw-button-lg fw-button-outline"
			>
				<span>{m.scheduleMeeting()}</span>
			</a>
		</div>
	{/if}
</div>
