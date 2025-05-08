<script lang="ts">
	interface Props {
		color: 'light' | 'primary' | 'dark';
		text: string;
		customCss?: string;
	}
	let { color, text, customCss = '' }: Props = $props();
</script>

<div
	class={[
		'fw-pill tracking-widest',
		color == 'light' && 'fw-pill-light',
		color == 'primary' && 'fw-pill-primary',
		customCss
	]}
>
	{text}
</div>
