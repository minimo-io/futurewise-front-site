<script>
	import { fly } from 'svelte/transition';

	let { options = ['Autopilot', 'Copilot'], selected = $bindable(), onChange } = $props();

	function handleSelect(option) {
		selected = option;
		onChange?.(option);
	}
</script>

<div class="bg-base-200 relative inline-flex gap-0 rounded-full p-1">
	<!-- Option buttons -->
	{#each options as option, index}
		<button
			class="relative z-10 rounded-full px-6 py-2 text-sm font-medium transition-colors duration-200 hover:opacity-100
             {selected === option
				? 'text-base-content'
				: 'text-base-content/60 hover:text-base-content/80'}"
			onclick={() => handleSelect(option)}
		>
			{#if selected === option}
				<div
					class="bg-primary absolute inset-0 -z-10 rounded-full shadow-sm"
					transition:fly={{ x: index === 0 ? 20 : -20, duration: 100 }}
				></div>
			{/if}
			<span class="font-sans text-lg font-bold">
				{option}
			</span>
		</button>
	{/each}
</div>
