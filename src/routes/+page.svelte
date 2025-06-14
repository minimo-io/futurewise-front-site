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
</script>

<Meta title={m.metaHomeTitle()} description={m.metaHomeDescription()} />

<Header titleLeft={m.welcome()} titleRight={m.theFuture()} heroContent={m.heroContentHome()} />

<main class="font-sans-pro bg-base-100 text-base-content relative mx-(--fw-app-margin)">
	<Products />
	<Clients />
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

<!-- Cta -->
<CtaContact />
