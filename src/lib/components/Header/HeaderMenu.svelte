<script lang="ts">
	import { Book, ChevronDown, FileClock, Headset, HeartPlus, PenLine, Zap } from '@lucide/svelte';
	import { getLocale, localizeHref } from '$paraglide/runtime';
	import { drawerData } from '$lib/data/drawer.data';
	import { m } from '$paraglide/messages';
	import { AppConfig } from '$lib/configs';

	const locale = $state(getLocale());
	let drawerDataForLang = $state(drawerData[locale]);
</script>

<div class="fw-header-fs z-50 hidden items-center justify-center gap-12 md:flex">
	<div class="dropdown relative">
		<div class="cursor-fw flex items-center uppercase" tabindex="0" role="button">
			<!-- <Zap
				fill="#fff"
				class="animate__animated animate__jello animate__repeat-3 animate__delay-1s mr-[5px] h-4"
			/> -->
			{m.menuProducts()}
			<span><ChevronDown class="ml-1 h-5" /></span>
		</div>
		<!-- Main menu -->
		<ul
			class="menu dropdown-content bg-base-100 rounded-box z-1 mt-4 w-[450px] px-5 py-3 shadow-md"
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
								class={[
									'self-center text-[16px] tracking-wider',
									drawer.isBold ? 'font-bold' : 'font-semibold'
								]}
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

	<div class="dropdown relative">
		<div class="cursor-fw flex items-center uppercase" tabindex="0" role="button">
			{m.menuHelp()}
			<span><ChevronDown class="ml-1 h-5" /></span>
		</div>
		<ul class="menu dropdown-content bg-base-100 rounded-box z-1 mt-4 w-fit px-5 py-3 shadow-md">
			<li>
				<a
					href={localizeHref('/soon')}
					class={[
						'flex py-3 align-middle text-[16px] tracking-wider',
						'border-b border-b-gray-700'
					]}
				>
					<Headset class="h-4" />
					{m.help()}
				</a>
			</li>
			<li>
				<a
					href={localizeHref('/soon')}
					class={[
						'flex py-3 align-middle text-[16px] tracking-wider',
						'border-b border-b-gray-700'
					]}
				>
					<Book class="h-4" />
					{m.documentation()}
				</a>
			</li>
			<li>
				<a
					href={AppConfig.status}
					rel="nofollow noopener"
					target="_blank"
					class={[
						'flex py-3 align-middle text-[16px] tracking-wider',
						'border-b border-b-gray-700'
					]}
				>
					<HeartPlus class="h-4" />
					{m.apiStatus()}
				</a>
			</li>
			<li>
				<a
					href={localizeHref('/soon')}
					class={[
						'flex py-3 align-middle text-[16px] tracking-wider',
						'border-b border-b-gray-700'
					]}
				>
					<FileClock class="h-4" />
					Changelog
				</a>
			</li>

			<li>
				<a
					href={localizeHref('/blog')}
					class={['flex py-3 align-middle text-[16px] tracking-wider']}
				>
					<PenLine class="h-4" />
					Blog
				</a>
			</li>
		</ul>
	</div>

	<!-- <a class="uppercase" href={localizeHref('/soon')}>{m.menuPrices()}</a> -->
	<!-- <a class="uppercase" href={localizeHref('/blog')}>Blog</a> -->
	<!-- <a class="uppercase" href={localizeHref('/blog')}>Blog</a> -->

	<a href={localizeHref('/soon')} class="flex items-center tracking-wide uppercase">
		<!-- <FlaskConical class="h-4" /> -->
		{m.menuLab()}
	</a>
</div>
