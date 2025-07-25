<script lang="ts">
	import PillFlower from '../PillFlower.svelte';
	import { m } from '$paraglide/messages';
	import Hr from '../Hr.svelte';
	import Dot from '../Dot.svelte';
	import { onMount } from 'svelte';

	// Configurable animation speeds (in seconds)
	export let desktopSpeed = 40;
	export let mobileSpeed = 20;

	let marqueeContainer: HTMLDivElement;
	let marqueeContent: HTMLDivElement;

	const clients = [
		{
			href: 'https://media.toxtren.com/redirect.aspx?pid=101348&bid=2036&redirectURL=https://natregs.com',
			src: '/clients/national-logo.svg',
			alt: 'National Casino',
			height: 'h-[53px]',
			opacity: 'opacity-50'
		},
		{
			href: 'https://agentefaz.net',
			src: '/clients/agf-logo.png',
			alt: 'AGF',
			height: 'h-[50px]',
			opacity: ''
		},
		{
			href: 'https://braaay.com',
			src: '/clients/braaay-logo.png',
			alt: 'Braaay',
			height: 'h-[32px]',
			opacity: ''
		},
		{
			href: 'https://dribbble.com/shots/19431388-Hops-v2-Craft-Beer-Marketplace',
			src: '/clients/hops-logo.svg',
			alt: 'Hops',
			height: 'h-[32px]',
			opacity: 'opacity-45'
		},
		{
			href: 'https://betizen.org',
			src: '/clients/betizen-logo.svg',
			alt: 'Betizen',
			height: 'h-[45px]',
			opacity: 'opacity-40'
		}
	];

	onMount(() => {
		if (!marqueeContainer || !marqueeContent) return;

		const originalItems = marqueeContent.children;
		const itemsArray = Array.from(originalItems);

		// For smooth infinite scroll, we need enough duplicates
		// More duplicates for faster animations to prevent visible resets
		const containerWidth = marqueeContainer.offsetWidth;
		const singleItemWidth = itemsArray[0]?.offsetWidth || 100;
		const itemsPerScreen = Math.ceil(containerWidth / singleItemWidth);

		// Ensure we have at least 3x the items needed to fill the screen
		const minDuplicates = Math.max(3, itemsPerScreen * 2);

		// Clone the original items multiple times
		for (let i = 0; i < minDuplicates; i++) {
			itemsArray.forEach((item) => {
				const clone = item.cloneNode(true) as HTMLElement;
				marqueeContent.appendChild(clone);
			});
		}
	});
</script>

<section class="relative -top-12 mt-7 px-6 pb-5 md:-top-[45px] md:mt-0 md:px-12 lg:px-16">
	<!-- Decorative dot -->
	<Hr />

	<div class="relative scale-110 text-center md:scale-100">
		<PillFlower title={m.menuClients()} />
	</div>

	<div class="relative mt-8 mb-1 md:mx-auto">
		<!-- Marquee container -->
		<div class="relative scale-90 overflow-hidden md:scale-100" bind:this={marqueeContainer}>
			<div
				class="marquee-container"
				bind:this={marqueeContent}
				style="--desktop-speed: {desktopSpeed}s; --mobile-speed: {mobileSpeed}s;"
			>
				{#each clients as client}
					<a
						href={client.href}
						rel="nofollow noopener"
						target="_blank"
						class="marquee-item grayscale transition-all duration-300 hover:grayscale-0"
					>
						<div class="flex flex-col justify-center">
							<img src={client.src} class="{client.height} {client.opacity}" alt={client.alt} />
						</div>
					</a>
				{/each}
			</div>

			<!-- Blur overlays -->
			<div class="pointer-events-none absolute inset-0 z-10">
				<div
					class="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-black via-black/80 to-transparent md:w-32"
				></div>
				<div
					class="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-black via-black/80 to-transparent md:w-32"
				></div>
			</div>
		</div>

		<!-- Decorative element -->
		<div class="absolute -top-[50%] right-[10%] scale-40 opacity-70">
			<img src="/bgs/cross.svg" alt="cross" />
		</div>
	</div>
</section>

<style>
	.marquee-container {
		display: flex;
		animation: marquee var(--mobile-speed, 20s) linear infinite;
		will-change: transform;
	}

	/* Desktop speed */
	@media (min-width: 768px) {
		.marquee-container {
			animation-duration: var(--desktop-speed, 40s);
		}
	}

	.marquee-item {
		margin: 0 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		min-width: fit-content;
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	/* Pause animation on hover */
	.marquee-container:hover {
		animation-play-state: paused;
	}

	/* Ensure smooth animation */
	@media (prefers-reduced-motion: no-preference) {
		.marquee-container {
			animation-timing-function: linear;
		}
	}

	/* Respect reduced motion preferences */
	@media (prefers-reduced-motion: reduce) {
		.marquee-container {
			animation: none;
		}

		.marquee-item {
			margin: 0 12px;
		}
	}
</style>
