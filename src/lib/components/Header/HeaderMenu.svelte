<script lang="ts">
	import { ChevronDown, Headset } from '@lucide/svelte';
	import { getLocale, localizeHref } from '$paraglide/runtime';
	import { drawerData } from '$lib/data/drawer.data';
	import { m } from '$paraglide/messages';

	const locale = $state(getLocale());
	let drawerDataForLang = $state(drawerData[locale]);
</script>

<div class="fw-header-fs z-50 hidden items-center justify-center gap-12 md:flex">
	<div class="dropdown relative">
		<div class="cursor-fw flex items-center uppercase" tabindex="0" role="button">
			{m.menuProducts()}
			<span><ChevronDown class="ml-1 h-5" /></span>
		</div>
		<!-- Main menu -->
		<ul
			class="menu dropdown-content bg-base-100 rounded-box z-1 mt-4 w-[440px] px-5 py-3 shadow-md"
		>
			{#each drawerDataForLang as drawer, i}
				<li>
					<a
						href={localizeHref(drawer.url || '/')}
						class={[
							'flex justify-between py-3 text-left align-middle text-sm',
							i + 1 == drawerDataForLang.length ? '' : 'border-b border-b-gray-700'
						]}
					>
						<!-- {i} - {drawerDataForLang.length} -->
						<div class="flex justify-center self-center text-left align-middle">
							{#if drawer.logo}
								<img
									src={drawer.logo}
									alt={`${drawer.name} logo`}
									class="relative -left-[1px] mr-1 w-5 max-w-5 antialiased"
								/>
							{:else if drawer.icon}
								<drawer.icon class="mr-2 h-4 w-4 self-center" />
							{/if}

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
	<a class="uppercase" href={localizeHref('/precos')}>{m.menuPrices()}</a>

	<a href={localizeHref('/lab')} class="flex items-center uppercase">
		<!-- <FlaskConical class="h-4" /> -->
		{m.menuLab()}
	</a>
	<a href={localizeHref('/clientes')} class="flex items-center gap-1 uppercase">
		<Headset class="h-4" />
		{m.menuHelp()}
	</a>
</div>
