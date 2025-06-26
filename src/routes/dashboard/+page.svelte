<script lang="ts">
	import { enhance } from '$app/forms';
	import { toggleLoader } from '$stores/Loader.state.svelte';
	import BarRight from '$lib/components/Dashboard/BarRight.svelte';
	import ContentDashboard from '$lib/components/Dashboard/ContentDashboard.svelte';
</script>

<!-- <Header titleLeft="Our" titleRight="Dashboard" heroContent="" /> -->
<!-- <HeaderDashboard /> -->

<div class=" mx-auto w-full gap-10">
	<div class="mx-auto flex flex-row">
		<BarRight />
		<ContentDashboard />
	</div>
</div>

<div class="py-10 text-center">
	<form
		method="POST"
		use:enhance={() => {
			// isSubmitting = true;
			toggleLoader();
			return async ({ update }) => {
				toggleLoader();
				// isSubmitting = false;
				update();
			};
		}}
	>
		<button type="submit">Logout</button>
	</form>
</div>
