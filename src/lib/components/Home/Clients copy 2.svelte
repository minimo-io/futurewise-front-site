<script lang="ts">
	// import type { Brand } from '$lib/types/brands.types';
	import PillFlower from '../PillFlower.svelte';
	import { m } from '$paraglide/messages';
	import Hr from '../Hr.svelte';
	import Dot from '../Dot.svelte';
</script>

<section class="relative -top-12 mt-7 px-6 pb-5 md:-top-[45px] md:mt-0 md:px-12 lg:px-16">
	<!-- Decorative dot -->
	<Hr />
	<!-- <Dot /> -->

	<div class="relative scale-110 text-center md:scale-100">
		<PillFlower title={m.menuClients()} />
	</div>

	<div class="relative mt-8 mb-1 scale-90 md:mx-auto md:scale-100">
		<!-- Marquee container -->
		<div class="overflow-hidden">
			<div class="marquee-container">
				<div class="marquee-content">
					<!-- National -->
					<a
						href="https://media.toxtren.com/redirect.aspx?pid=101348&bid=2036&redirectURL=https://natregs.com"
						rel="nofollow noopener"
						target="_blank"
						class="marquee-item"
					>
						<div class="flex flex-col justify-center">
							<img
								src="/clients/national-logo.svg"
								class="h-[53px] opacity-50"
								alt="National Casino"
							/>
						</div>
					</a>
					<!-- A Gente Faz -->
					<a
						href="https://agentefaz.net"
						rel="nofollow noopener"
						target="_blank"
						class="marquee-item"
					>
						<div class="flex flex-col justify-center">
							<img src="/clients/agf-logo.png" class="h-[50px]" alt="AGF" />
						</div>
					</a>
					<!-- Braaay -->
					<a href="https://braaay.com" rel="nofollow noopener" target="_blank" class="marquee-item">
						<div class="flex flex-col justify-center">
							<img src="/clients/braaay-logo.png" class="h-[32px]" alt="Braaay" />
						</div>
					</a>

					<!-- Hops -->
					<a
						href="https://dribbble.com/shots/19431388-Hops-v2-Craft-Beer-Marketplace"
						rel="nofollow noopener"
						target="_blank"
						class="marquee-item"
					>
						<div class="flex flex-col justify-center">
							<img src="/clients/hops-logo.svg" class="h-[32px] opacity-45" alt="Hops" />
						</div>
					</a>
					<!-- Betizen -->
					<a
						href="https://betizen.org"
						rel="nofollow noopener"
						target="_blank"
						class="marquee-item"
					>
						<div class="flex flex-col justify-center">
							<img src="/clients/betizen-logo.svg" class="h-[45px] opacity-40" alt="Betizen" />
						</div>
					</a>
				</div>

				<!-- Duplicate for seamless looping -->
				<div class="marquee-content">
					<!-- National -->
					<a
						href="https://media.toxtren.com/redirect.aspx?pid=101348&bid=2036&redirectURL=https://natregs.com"
						rel="nofollow noopener"
						target="_blank"
						class="marquee-item"
					>
						<div class="flex flex-col justify-center">
							<img
								src="/clients/national-logo.svg"
								class="h-[53px] opacity-50"
								alt="National Casino"
							/>
						</div>
					</a>
					<!-- A Gente Faz -->
					<a
						href="https://agentefaz.net"
						rel="nofollow noopener"
						target="_blank"
						class="marquee-item"
					>
						<div class="flex flex-col justify-center">
							<img src="/clients/agf-logo.png" class="h-[50px]" alt="AGF" />
						</div>
					</a>
					<!-- Braaay -->
					<a href="https://braaay.com" rel="nofollow noopener" target="_blank" class="marquee-item">
						<div class="flex flex-col justify-center">
							<img src="/clients/braaay-logo.png" class="h-[32px]" alt="Braaay" />
						</div>
					</a>

					<!-- Hops -->
					<a
						href="https://dribbble.com/shots/19431388-Hops-v2-Craft-Beer-Marketplace"
						rel="nofollow noopener"
						target="_blank"
						class="marquee-item"
					>
						<div class="flex flex-col justify-center">
							<img src="/clients/hops-logo.svg" class="h-[32px] opacity-45" alt="Hops" />
						</div>
					</a>
					<!-- Betizen -->
					<a
						href="https://betizen.org"
						rel="nofollow noopener"
						target="_blank"
						class="marquee-item"
					>
						<div class="flex flex-col justify-center">
							<img src="/clients/betizen-logo.svg" class="h-[45px] opacity-40" alt="Betizen" />
						</div>
					</a>
				</div>
			</div>
		</div>

		<!-- Blur overlays -->
		<div class="pointer-events-none absolute inset-0 z-10 hidden md:block">
			<div
				class="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black via-black/70 to-transparent"
			></div>
			<div
				class="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/70 to-transparent"
			></div>
		</div>

		<!-- Decorative element -->
		<div class="absolute -top-[50%] right-[10%] scale-40 opacity-70">
			<img src="/bgs/cross.svg" alt="cross" />
		</div>
	</div>

	<style>
		.marquee-container {
			display: flex;
			width: max-content;
			animation: marquee 20s linear infinite;
		}

		.marquee-content {
			display: flex;
			flex-shrink: 0;
		}

		.marquee-item {
			margin: 0 24px;
			display: flex;
			align-items: center;
			justify-content: center;
			grayscale: 100%;
		}

		.marquee-item:hover {
			grayscale: 0%;
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
	</style>
</section>
