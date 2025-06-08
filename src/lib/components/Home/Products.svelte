<!-- src/lib/components/Home/Products.svelte -->
<script lang="ts">
	import ProductSingle from '$lib/components/Home/ProductSingle.svelte';
	import { getLocale, localizeHref } from '$paraglide/runtime';
	import { drawerData } from '$lib/data/drawer.data';
	import PillFlower from '../PillFlower.svelte';
	import { m } from '$paraglide/messages';

	const locale = $state(getLocale());
	let drawerDataForLang = $state(drawerData[locale]);
</script>

<!-- Products Slider Section -->
<section
	class="fw-border-b-divider relative mt-7 px-0 pb-5 md:-top-[23px] md:mt-0 md:px-12 lg:px-16"
>
	<div class="md:pb-5">
		<div class="relative -top-1 hidden text-center md:block">
			<PillFlower title={m.menuProducts()} />
		</div>
		<!-- <div class="z-50 pt-6 text-center font-serif text-sm tracking-wider">
			(Dois mais em desenvolvimento no <a href={localizeHref('/lab')}>laboratório</a>)
		</div> -->
		<div
			class="relative -top-5 mx-auto mt-8 mb-1 flex flex-col items-center justify-center gap-0 md:top-0 md:-left-2 md:flex-row"
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
</section>
