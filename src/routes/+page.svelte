<script lang="ts">
	// import Clients from '$lib/components/Home/Clients.svelte';
	import Developers from '$lib/components/Home/Developers.svelte';
	import Products from '$lib/components/Home/Products.svelte';
	import PillFlower from '$lib/components/PillFlower.svelte';
	import TitleFullWidth from '$lib/components/TitleFullWidth.svelte';
	import Quote from '$lib/components/Home/Quote.svelte';
	import About from '$lib/components/Home/About.svelte';
</script>

<!-- Products Slider Section -->
<section
	class="fw-border-b-divider fw-border-b-divider-dot fw-border-b-divider-dot-center relative -top-[23px] px-6 pb-5 md:px-12 lg:px-16"
>
	<div>
		<div class="text-center">
			<PillFlower title="Produtos" />
		</div>

		<Products />
	</div>
</section>

<!-- Developers Section -->
<Developers />

<!-- Lab Section Title -->

<TitleFullWidth
	breadcrumb="SOBRE NÓS"
	titleLeft="HAS NOTHING TO DO<br/>WITH"
	titleRight="THE MOON"
/>

<!-- Quote Section -->
<Quote />

<!-- About Section -->
<About />
