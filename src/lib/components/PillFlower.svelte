<script lang="ts">
	interface Props {
		title: string;
	}

	let { title }: Props = $props();
</script>

<button
	class="!cursor-auto rounded-tl-3xl rounded-br-3xl bg-white px-10 py-2 text-[16px] font-bold text-black uppercase hover:opacity-100"
>
	{title}
</button>
