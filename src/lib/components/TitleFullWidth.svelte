<script lang="ts">
	import Dot from './Dot.svelte';
	import Hr from './Hr.svelte';
	import PillFlower from './PillFlower.svelte';
	interface Props {
		breadcrumb: string;
		titleLeft: string;
		titleRight: string;
	}

	let { breadcrumb, titleLeft, titleRight }: Props = $props();
</script>

<!-- <section
	class="relative -top-5 flex min-h-[230px] flex-col items-center justify-center px-6 pb-5 md:top-0 md:mt-10 md:px-12 lg:px-16"
	style="background-image:url('/bgs/lab.png')"
> -->
<section
	class="relative -top-5 flex scale-70 flex-col items-center justify-center px-6 md:-top-0 md:mt-26 md:scale-90 md:px-12 lg:px-16"
>
	<!-- <Hr bottom={false} /> -->
	<!-- <Dot /> -->
	<!-- Background -->
	<!-- <div class="bg-primary glass absolute top-0 right-0 h-full w-full opacity-10"></div> -->
	<!-- Title -->
	<!-- <div class="relative -top-[18px] z-10 text-center md:-top-[50px]">
		<PillFlower title={breadcrumb} />
	</div> -->
	<!-- Content -->
	<div class="relative z-10 md:min-w-[500px]">
		<div class=" mx-auto w-full bg-black px-1 text-center">
			<h2 class=" text-6xl font-bold tracking-wider">
				{@html titleLeft}
				<!-- <span class="text-fw-red">THE MOON</span> -->
				<div class="text-primary-content relative z-10 inline-block">
					<span
						class="font-pixel text-primary-content relative ml-2 bg-bottom text-[55px] tracking-widest"
					>
						{titleRight}
					</span>
					<span class="bg-primary absolute -top-[2px] right-0 left-0 -z-10 h-[90%] translate-y-1"
					></span>
				</div>
			</h2>
		</div>
		<div
			class="absolute -top-[30%] -left-[13%] z-20 scale-75 opacity-90 md:-top-[40%] md:-left-[8%]"
		>
			<img src="/bgs/cross.svg" alt="cross" />
		</div>
	</div>
</section>
