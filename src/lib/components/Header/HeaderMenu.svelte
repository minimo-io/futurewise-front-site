<script lang="ts">
	import { ChevronDown, FlaskConical } from '@lucide/svelte';
	import { getLocale } from '$paraglide/runtime';
	import { drawerData } from '$lib/data/drawer.data';

	const locale = $state(getLocale());
	let drawerDataForLang = $state(drawerData[locale]);
</script>

<div class="fw-header-fs z-50 hidden items-center justify-center gap-12 md:flex">
	<div class="dropdown relative">
		<a href="/" class="flex items-center" tabindex="0" role="button">
			PRODUTOS
			<span><ChevronDown class="ml-1 h-5" /></span>
		</a>
		<!-- <div class="dropdown-content card card-sm bg-base-200 mt-1 w-64 shadow-md">
			<div class="px-10 py-5">
				<p>This is a card. You can use any element as a dropdown.</p>
			</div>
		</div> -->
		<ul
			class="menu dropdown-content bg-base-100 rounded-box z-1 mt-4 w-[410px] px-5 py-3 shadow-md"
		>
			{#each drawerDataForLang as drawer, i}
				<li>
					<a
						href={drawer.url}
						class={[
							'flex justify-between py-3 text-left align-middle text-sm',
							i + 1 == drawerDataForLang.length ? '' : 'border-b border-b-gray-700'
						]}
					>
						<!-- {i} - {drawerDataForLang.length} -->
						<div class="flex justify-center self-center text-left align-middle">
							<drawer.icon class="mr-2 h-4 w-4 self-center" />
							<div
								class={['self-center text-[16px]', drawer.isBold ? 'font-bold' : 'font-semibold']}
							>
								{drawer.name}
							</div>
							{#if drawer.slogan}
								<div class="text-secondary ml-1 text-[16px]">— {drawer.slogan}</div>
							{/if}
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<a href="/">CLIENTES</a>
	<a href="/" class="flex items-center">
		<FlaskConical class="h-4" />
		LAB
	</a>
	<a href="/">PREÇOS</a>
</div>
