<!-- src/lib/components/Home/Products.svelte -->
<script lang="ts">
	// import type { Brand } from '$lib/types/brands.types';
	import PillFlower from '../PillFlower.svelte';
	import { m } from '$paraglide/messages';
	import Hr from '../Hr.svelte';
	import Dot from '../Dot.svelte';
</script>

<!-- <section
	class="fw-border-b-divider fw-border-b-divider-dot fw-border-b-divider-dot-center relative -top-12 mt-7 px-6 pb-5 md:-top-[45px] md:mt-0 md:px-12 lg:px-16"
> -->
<section class="relative -top-12 mt-7 px-6 pb-5 md:-top-[45px] md:mt-0 md:px-12 lg:px-16">
	<!-- Decorative dot -->
	<Hr />
	<Dot />

	<div class="relative text-center">
		<PillFlower title={m.menuClients()} />
	</div>

	<div
		class="fw-clients relative mt-10 mb-1 grid scale-90 grid-cols-2 gap-x-10 gap-y-5 grayscale md:mx-auto md:flex md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-12 md:gap-x-15 md:gap-y-0"
	>
		<!-- Clients -->
		<!-- National -->
		<a
			href="https://media.toxtren.com/redirect.aspx?pid=101348&bid=2036&redirectURL=https://natregs.com"
			rel="nofollow noopener"
			target="_blank"
			class="relative flex items-center justify-center rounded-sm opacity-90 hover:opacity-50 md:w-auto"
		>
			<div class="mb-4 flex flex-col justify-center">
				<img
					src="/clients/national-logo.svg"
					class="relative h-[53px] opacity-50"
					alt="National Casino"
				/>
			</div>
		</a>
		<!-- A Gente Faz -->
		<a
			href="https://agentefaz.net"
			rel="nofollow noopener"
			target="_blank"
			class="relative flex items-center justify-center rounded-sm opacity-90 hover:opacity-50 md:w-auto"
		>
			<div class="mb-4 flex flex-col justify-center">
				<img src="/clients/agf-logo.png" class="md:h-[50px]" alt="AGF" />
			</div>
		</a>
		<!-- Braaay -->
		<a
			href="https://braaay.com"
			rel="nofollow noopener"
			target="_blank"
			class="relative flex items-center justify-center rounded-sm opacity-90 hover:opacity-50 md:w-auto"
		>
			<div class="mb-4 flex flex-col justify-center">
				<img
					src="/clients/braaay-logo.png"
					class="relative top-[1px] w-[130px] md:h-[32px] md:w-auto"
					alt="Braaay"
				/>
			</div>
		</a>

		<!-- Hops -->
		<a
			href="https://dribbble.com/shots/19431388-Hops-v2-Craft-Beer-Marketplace"
			rel="nofollow noopener"
			target="_blank"
			class="relative flex items-center justify-center rounded-sm opacity-90 hover:opacity-50 md:w-auto"
		>
			<div class="mb-4 flex flex-col justify-center">
				<img src="/clients/hops-logo.svg" class="relative -top-1 h-[32px] opacity-50" alt="Hops" />
			</div>
		</a>
		<!-- Betizen -->
		<a
			href="https://betizen.org"
			rel="nofollow noopener"
			target="_blank"
			class="relative flex items-center justify-center rounded-sm opacity-90 hover:opacity-50 md:w-auto"
		>
			<div class="mb-4 flex flex-col justify-center">
				<img
					src="/clients/betizen-logo.svg"
					class="relative -top-1 h-[45px] opacity-50"
					alt="Betizen"
				/>
			</div>
		</a>

		<!-- End Clients -->

		<div class="absolute -top-[50%] right-[10%] scale-40 opacity-70">
			<img src="/bgs/cross.svg" alt="cross" />
		</div>
	</div>
</section>
