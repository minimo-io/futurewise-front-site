<script lang="ts">
	interface Props {
		type: 'light' | 'dark';
	}
	let { type }: Props = $props();
</script>

<div
	class={[
		'relative mt-2 block max-w-[180px] text-center opacity-80',
		type == 'light' && 'fw-button-product-light'
	]}
>
	Manutenção TI preditiva
</div>
