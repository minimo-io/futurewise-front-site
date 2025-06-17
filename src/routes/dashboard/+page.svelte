<script lang="ts">
	import { enhance } from '$app/forms';
	import { toggleLoader } from '$stores/Loader.state.svelte';
	import BarRight from '$lib/components/Dashboard/BarRight.svelte';
	import ContentDashboard from '$lib/components/Dashboard/ContentDashboard.svelte';
	import HeaderDashboard from '$lib/components/Dashboard/HeaderDashboard.svelte';
</script>

<!-- <Header titleLeft="Our" titleRight="Dashboard" heroContent="" /> -->
<HeaderDashboard />

<div class="max-w-fw mx-auto my-20">
	<BarRight />

	<ContentDashboard />
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
