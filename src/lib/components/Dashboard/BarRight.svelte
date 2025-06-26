<script>
	import { Home, Target, Zap } from '@lucide/svelte';
	import HeaderLogo from '../Header/HeaderLogo.svelte';
</script>

<div class="border-base-200 w-60 border-r">
	<div class="border-base-200 flex h-25 items-center border-b p-5">
		<HeaderLogo />
	</div>
	<ul class="menu bg-grey-light h-full w-60">
		<li>
			<a href="/">
				<Home class="aspect-1 h-4" />
				Dashboard
			</a>
			<ul>
				<li><a href="/" class="active text-primary">Todos os ativos</a></li>
				<li><a href="/">Notebooks</a></li>
				<li><a href="/">Desktops</a></li>
			</ul>
		</li>
		<li>
			<a href="/">
				<Target class="aspect-1 h-4" />
				Service Desk
			</a>
		</li>
		<li>
			<a href="/">
				<Zap class="aspect-1 h-4" />
				Ações Urgentes
			</a>
		</li>
	</ul>
</div>

<style lang="postcss">
	@reference "tailwindcss";
	ul > li > a {
		@apply text-lg font-bold;
	}
	.menu ul > li > a {
		@apply py-1 text-base font-normal;
	}
	.menu ul > li > a.active {
		@apply font-bold;
	}
</style>
