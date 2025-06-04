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
	titleLeft={m.project()}
	titleRight="FinXPay"
	heroContent={m.heroContentFinX()}
/>

<main class="max-w-fw relative mx-auto flex flex-col gap-0 md:flex-row">
	<div class="fw-cmp-box">
		<div class="fw-cmp-box-title">Enterprise</div>
		<div class="fw-cmp-box-content">AAA</div>
	</div>
	<div class="fw-cmp-box">
		<div class="fw-cmp-box-title">Startups</div>
		<div class="fw-cmp-box-content">BBB</div>
	</div>
	<div class="fw-cmp-box border-r-0">
		<div class="fw-cmp-box-title">E-Commerce</div>
		<div class="fw-cmp-box-content">CCC</div>
	</div>

	<!-- Decorations -->
	<!-- Left -->
	<div
		class="border-r-base-200 absolute -bottom-[1px] left-0 hidden h-[130px] w-[1px] -translate-x-1/2 transform border-r md:block"
	></div>
	<!-- Right -->
	<div
		class="border-r-base-200 absolute -top-[1px] right-0 hidden h-[130px] w-[1px] -translate-x-1/2 transform border-r md:block"
	></div>
</main>
