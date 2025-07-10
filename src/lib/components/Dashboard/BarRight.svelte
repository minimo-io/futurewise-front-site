<script>
	import {
		Bolt,
		BookOpen,
		ClipboardMinus,
		Home,
		Laptop,
		LifeBuoy,
		Puzzle,
		ReceiptText,
		Recycle,
		Target,
		TriangleAlert,
		UsersRound,
		Zap
	} from '@lucide/svelte';
	import HeaderLogo from '../Header/HeaderLogo.svelte';
	import { toggleLoader } from '$stores/Loader.state.svelte';
	import { enhance } from '$app/forms';
	import ProductSwitchButton from '../Buttons/ProductSwitchButton.svelte';
	import { localizeHref } from '$paraglide/runtime';
</script>

<div class="border-base-200 w-60 border-r">
	<div class="border-base-200 flex h-25 items-center border-b p-5">
		<HeaderLogo />
	</div>
	<div>
		<ProductSwitchButton />
	</div>
	<ul class="menu bg-grey-light h-full w-60">
		<li>
			<a href="/" class="active text-primary">
				<Home class="aspect-1 h-4" />
				Dashboard
			</a>
		</li>
		<li>
			<a href={localizeHref('/dashboard/caresync')}>
				<Laptop class="aspect-1 h-4" />
				Dispositivos
			</a>
			<ul class="pb-2">
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
				Serviços
			</a>
		</li>
		<li>
			<a href="/">
				<TriangleAlert class="aspect-1 h-4" />
				Alertas
			</a>
		</li>
		<li>
			<a href="/">
				<ClipboardMinus class="aspect-1 h-4" />
				Relatórios
			</a>
		</li>
		<li>
			<a href="/">
				<UsersRound class="aspect-1 h-4" />
				Organizações
			</a>
			<ul class="pb-2">
				<li>
					<a href="/">Usuários</a>
				</li>
				<li><a href="/">Empresas</a></li>
			</ul>
		</li>
		<li>
			<a href="/">
				<Recycle class="aspect-1 h-4" />
				Reciclagem
			</a>
		</li>

		<!-- <li class="mt-2 mb-0"><hr class="border-base-200 h-[1px] border-t" /></li> -->
		<li class="border-base-200 mt-3 border-t border-b py-2">
			<a href="/">
				<ReceiptText class="aspect-1 h-4" />
				Faturamento
			</a>
		</li>
		<li class="border-base-200 border-b py-2">
			<a href="/">
				<Bolt class="aspect-1 h-4" />
				Minha conta
			</a>
			<ul class="pb-2">
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
			<a href="/">
				<BookOpen class="aspect-1 h-4" />
				Docs
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
