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

<div class="border-base-200 w-60 border-r">
	<div class="border-base-200 flex h-25 items-center border-b p-5">
		<HeaderLogo />
	</div>
	<div>
		<ProductSwitchButton />
	</div>
	<ul class="menu bg-grey-light h-full md:w-60">
		<li>
			<a href="/" class="active text-primary">
				<Home class="aspect-1 h-4" />
				<span class="hidden lg:inline">Dashboard</span>
			</a>
		</li>
		<li>
			<a href={localizeHref('/dashboard/caresync')}>
				<Laptop class="aspect-1 h-4" />
				<span class="hidden lg:inline">Dispositivos</span>
			</a>
			<ul class="hidden pb-2 lg:block lg:pl-4">
				<li>
					<a href={localizeHref('/dashboard/caresync')}>Todos os ativos</a>
				</li>
				<li><a href="/">Notebooks</a></li>
				<li><a href="/">Desktops</a></li>
			</ul>
		</li>
		<li>
			<a href="/">
				<LifeBuoy class="aspect-1 h-4" />
				<span class="hidden lg:inline">Serviços</span>
			</a>
		</li>
		<li>
			<a href="/">
				<Coins class="aspect-1 h-4" />
				<span class="hidden lg:inline">Compras</span>
			</a>
		</li>
		<li>
			<a href="/">
				<TriangleAlert class="aspect-1 h-4" />
				<span class="hidden lg:inline">Alertas</span>
			</a>
		</li>
		<li>
			<a href="/">
				<ClipboardMinus class="aspect-1 h-4" />
				<span class="hidden lg:inline">Relatórios</span>
			</a>
		</li>
		<li>
			<a href="/">
				<UsersRound class="aspect-1 h-4" />
				<span class="hidden lg:inline">Organizações</span>
			</a>
			<ul class="hidden pb-2 pl-8 lg:block lg:pl-4">
				<li>
					<a href="/">Usuários</a>
				</li>
				<li><a href="/">Empresas</a></li>
			</ul>
		</li>
		<li>
			<a href="/">
				<Recycle class="aspect-1 h-4" />
				<span class="hidden lg:inline">Reciclagem</span>
			</a>
		</li>

		<!-- <li class="mt-2 mb-0"><hr class="border-base-200 h-[1px] border-t" /></li> -->
		<li class="border-base-200 mt-3 border-t border-b py-2">
			<a href="/">
				<ReceiptText class="aspect-1 h-4" />
				<span class="hidden lg:inline">Faturamento</span>
			</a>
		</li>
		<li class="border-base-200 border-b py-2">
			<a href="/">
				<Bolt class="aspect-1 h-4" />
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
				<BookOpen class="aspect-1 h-4" />
				<span class="hidden lg:inline">{m.knowledgeBase()}</span>
			</a>
		</li>
		<li class="border-base-200 border-b py-2">
			<a href="/">
				<BookOpen class="aspect-1 h-4" />
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
