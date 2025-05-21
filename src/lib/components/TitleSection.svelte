<script lang="ts">
	interface Props {
		titleRight: string;
		titleLeft: string;
		forceFlexRow?: boolean;
	}

	let { titleRight, titleLeft, forceFlexRow = false }: Props = $props();
</script>

<div class="relative flex items-center md:-left-10">
	<div class="mr-5 hidden md:block">
		<img src="/bgs/square.svg" alt="square-decorator" class="h-4" />
	</div>
	<div>
		<h1
			class={[
				'flex gap-0 text-3xl font-extralight tracking-wide md:flex-row md:gap-3 md:text-4xl',
				forceFlexRow ? 'gap-3 ' : 'flex-col'
			]}
		>
			<span>{titleLeft}</span>

			<div
				class={['text-primary-content relative z-10 inline-block', forceFlexRow ? '-top-1' : '']}
			>
				<span
					class="font-pixel text-primary-content relative z-10 ml-2 bg-bottom text-[35px] tracking-widest md:text-[40px]"
				>
					{titleRight}
				</span>
				<span class="bg-primary absolute -top-[2px] right-0 left-0 z-0 h-[90%] translate-y-1"
				></span>
			</div>
		</h1>
	</div>
</div>
