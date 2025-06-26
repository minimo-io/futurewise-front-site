<script lang="ts">
	import { BotMessageSquare } from '@lucide/svelte';
	import { getLocale } from '$paraglide/runtime';

	const locale = $state(getLocale());
	let inputRef: HTMLInputElement | null = null;

	function focusInput() {
		// Ensure focus after dropdown is visible (delay by microtask)
		queueMicrotask(() => {
			inputRef?.focus();
		});
	}

	// Optional: directive for cleaner syntax
	function autofocusOnClick(node: HTMLElement) {
		node.addEventListener('click', focusInput);
		return {
			destroy() {
				node.removeEventListener('click', focusInput);
			}
		};
	}
</script>

<div class="dropdown dropdown-end">
	<button
		use:autofocusOnClick
		class="bg-base-200 hover:bg-base-100 fw-header-fs relative hidden rounded-full px-3 py-3 md:block"
	>
		<div
			class="badge badge-success absolute -top-2 -right-1 h-[22px] w-[22px] text-center font-sans text-xs font-bold text-white"
		>
			✔
		</div>
		<BotMessageSquare class="h-5" strokeWidth="1" />
	</button>

	<ul class="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-[300px] p-2 shadow-sm">
		<li class="p-2 font-sans">
			<input
				bind:this={inputRef}
				type="text"
				placeholder="Pergunte para IA da CareSync"
				class="input input-sm"
			/>
		</li>
	</ul>
</div>
