<script lang="ts">
	import TitleSection from '../TitleSection.svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { ChevronDown } from '@lucide/svelte';

	let activeIndex = -1;

	function toggleAccordion(index: number) {
		activeIndex = activeIndex === index ? -1 : index;
	}
</script>

<div class="max-w-fw mx-(--fw-app-margin) mb-10 md:mx-auto">
	<TitleSection titleLeft="Perguntas" titleRight="Frequentes" forceFlexRow={true} />

	<div class="mt-7">
		<div class="faq-item border-base-300 my-4 rounded-xl border bg-[#121212]">
			<button
				class="collapse-title text-secondary flex w-full items-center justify-between p-4 text-left text-xl md:text-2xl"
				on:click={() => toggleAccordion(0)}
			>
				<span>Does the number of end users affect pricing?</span>
				<ChevronDown
					class="arrow-icon transition-transform duration-300 {activeIndex === 0
						? 'rotate-180'
						: ''}"
					size={20}
				/>
			</button>
			{#if activeIndex === 0}
				<div
					class="text-base-content px-4 pb-4"
					transition:slide={{ duration: 300, easing: quintOut }}
				>
					Click the "Sign Up" button in the top right corner and follow the registration process.
				</div>
			{/if}
		</div>

		<div class="faq-item border-base-300 my-4 rounded-xl border bg-[#121212]">
			<button
				class="collapse-title text-secondary flex w-full items-center justify-between p-4 text-left text-xl md:text-2xl"
				on:click={() => toggleAccordion(1)}
			>
				<span>I forgot my password. What should I do?</span>
				<ChevronDown
					class="arrow-icon transition-transform duration-300 {activeIndex === 1
						? 'rotate-180'
						: ''}"
					size={20}
				/>
			</button>
			{#if activeIndex === 1}
				<div
					class="text-base-content px-4 pb-4"
					transition:slide={{ duration: 300, easing: quintOut }}
				>
					Click on "Forgot Password" on the login page and follow the instructions sent to your
					email.
				</div>
			{/if}
		</div>

		<div class="faq-item border-base-300 my-4 rounded-xl border bg-[#121212]">
			<button
				class="collapse-title text-secondary flex w-full items-center justify-between p-4 text-left text-xl md:text-2xl"
				on:click={() => toggleAccordion(2)}
			>
				<span>How do I update my profile information?</span>
				<ChevronDown
					class="arrow-icon transition-transform duration-300 {activeIndex === 2
						? 'rotate-180'
						: ''}"
					size={20}
				/>
			</button>
			{#if activeIndex === 2}
				<div
					class="text-base-content px-4 pb-4"
					transition:slide={{ duration: 300, easing: quintOut }}
				>
					Go to "My Account" settings and select "Edit Profile" to make changes.
				</div>
			{/if}
		</div>

		<div class="faq-item border-base-300 my-4 rounded-xl border bg-[#121212]">
			<button
				class="collapse-title text-secondary flex w-full items-center justify-between p-4 text-left text-xl md:text-2xl"
				on:click={() => toggleAccordion(3)}
			>
				<span>What's the difference between Staging and Production?</span>
				<ChevronDown
					class="arrow-icon transition-transform duration-300 {activeIndex === 3
						? 'rotate-180'
						: ''}"
					size={20}
				/>
			</button>
			{#if activeIndex === 3}
				<div
					class="text-base-content px-4 pb-4"
					transition:slide={{ duration: 300, easing: quintOut }}
				>
					Go to "My Account" settings and select "Edit Profile" to make changes.
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.faq-item {
		@apply my-4 bg-[#121212] md:rounded-xl;
	}
	.faq-item div {
		@apply text-base opacity-100 md:text-xl;
	}
</style>
