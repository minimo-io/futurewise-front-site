<!-- src/lib/components/Home/ProductSingle.svelte -->
<script lang="ts">
	// import type { Brand } from '$lib/types/brands.types';
	import type { DrawerData } from '$lib/type/drawer.types';
	import { m } from '$paraglide/messages';
	import Hr from '../Hr.svelte';
	import Pill from '../Pill.svelte';
	import { type Icon as IconType } from '@lucide/svelte';

	interface Props {
		// brand: Brand;
		brand: DrawerData;
		align: 'start' | 'center' | 'end';
		icon?: typeof IconType;
		minWidth?: string;
		primary?: boolean;
		count?: number;
	}

	let { brand, align, minWidth = '', primary = false, icon, count = 0 }: Props = $props();

	// console.log(icon);
</script>

<a
	href={brand.url}
	class={[
		'relative scale-90 rounded-sm opacity-90 hover:opacity-100 md:scale-90',
		minWidth ? minWidth : 'min-w-full md:min-w-[250px]'
	]}
>
	<div class="mb-4 flex flex-col">
		<div
			class={[
				'Xborder-t flex items-center md:border-none md:pt-0 ',
				count == 0 ? 'fw-border-t-none pt-2' : 'fw-border-tX pt-8',
				align == 'start' && 'justify-center md:justify-start',
				align == 'end' && 'justify-center md:justify-end',
				align != 'start' && align != 'end' && 'justify-center'
			]}
		>
			{#if count != 0}
				<Hr bottom={false} class="block md:hidden" />
			{/if}

			<div class="flex flex-col">
				<div class="flex items-center justify-center">
					<!-- {#if brand.logo} -->
					<!-- <div class="flex h-[60px] items-center">
							<img src={brand.logo} alt={`${brand.name} logo`} class="¡ w-[145px] min-w-[150px]" />
						</div> -->
					<!-- {:else} -->
					<div class={[!brand.logo && 'mr-2']}>
						{#if brand.logo}
							<img
								src={brand.logo}
								alt={`${brand.name} logo`}
								class="mr-[9px] w-[30px] max-w-[30px]"
							/>
						{:else if icon}
							{@const Icon = icon}
							<Icon strokeWidth="3" class="text-base-content mr-1" />
						{/if}
					</div>
					<span class="font-pixel text-base-content text-4xl font-bold tracking-wider opacity-90">
						{brand.name}
					</span>
					<!-- {/if} -->
				</div>
				<div
					class={[
						'flex flex-col items-center justify-self-center',
						align == 'start' && 'justify-start',
						align == 'end' && 'justify-end',
						align != 'start' && align != 'end' && 'justify-center'
					]}
				>
					<Pill
						color={primary ? 'primary' : 'light'}
						text={brand.sloganSimple || brand.slogan || ''}
					/>
					<div
						class="text-primary mt-[10px] text-center text-[12px] tracking-wider uppercase opacity-70"
					>
						{@html brand.details}
					</div>
				</div>
			</div>
			{#if brand.underDevelopment}
				<div class="absolute top-3 -right-0 scale-80 md:-top-8 md:-right-10">
					<Pill color="primary" text={m.prototyping()} customCss="!px-3" />
				</div>
			{/if}
		</div>
	</div>
</a>
