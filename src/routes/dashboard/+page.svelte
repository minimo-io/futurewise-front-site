<script lang="ts">
	import { enhance } from '$app/forms';
	import { toggleLoader } from '$stores/Loader.state.svelte';
	import Header from '$lib/components/Header/Header.svelte';
</script>

<Header titleLeft="Our" titleRight="Dashboard" heroContent="" />

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
