<script lang="ts">
	import {
		Bolt,
		BookOpen,
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
	import { toggleLoader } from '$stores/Loader.state.svelte';
	import { enhance } from '$app/forms';
	import ProductSwitchButton from '../Buttons/ProductSwitchButton.svelte';
	import { localizeHref } from '$paraglide/runtime';
	import { m } from '$paraglide/messages';
</script>

<div class="border-base-200 border-r md:w-60">
	<div class="border-base-200 flex items-center border-b md:h-25 md:p-5">
		<HeaderLogo isDashboard={true} />
	</div>
	<div class="hidden md:block">
		<ProductSwitchButton />
	</div>
	<ul class="menu bg-grey-light h-full md:w-60">
		<li>
			<a href="/" class="active text-primary">
				<Home class="fw-dashboard-left-menu-icon" />
				<span class="hidden lg:inline">Dashboard</span>
			</a>
		</li>
		<li>
			<a href={localizeHref('/dashboard/caresync')}>
				<Laptop class="fw-dashboard-left-menu-icon" />
				<span class="hidden lg:inline">Dispositivos</span>
			</a>
			<ul class="hidden pb-2 lg:block lg:pl-4">
				<li>
					<a href={localizeHref('/dashboard/caresync')}>Todos os ativos</a>
				</li>
				<li><a href={localizeHref('/dashboard/caresync')}>Notebooks</a></li>
				<li><a href={localizeHref('/dashboard/caresync')}>Desktops</a></li>
				<hr class="text-base-200 relative -right-3 mt-2 mb-1 h-[1px] w-1/2" />
				<li><a href={localizeHref('/dashboard/caresync')}>Peças</a></li>
			</ul>
		</li>
		<li>
			<a href="/">
				<LifeBuoy class="fw-dashboard-left-menu-icon" />
				<span class="hidden lg:inline">Serviços</span>
			</a>
		</li>
		<li>
			<a href="/">
				<TriangleAlert class="fw-dashboard-left-menu-icon" />
				<div class="indicator">
					<span class="indicator-item badge badge-primary">32</span>
					<span class="hidden lg:inline">Alertas</span>
				</div>
			</a>
		</li>

		<li>
			<a href="/">
				<ClipboardMinus class="fw-dashboard-left-menu-icon" />
				<span class="hidden lg:inline">Relatórios</span>
			</a>
		</li>
		<li>
			<a href="/">
				<UsersRound class="fw-dashboard-left-menu-icon" />
				<span class="hidden lg:inline">Organização</span>
			</a>
			<ul class="hidden pb-2 pl-8 lg:block lg:pl-4">
				<li>
					<a href="/">Usuários</a>
				</li>
				<li><a href="/">Empresas / Clientes</a></li>
				<li><a href="/">Técnicos</a></li>
			</ul>
		</li>

		<!-- Marketplaces & Recycling -->
		<li class="border-base-200 mt-3 border-t pt-2">
			<a href="/">
				<Coins class="fw-dashboard-left-menu-icon" />
				<span class="hidden lg:inline">Compras</span>
			</a>
		</li>
		<li>
			<a href="/">
				<Recycle class="fw-dashboard-left-menu-icon" />
				<span class="hidden lg:inline">Reciclagem</span>
			</a>
		</li>

		<!-- <li class="mt-2 mb-0"><hr class="border-base-200 h-[1px] border-t" /></li> -->
		<li class="border-base-200 mt-3 border-t border-b py-2">
			<a href="/">
				<ReceiptText class="fw-dashboard-left-menu-icon" />
				<span class="hidden lg:inline">Faturamento</span>
			</a>
		</li>
		<li class="border-base-200 border-b py-2">
			<a href="/">
				<Bolt class="fw-dashboard-left-menu-icon" />
				<span class="hidden lg:inline">Minha conta</span>
			</a>
			<ul class="pb-2pl-8 hidden lg:block lg:pl-4">
				<li><a href="/">Configurações</a></li>
				<li>
					<form
						method="POST"
						action="?/logout"
						use:enhance={() => {
							// isSubmitting = true;
							toggleLoader();
							return async ({ update }) => {
								toggleLoader();
								// isSubmitting = false;
								update();
							};
						}}
					>
						<button type="submit" class="leading-4">Saír da conta</button>
					</form>
				</li>
			</ul>
		</li>
		<li class="border-base-200 border-b py-2">
			<a
				href="https://any.coop/AAgC1MK4YpFsTa9gfi822CM4eHbm83ovkrQQYDFnTvyDw2hN/tools-and-technologies"
				target="_blank"
				rel="nofollow"
			>
				<BookOpen class="fw-dashboard-left-menu-icon" />
				<span class="hidden lg:inline">{m.knowledgeBase()}</span>
			</a>
		</li>
		<li class="border-base-200 border-b py-2">
			<a href="/">
				<BookOpen class="fw-dashboard-left-menu-icon" />
				<span class="hidden lg:inline">Docs</span>
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
