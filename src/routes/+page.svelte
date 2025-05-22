<script lang="ts">
	// import Clients from '$lib/components/Home/Clients.svelte';
	import Developers from '$lib/components/Home/Developers.svelte';
	import Products from '$lib/components/Home/Products.svelte';
	import PillFlower from '$lib/components/PillFlower.svelte';
	import TitleFullWidth from '$lib/components/TitleFullWidth.svelte';
	import Quote from '$lib/components/Home/Quote.svelte';
	import About from '$lib/components/Home/About.svelte';
	import { m } from '$paraglide/messages';
</script>

<!-- Products Slider Section -->
<section
	class="fw-border-b-divider fw-border-b-divider-dot fw-border-b-divider-dot-center relative mt-8 px-6 pb-5 md:-top-[23px] md:mt-0 md:px-12 lg:px-16"
>
	<div>
		<div class="hidden text-center md:block">
			<PillFlower title={m.menuProducts()} />
		</div>

		<Products />
	</div>
</section>

<!-- Developers Section -->
<Developers />

<!-- Lab Section Title -->

<TitleFullWidth
	breadcrumb={m.aboutUs()}
	titleLeft={m.aboutUsTitleLeft()}
	titleRight={m.aboutUsTitleRight()}
/>

<!-- Quote Section -->
<Quote />

<!-- About Section -->
<About />
