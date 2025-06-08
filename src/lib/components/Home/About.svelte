<script lang="ts">
	import { m } from '$paraglide/messages';
	let isExpanded = $state(false);
	let sectionElement: HTMLElement;

	function toggleExpanded() {
		if (isExpanded) {
			// Scroll to the start of the section when collapsing
			sectionElement?.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
		isExpanded = !isExpanded;
	}
</script>

<div id="know-more" class="relative">
	<section
		bind:this={sectionElement}
		class="fw-home-about z-10 mx-(--fw-app-margin) mb-12 max-w-full pt-10 md:mx-auto md:max-w-[60%]"
	>
		<div class="relative">
			<div
				class="space-y-0 transition-all duration-500 {isExpanded
					? ''
					: 'max-h-[29rem] overflow-hidden md:max-h-[29rem]'}"
			>
				{@html m.aboutText()}
			</div>

			<!-- Gradient overlay when collapsed -->
			{#if !isExpanded}
				<div
					class="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-black via-black/70 to-transparent"
				></div>
			{/if}
		</div>

		<!-- Read all button -->
		<div
			class={['relative -top-2 mt-0 flex justify-center md:top-0 md:mt-3', isExpanded && 'mt-10']}
		>
			<button
				onclick={toggleExpanded}
				class="bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary flex items-center gap-2 rounded-full border px-5 py-3 transition-all duration-300"
			>
				<span class="!font-sans !text-base tracking-wider uppercase md:!text-lg"
					>{isExpanded ? m.readLess() : m.readMore()}</span
				>
			</button>
		</div>
	</section>
	<div
		class="absolute -right-[18%] bottom-[25%] z-0 hidden scale-80 opacity-30 md:-right-[5%] md:block"
	>
		<img src="/bgs/circles.svg" alt="circles" />
	</div>
</div>
