<script lang="ts">
	interface Props {
		titleRight: string;
		titleLeft: string;
	}

	let { titleRight, titleLeft }: Props = $props();
</script>

<div class="relative -left-10 flex items-center">
	<div class="mr-5">
		<img src="/bgs/square.svg" alt="square-decorator" class="h-4" />
	</div>
	<div>
		<h1 class="text-3xl font-extralight tracking-wide md:text-4xl">
			<span>{titleLeft}</span>

			<div class="text-primary-content relative z-10 inline-block">
				<span
					class="font-pixel text-primary-content relative ml-2 bg-bottom text-[40px] tracking-widest"
				>
					{titleRight}
				</span>
				<span class="bg-primary absolute -top-[2px] right-0 left-0 -z-10 h-[90%] translate-y-1"
				></span>
			</div>
		</h1>
	</div>
</div>
