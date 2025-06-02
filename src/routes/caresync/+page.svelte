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
	<div
		class="max-w-fw border-x-base-200 relative container my-0 text-center md:mx-auto md:border-x"
	>
		<div class="mx-(--fw-app-margin) flex flex-1 items-center justify-center">
			<div class="border-r-base-200 border-r p-20 text-center">AAAA</div>
			<div class="p-20">BBBB</div>
		</div>
	</div>
	<!-- <Developers /> -->
</main>
