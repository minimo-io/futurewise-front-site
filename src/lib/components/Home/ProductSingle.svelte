<script lang="ts">
	import type { Brand } from '$lib/types/brands.types';
	import Button from '../Button.svelte';

	interface Props {
		brand: Brand;
	}

	let { brand }: Props = $props();
</script>

<div class="flex-1 justify-center rounded-sm border">
	<div class="mb-4 flex flex-col items-center justify-center">
		<div class="flex items-center">
			<div class="mr-2 text-gray-400">
				<img src="/products/caresync/caresync-logo.svg" alt="CareSync" class="mr-2 h-7" />
			</div>
			<span class="font-pixel text-[38px] font-bold tracking-wider text-white opacity-60">
				{brand.name}
			</span>
		</div>
		<Button type="light" />
	</div>

	<!-- <p class="mb-4 text-sm text-gray-400">API DE PROCESSAMENTO DE PAGAMENTOS GLOBAL</p> -->
</div>
