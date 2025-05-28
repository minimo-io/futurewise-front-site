<script lang="ts">
	// import Clients from '$lib/components/Home/Clients.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import Developers from '$lib/components/Home/Developers.svelte';
	import Products from '$lib/components/Home/Products.svelte';
	import PillFlower from '$lib/components/PillFlower.svelte';
	import TitleFullWidth from '$lib/components/TitleFullWidth.svelte';
	import Quote from '$lib/components/Home/Quote.svelte';
	import About from '$lib/components/Home/About.svelte';
	import { m } from '$paraglide/messages';
</script>

<Header
	background="rocket"
	opacity="0"
	titleLeft="Projeto"
	titleRight="FinXPay"
	heroContent={m.heroContentFinX()}
/>

<main>
	<!-- <Products /> -->
	<!-- <Developers /> -->
</main>
