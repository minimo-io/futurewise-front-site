<script lang="ts">
	import CtaContact from '$lib/components/CtaContact.svelte';

	// import Clients from '$lib/components/Home/Clients.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import { m } from '$paraglide/messages';
</script>

<Header
	background="astronaut"
	opacity="0"
	titleLeft={m.project()}
	titleRight="CareSync"
	heroContent={m.heroContentCareSync()}
/>

<main>
	<div
		class="max-w-fw border-x-base-200 relative container my-0 text-center md:mx-auto md:border-x"
	>
		<div class="flex flex-1 items-center justify-center">
			<div
				class="border-base-200 fw-border-b-divider md:fw-border-t-divider-dot flex w-full flex-col border-b after:absolute after:right-[48%] md:flex-row md:after:top-10 md:after:right-[49.4%] md:after:content-['']"
			>
				<div class="border-r-base-200 w-full border-r py-3 text-xl md:w-1/2">CareSync Básico</div>
				<div class="hidden w-full py-3 text-xl md:inline-block md:w-1/2">
					CareSync <span class="bg-primary ml-1 rounded-lg px-3 py-1">PRO+</span>
				</div>
			</div>
		</div>
		<div class="flex flex-col justify-center md:flex-1 md:flex-row">
			<div
				class="border-r-base-200 flex w-full flex-col py-5 text-center md:w-1/2 md:border-r md:px-20 md:py-10"
			>
				<ul class="">
					<li>Dashboard de Monitoramento das condições, uso e histórico dos ativos</li>
					<li>Criação e acompanhamento de ordens de serviço e ativos</li>
					<li>Tendências históricas</li>
					<li>Agendamento e Configuração de manutenções preventivas</li>
					<li>Ações sugeridas, controle de custos e mais 10 função para gestão de ativos</li>
					<li>Compras de equipmanento certificados com 5% OFF</li>
				</ul>
			</div>
			<div class="mb-7 flex w-full flex-col items-start md:w-1/2 md:px-20 md:py-10">
				<div class="border-base-200 mb-5 w-full border-t border-b py-3 text-xl md:hidden md:w-1/2">
					CareSync <span class="bg-primary ml-1 rounded-lg px-3 py-1">PRO+</span>
				</div>
				<ul class="">
					<li class="font-bold text-white">Tudo do plano básico</li>
					<li>Detecção de anomalias e previsão de falhas baseadas em IA</li>
					<li>Automatização de tarefas recorrentes de manutenção</li>
					<li>Um novo equipamento, na hora! *(So em algumas cidades)</li>
					<li>Snapshots para resets automático</li>
					<li>Assistência na baixa do equipamento e compras recomendadas, con 10% OFF</li>
				</ul>
			</div>
		</div>
	</div>
	<CtaContact />
</main>

<style lang="postcss">
	@reference "tailwindcss";
	li {
		@apply text-lg;
		@apply relative my-3 pl-6 text-left font-sans text-[#8a8a8a] before:absolute before:left-0 before:text-xl before:text-green-500 before:content-['✓'];
	}
</style>
