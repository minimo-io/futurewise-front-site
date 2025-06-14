<script lang="ts">
	interface Props {
		bottom?: boolean;
		class?: string;
	}

	let { bottom = true, class: className = '' }: Props = $props();
</script>

<!-- New border -->
<div
	class={[
		'via-base-300 pointer-events-none absolute left-0 h-[1px] w-full bg-gradient-to-r from-transparent to-transparent',
		bottom ? 'bottom-0' : 'top-0',
		className
	]}
></div>
