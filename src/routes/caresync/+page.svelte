<script lang="ts">
	// import Clients from '$lib/components/Home/Clients.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import { m } from '$paraglide/messages';
</script>

<Header
	background="astronaut"
	opacity="0"
	titleLeft={m.project()}
	titleRight="CareSync"
	heroContent={m.heroContentCareSync()}
/>

<main>
	<!-- <Products /> -->
	<!-- <Developers /> -->
</main>
