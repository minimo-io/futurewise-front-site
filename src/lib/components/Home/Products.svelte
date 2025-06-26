<!-- src/lib/components/Home/Products.svelte -->
<script lang="ts">
	import ProductSingle from '$lib/components/Home/ProductSingle.svelte';
	import { getLocale } from '$paraglide/runtime';
	import { drawerData } from '$lib/data/drawer.data';
	import PillFlower from '../PillFlower.svelte';
	import { m } from '$paraglide/messages';
	import Hr from '../Hr.svelte';

	const locale = $state(getLocale());
	let drawerDataForLang = $state(drawerData[locale]);
</script>

<!-- Products Slider Section -->
<section class=" relative mt-7 px-0 pb-5 md:-top-[23px] md:mt-0 md:px-12 lg:px-16">
	<Hr halfWidth={true} />

	<div class="md:pb-7">
		<div class="relative -top-1 hidden text-center md:block">
			<PillFlower title={m.menuProducts()} />
		</div>

		<div
			class="relative -top-5 mx-auto mt-10 mb-1 flex flex-col items-center justify-center gap-0 md:top-0 md:-left-4 md:flex-row"
		>
			{#each drawerDataForLang as product, i (product.name)}
				{@const align = i === 0 ? 'start' : i === drawerDataForLang.length - 1 ? 'end' : 'center'}

				<ProductSingle
					count={i}
					brand={product}
					{align}
					icon={product.icon}
					primary={product.primary}
				/>
			{/each}

			<div class="absolute -bottom-[40%] left-[55%] scale-80 opacity-20">
				<img src="/bgs/cross.svg" alt="cross" />
			</div>
		</div>
	</div>

	<div class="relative mb-12 block md:hidden">
		<Hr />
		<div
			class="absolute bottom-[-7px] left-1/2 h-[15px] w-[15px] -translate-x-1/2 bg-[url('/bgs/square.svg')] bg-contain bg-no-repeat"
		></div>
	</div>
</section>
