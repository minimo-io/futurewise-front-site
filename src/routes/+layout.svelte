<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="font-sans-pro bg-base-100 text-base-content min-h-screen">
	{@render children()}
</main>
