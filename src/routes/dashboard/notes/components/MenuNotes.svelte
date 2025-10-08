<script lang="ts">
	import { AppConfig } from '$lib';
	import { localizeHref } from '$paraglide/runtime';
	import { dashboardLeftMenuState } from '$stores/DashboardLeftMenu.state.svelte';
	import { NotebookTabs, Settings, TableConfig } from '@lucide/svelte';

	let isCollapsed = $derived(dashboardLeftMenuState.collapsed);
</script>

<!-- Notes -->
<li>
	<a href={localizeHref(AppConfig.dashboards.care.base)}>
		<NotebookTabs class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
		<span class="hidden {isCollapsed ? '' : 'md:inline'}">Notes</span>
	</a>
	<!-- Actual notes -->
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
<li class="border-base-200 mt-3 border-t border-b py-2">
	<a href="/">
		<Settings class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
		<span class="hidden {isCollapsed ? '' : 'md:inline'}">Config</span>
	</a>
</li>
