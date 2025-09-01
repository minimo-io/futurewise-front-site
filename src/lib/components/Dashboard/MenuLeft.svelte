<!-- src/lib/components/Dashboard/MenuLeft.svelte -->
<script lang="ts">
	import {
		BookOpen,
		ChevronLeft,
		ChevronRight,
		ClipboardMinus,
		Coins,
		Home,
		Laptop,
		LifeBuoy,
		ReceiptText,
		Recycle,
		TriangleAlert,
		UsersRound
	} from '@lucide/svelte';
	import HeaderLogo from '../Header/HeaderLogo.svelte';
	import ProductSwitchButton from '../Buttons/ProductSwitchButton.svelte';
	import { localizeHref } from '$paraglide/runtime';
	import { m } from '$paraglide/messages';
	import { AppConfig } from '$lib/configs';
	import {
		toggleDashboardLeftMenuCollapse,
		dashboardLeftMenuState
	} from '$stores/DashboardLeftMenu.state.svelte';

	// State to track if menu is collapsed
	let isCollapsed = $derived(dashboardLeftMenuState.collapsed);

	function toggleMenu() {
		toggleDashboardLeftMenuCollapse();
	}
</script>

<div
	class="border-base-200 flex min-h-dvh flex-col border-r transition-all duration-300 ease-in-out {isCollapsed
		? ''
		: 'md:w-60'}"
>
	<!-- Logo -->
	<div
		class="border-base-200 flex items-center border-b {isCollapsed ? '' : 'md:h-[108px] md:p-5'}"
	>
		<HeaderLogo isDashboard={true} {isCollapsed} />
	</div>
	<!-- Switch button -->
	<div class="border-base-200 relative {isCollapsed ? '' : 'h-[73px]'} hidden border-b md:block">
		<button
			onclick={toggleMenu}
			class="border-base-200 absolute -top-3 -right-3 hidden h-[23px] w-[23px] items-center justify-center rounded-full border bg-black transition-all duration-200 hover:scale-110 md:flex"
		>
			{#if isCollapsed}
				<ChevronRight class="relative -right-[1px] h-[13px]" strokeWidth="3" />
			{:else}
				<ChevronLeft class="relative -left-[1px] h-[13px]" strokeWidth="3" />
			{/if}
		</button>
		<div class="{isCollapsed ? 'hidden' : 'hidden md:block'} ">
			<ProductSwitchButton />
		</div>
	</div>

	<!-- Actual menu -->
	<ul class="menu bg-grey-light h-full gap-3 {isCollapsed ? '' : 'md:w-60 md:gap-0'}">
		<li>
			<a href={localizeHref(AppConfig.dashboards.care.base)} class="active text-primary">
				<Home class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
				<span class="hidden {isCollapsed ? '' : 'md:inline'}">Dashboard</span>
			</a>
		</li>
		<li>
			<a href={localizeHref(AppConfig.dashboards.care.base)}>
				<Laptop class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
				<span class="hidden {isCollapsed ? '' : 'md:inline'}">Inventário</span>
			</a>
			<ul class="hidden {isCollapsed ? '' : 'md:block'} pb-2 md:pl-4">
				<li>
					<a href={localizeHref(AppConfig.dashboards.care.base)}>Todos os ativos</a>
				</li>
				<li><a href={localizeHref(AppConfig.dashboards.care.base)}>Notebooks</a></li>
				<li><a href={localizeHref(AppConfig.dashboards.care.base)}>Desktops</a></li>
				<!-- <hr class="text-base-200 relative -right-3 mt-2 mb-1 h-[1px] w-1/2" />
				<li><a href={localizeHref(AppConfig.dashboards.care.base)}>Peças</a></li> -->
			</ul>
		</li>
		<li>
			<a href={localizeHref(AppConfig.dashboards.care.services)}>
				<LifeBuoy class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
				<span class="hidden {isCollapsed ? '' : 'md:inline'}">Serviços</span>
			</a>
		</li>
		<li>
			<a href={localizeHref(AppConfig.dashboards.care.alerts)}>
				<TriangleAlert class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
				<div class="indicator">
					<span class="indicator-item indicator-end indicator-middle badge badge-xs badge-primary">
						32
					</span>
					<span class="hidden {isCollapsed ? '' : 'md:mr-5 md:inline'}">Alertas</span>
				</div>
			</a>
		</li>

		<li>
			<a href="/">
				<ClipboardMinus class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
				<span class="hidden {isCollapsed ? '' : 'md:inline'}">Relatórios</span>
			</a>
		</li>
		<li>
			<a href="/">
				<UsersRound class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
				<span class="hidden {isCollapsed ? '' : 'md:inline'}">Organização</span>
			</a>
			<ul class="hidden {isCollapsed ? '' : 'md:block'} pb-2 pl-8 md:pl-4">
				<li>
					<a href="/">Usuários</a>
				</li>
				<li>
					<a href={localizeHref(AppConfig.dashboards.care.actions.addAgent)}
						>Clientes / Funcionários</a
					>
				</li>
				<li><a href="/">Técnicos</a></li>
			</ul>
		</li>

		<!-- Marketplaces & Recycling -->
		<li class="border-base-200 mt-3 border-t pt-2">
			<a href="/">
				<Coins class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
				<span class="hidden {isCollapsed ? '' : 'md:inline'}">Compras</span>
			</a>
		</li>
		<li>
			<a href="/">
				<Recycle class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
				<span class="hidden {isCollapsed ? '' : 'md:inline'}">Reciclagem</span>
			</a>
		</li>

		<!-- <li class="mt-2 mb-0"><hr class="border-base-200 h-[1px] border-t" /></li> -->
		<li class="border-base-200 mt-3 border-t border-b py-2">
			<a href="/">
				<ReceiptText class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
				<span class="hidden {isCollapsed ? '' : 'md:inline'}">Faturamento</span>
			</a>
		</li>
		<li class="border-base-200 border-b py-2">
			<a
				href="https://any.coop/AAgC1MK4YpFsTa9gfi822CM4eHbm83ovkrQQYDFnTvyDw2hN/tools-and-technologies"
				target="_blank"
				rel="nofollow"
			>
				<BookOpen class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
				<span class="hidden {isCollapsed ? '' : 'md:inline'}">{m.knowledgeBase()}</span>
			</a>
		</li>
		<li class="border-base-200 border-b py-2">
			<a href="/">
				<BookOpen class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
				<span class="hidden {isCollapsed ? '' : 'md:inline'}">Docs</span>
			</a>
		</li>
	</ul>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	ul > li > a {
		@apply text-[16px] font-bold;
	}
	.menu ul > li > a {
		@apply py-1 text-sm font-normal;
		@apply leading-5;
	}
	ul.menu > li > a.active {
		/* @apply font-bold; */
	}
</style>
