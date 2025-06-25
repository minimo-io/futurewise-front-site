<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	interface Props {
		titleRight: string;
		titleLeft: string;
		forceFlexRow?: boolean;
	}

	let { titleRight, titleLeft, forceFlexRow = false }: Props = $props();

	// Create a Tween instance for the width animation
	const backgroundWidth = new Tween(0, {
		duration: 500,
		easing: cubicOut
	});

	// Trigger animation whenever the component loads or titleRight changes
	$effect(() => {
		// Reset to 0
		backgroundWidth.set(0);

		// Animate to 100% after a brief delay
		setTimeout(() => {
			backgroundWidth.set(100);
		}, 50);
	});
</script>

<div class="relative flex items-center md:-left-10">
	<div class="mr-5 hidden md:block">
		<img src="/bgs/square.svg" alt="square-decorator" class="h-4" />
	</div>
	<div>
		<h1
			class={[
				'flex gap-0 text-[30px] font-extralight tracking-wide md:flex-row md:gap-3 md:text-4xl',
				forceFlexRow ? 'gap-3 ' : 'flex-col'
			]}
		>
			<span>{titleLeft}</span>

			<!-- Right -->
			<div
				class={[
					'text-primary-content relative z-10 inline-block',
					forceFlexRow ? '-top-1' : '-top-2 left-5 md:-top-1 md:left-0'
				]}
			>
				<span
					class="font-pixel text-primary-content relative z-10 ml-2 bg-bottom text-[30px] tracking-widest md:text-[40px]"
				>
					{titleRight}
				</span>
				<!-- Text Right Colored Background with Animation -->
				<span
					class="bg-primary absolute top-[0px] -left-[1px] z-0 h-[80%] translate-y-1 md:-top-[2px] md:h-[90%]"
					style="width: {backgroundWidth.current + 2}%;"
				></span>
			</div>
		</h1>
	</div>
</div>
