<script lang="ts">
	import CtaContact from '$lib/components/CtaContact.svelte';

	// import Clients from '$lib/components/Home/Clients.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
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
				<div class="border-r-base-200 w-full py-3 text-xl md:w-1/2 md:border-r">
					<div class="mb-3">CareSync Básico</div>
					<div class="border-base-200 text-primary border-t pt-2 font-sans text-base font-bold">
						GRATUITO
					</div>
				</div>
				<div class="hidden w-full py-3 text-xl md:inline-block md:w-1/2">
					<div class="mb-3">
						CareSync <span class="bg-primary ml-1 rounded-lg px-3 py-[2px]">PRO+</span>
					</div>
					<div class="border-base-200 text-primary mt-1 border-t pt-2 font-sans text-base">
						<span class="font-bold">R$10</span>/mês <span class="text-secondary">x</span> EQUIPAMENTO
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col justify-center md:flex-1 md:flex-row">
			<div
				class="border-r-base-200 flex w-full flex-col py-5 text-center md:w-1/2 md:border-r md:px-20 md:py-10"
			>
				<ul class="">
					<li>Dashboard de gestão de ativos físicos de TI</li>
					<li>Criação de ordens de serviço sob demanda</li>
					<li>Ações sugeridas, controle de custos</li>
					<li>Acompanhamento de ordens de serviço</li>
					<li>Tendências históricas de custos de TI</li>
					<li>Automatização de tarefas recorrentes de manutenção</li>
					<li>Agendamento e Configuração de Manutenções Preventivas sob demanda</li>
					<li>Compras de equipmanento certificados com descontos</li>
				</ul>

				<a
					href={localizeHref('/sign-up')}
					class="bg-primary text-base-200 mt-3 mb-2 flex w-[90%] items-center justify-center gap-2 self-center rounded-2xl border px-5 py-2 transition-all duration-300 md:mb-0"
				>
					<span
						class=" text-center !font-sans !text-base font-bold tracking-wider uppercase md:!text-base"
						>{m.startNow()}</span
					>
				</a>
			</div>
			<div class="mb-7 flex w-full flex-col items-start md:w-1/2 md:px-20 md:py-10">
				<div class="border-base-200 mb-5 w-full border-t border-b py-3 text-xl md:hidden md:w-1/2">
					<div class="mb-3">
						CareSync <span class="bg-primary ml-1 rounded-lg px-3 py-1">PRO+</span>
					</div>
					<div class="border-base-200 text-primary mt-1 border-t pt-3 font-sans text-base italic">
						R$10/mês <span class="text-secondary">x</span> EQUIPAMENTO
					</div>
				</div>
				<ul class="">
					<li class="text-secondary font-bold">Tudo do plano básico, mais:</li>
					<li>Monitoramento em Tempo Real de Ativos TI</li>
					<li>Detecção Automática de Anomalias e Previsão de falhas baseadas em IA</li>

					<li>
						Quebrou o note? Enviamos um novo equipamento, na hora, até o concerto finalizar! *(So em
						algumas cidades)
					</li>
					<li>Snapshots para resets automático</li>
					<li>Assistência técnica online 24/7</li>
					<li>Baixa programada de equipamento antigos e compras certificadas, con 10% OFF</li>
				</ul>
				<a
					href={localizeHref('/sign-up')}
					class="bg-primary text-base-200 mt-4 flex w-[90%] items-center justify-center gap-2 self-center rounded-2xl border px-5 py-2 transition-all duration-300"
				>
					<span
						class=" text-center !font-sans !text-base font-bold tracking-wider uppercase md:!text-base"
						>{m.startNow()}</span
					>
				</a>
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
