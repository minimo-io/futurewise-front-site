<script lang="ts">
	import PillFlower from './PillFlower.svelte';
	interface Props {
		breadcrumb: string;
		titleLeft: string;
		titleRight: string;
	}

	let { breadcrumb, titleLeft, titleRight }: Props = $props();
</script>

<section
	class="relative mt-10 flex min-h-[230px] flex-col items-center justify-center px-6 pb-5 md:px-12 lg:px-16"
	style="background-image:url('/bgs/lab.png')"
>
	<!-- Background -->
	<div class="bg-primary absolute top-0 right-0 h-full w-full opacity-50"></div>
	<!-- Title -->
	<div class="relative -top-[50px] z-10 text-center">
		<PillFlower title={breadcrumb} />
	</div>
	<!-- Content -->
	<div class="relative z-10 md:min-w-[500px]">
		<div class=" mx-auto w-full bg-black px-12 py-4 text-center">
			<h2 class=" text-4xl font-bold tracking-wider">
				{@html titleLeft}
				<!-- <span class="text-fw-red">THE MOON</span> -->
				<div class="text-primary-content relative z-10 inline-block">
					<span
						class="font-pixel text-primary-content relative ml-2 bg-bottom text-[40px] tracking-widest"
					>
						{titleRight}
					</span>
					<span class="bg-primary absolute -top-[2px] right-0 left-0 -z-10 h-[90%] translate-y-1"
					></span>
				</div>
			</h2>
		</div>
		<div class="absolute -top-[40%] -left-[8%] z-20 scale-75 opacity-90">
			<img src="/bgs/cross.svg" alt="cross" />
		</div>
	</div>
</section>
