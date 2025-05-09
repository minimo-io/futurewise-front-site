<!-- src/lib/components/Home/ProductSingle.svelte -->
<script lang="ts">
	import type { Brand } from '$lib/types/brands.types';
	import Pill from '../Pill.svelte';

	interface Props {
		brand: Brand;
		align: 'start' | 'center' | 'end';
		isClient?: boolean;
		minWidth?: string;
		primary?: boolean;
	}

	let { brand, align, isClient = false, minWidth = '', primary = false }: Props = $props();
</script>

<a
	href={brand.link}
	class={['relative rounded-sm opacity-90 hover:opacity-50', minWidth ? minWidth : 'min-w-[275px]']}
>
	<div class="mb-4 flex flex-col">
		<div
			class={[
				'flex items-center',
				align == 'start' && 'justify-start',
				align == 'end' && 'justify-end',
				align != 'start' && align != 'end' && 'justify-center'
			]}
		>
			<div class="flex flex-col">
				<div class="flex items-center justify-center">
					{#if isClient}
						<div class="flex h-[60px] items-center">
							<img src={brand.logo} alt={`${brand.name} logo`} class="¡ w-[145px] min-w-[150px]" />
						</div>
					{:else}
						<div class="mr-2">
							<img src="/products/caresync/caresync-logo.svg" alt="CareSync" class="mr-2 h-7" />
						</div>
						<span class="font-pixel text-[38px] font-bold tracking-wider text-white opacity-60">
							{brand.name}
						</span>
					{/if}
				</div>
				<div
					class={[
						'flex flex-col items-center justify-self-center',
						align == 'start' && 'justify-start',
						align == 'end' && 'justify-end',
						align != 'start' && align != 'end' && 'justify-center'
					]}
				>
					<Pill color={primary ? 'primary' : 'light'} text={brand.slogan} />
					<div
						class="text-primary mt-[10px] text-center text-[12px] tracking-wider uppercase opacity-70"
					>
						{@html brand.sloganDetails}
					</div>
				</div>
			</div>
			{#if brand.underDevelopment}
				<div class="absolute -top-7 -right-15 scale-80">
					<Pill color="primary" text="Em desenvolvimento" customCss="!px-3" />
				</div>
			{/if}
		</div>
	</div>
</a>
