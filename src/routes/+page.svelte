<script lang="ts">
	// import Clients from '$lib/components/Home/Clients.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import Developers from '$lib/components/Home/Developers.svelte';
	import Products from '$lib/components/Home/Products.svelte';
	import Clients from '$lib/components/Home/Clients.svelte';
	import TitleFullWidth from '$lib/components/TitleFullWidth.svelte';
	import Quote from '$lib/components/Home/Quote.svelte';
	import About from '$lib/components/Home/About.svelte';
	import { m } from '$paraglide/messages';
	import CtaContact from '$lib/components/CtaContact.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import ServiceOrders from '$lib/components/caresync/ServiceOrders.svelte';
</script>

<Meta title={m.metaHomeTitle()} description={m.metaHomeDescription()} />

<Header titleLeft={m.welcome()} titleRight={m.theFuture()} heroContent={m.heroContentHome()} />

<main class="font-sans-pro bg-base-100 text-base-content relative mx-(--fw-app-margin)">
	<div class="mb-[8px]">
		<Clients />
	</div>
	<Products />
	<Developers />
</main>

<!-- Lab Section Title -->
<TitleFullWidth
	breadcrumb={m.aboutUs()}
	titleLeft={m.aboutUsTitleLeft()}
	titleRight={m.aboutUsTitleRight()}
/>

<div class="2xl:px-[10%]">
	<!-- Quote Section -->
	<Quote />

	<!-- About Section -->
	<About />
</div>

<!-- <div class="border-base-200 mx-(--fw-app-margin) mb-12 md:mx-0">
	<ServiceOrders />
</div> -->

<div class="relative">
	<div
		class="absolute -right-[18%] bottom-[25%] z-0 hidden scale-80 opacity-30 md:-right-[5%] md:block"
	>
		<img src="/bgs/circles.svg" alt="circles" />
	</div>
</div>

<!-- Cta -->
<CtaContact />
