<script lang="ts">
	import ServiceOrders from '$lib/components/caresync/ServiceOrders.svelte';
	import Slogan from '$lib/components/caresync/Slogan.svelte';
	import CtaContact from '$lib/components/CtaContact.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { ChevronDown } from '@lucide/svelte';

	let isExpanded = $state(false);
	const autoGestaoInitialItems = 4;
	const gerenciadoInitialItems = 4;

	// Monta os arrays diretamente com chamadas m.chave()
	const autoGestaoItems = [
		{ title: 'asdasd', description: 'asdasdasdasd asd asd asd asd' },
		{ title: m.careSyncAutoItem1Title(), description: m.careSyncAutoItem1Desc() },
		{ title: m.careSyncAutoItem2Title(), description: m.careSyncAutoItem2Desc() },
		{ title: m.careSyncAutoItem3Title(), description: m.careSyncAutoItem3Desc() },
		{ title: m.careSyncAutoItem4Title(), description: m.careSyncAutoItem4Desc() },
		{ title: m.careSyncAutoItem5Title(), description: m.careSyncAutoItem5Desc() },
		{ title: m.careSyncAutoItem6Title(), description: m.careSyncAutoItem6Desc() },
		{ title: m.careSyncAutoItem7Title(), description: m.careSyncAutoItem7Desc() }
	];

	const gerenciadoItems = [
		{ title: m.careSyncManagedItem1Title(), description: m.careSyncManagedItem1Desc() },
		{ title: m.careSyncManagedItem2Title(), description: m.careSyncManagedItem2Desc() },
		{ title: m.careSyncManagedItem3Title(), description: m.careSyncManagedItem3Desc() },
		{ title: m.careSyncManagedItem4Title(), description: m.careSyncManagedItem4Desc() },
		{ title: m.careSyncManagedItem5Title(), description: m.careSyncManagedItem5Desc() },
		{ title: m.careSyncManagedItem6Title(), description: m.careSyncManagedItem6Desc() },
		{ title: m.careSyncManagedItem7Title(), description: m.careSyncManagedItem7Desc() },
		{ title: m.careSyncManagedItem8Title(), description: m.careSyncManagedItem8Desc() }
	];
</script>

<Meta title={m.metaFinxTitle()} description={m.metaFinxDescription()} />

<Header
	background="commerce"
	opacity="0"
	titleLeft={m.project()}
	titleRight="Bagity"
	heroContent={m.heroContentBagity()}
/>

<!-- <section id="hero" class="hero bg-black py-16">
	<div class="container mx-auto px-4 text-center">
		<h1 class="mb-4 text-4xl font-bold">Bagity</h1>
		<p class="mb-6 text-xl">
			Impulsione seu e-commerce com Bagity: personalize design, UX e funcionalidades sob medida, com
			IA integrada, segurança escalável e checkout rápido via FinXPay. Planos a partir de R$99/mês
			ou Bagity Pro sem custos iniciais e suporte 24/7 dedicado.
		</p>
		<a href="#pricing" class="btn btn-primary">Ver Planos</a>
	</div>
</section>

<section id="features" class="py-12">
	<div class="container mx-auto px-4">
		<h2 class="mb-6 text-3xl font-semibold">Recursos Principais</h2>
		<ul class="grid gap-6 md:grid-cols-2">
			<li>📦 E-commerce sob medida: layout e fluxo de compra personalizados</li>
			<li>🤖 Conteúdo e recomendações gerados por IA segundo sua marca</li>
			<li>🔗 Integração via API com FinXPay para pagamentos rápidos</li>
			<li>⚙️ Customizações por tarefa (Básico) ou serviço completo (Pro)</li>
			<li>🔒 Segurança escalável e hospedagem robusta</li>
			<li>💬 Suporte dedicado 24/7</li>
		</ul>
	</div>
</section>

<section id="pricing" class="bg-black py-12">
	<div class="container mx-auto px-4">
		<h2 class="mb-6 text-3xl font-semibold">Comparativo de Planos</h2>
		<table class="w-full table-auto rounded-lg bg-black shadow">
			<thead>
				<tr class="bg-black">
					<th class="px-4 py-2">Recurso</th>
					<th class="px-4 py-2">Bagity Basic</th>
					<th class="px-4 py-2">Bagity Pro</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border px-4 py-2">Preço mensal</td>
					<td class="border px-4 py-2">R$99/mês + customizações avulsas</td>
					<td class="border px-4 py-2">3–10% por venda</td>
				</tr>
				<tr>
					<td class="border px-4 py-2">Personalização</td>
					<td class="border px-4 py-2">Por tarefa, sob demanda</td>
					<td class="border px-4 py-2">Design, dev e hospedagem completos</td>
				</tr>
				<tr>
					<td class="border px-4 py-2">IA & Conteúdo</td>
					<td class="border px-4 py-2">✓</td>
					<td class="border px-4 py-2">✓ + treinamento avançado</td>
				</tr>
				<tr>
					<td class="border px-4 py-2">Integração FinXPay</td>
					<td class="border px-4 py-2">✓</td>
					<td class="border px-4 py-2">✓</td>
				</tr>
				<tr>
					<td class="border px-4 py-2">Suporte & SLA</td>
					<td class="border px-4 py-2">E-mail e chat</td>
					<td class="border px-4 py-2">24/7 prioritário</td>
				</tr>
			</tbody>
		</table>
		<p class="mt-4 text-sm italic">
			Concorrente direto: <a href="https://trinio.co" target="_blank" class="text-blue-600"
				>Trinio</a
			> — checkout rápido, mas sem AI nem customização profunda.
		</p>
	</div>
</section>

<section id="dashboard" class="py-12">
	<div class="container mx-auto px-4">
		<h2 class="mb-6 text-3xl font-semibold">Visão Geral do Dashboard</h2>
		<div class="grid gap-4 md:grid-cols-3">
			<img src="/images/bagity-dashboard-1.png" alt="Dashboard de Vendas" class="rounded shadow" />
			<img src="/images/bagity-dashboard-2.png" alt="Análises de Produtos" class="rounded shadow" />
			<img
				src="/images/bagity-dashboard-3.png"
				alt="Configurações de Checkout"
				class="rounded shadow"
			/>
		</div>
	</div>
</section>

<section id="customization" class="bg-gray-50 py-12">
	<div class="container mx-auto px-4">
		<h2 class="mb-6 text-3xl font-semibold">Possibilidades de Customização</h2>
		<ul class="list-inside list-disc">
			<li>Temas e layouts exclusivos</li>
			<li>Fluxos de pagamento e checkout customizados</li>
			<li>Integrações adicionais via API (ERP, CRM, ERP)</li>
			<li>Regras de descontos e promoções avançadas</li>
			<li>Versões multilíngue e multimoeda</li>
		</ul>
	</div>
</section> -->

<main>
	<div
		class="max-w-fw border-x-base-200 relative container my-0 text-center md:mx-auto md:border-x"
	>
		<div id="know-more" class="flex flex-1 items-center justify-center">
			<div
				class="border-base-200 fw-border-b-divider md:fw-border-t-divider-dot flex w-full flex-col border-b
			            after:absolute after:right-[48%] md:flex-row md:after:top-12 md:after:right-[49.4%] md:after:content-['']"
			>
				<!-- Auto-gestão -->
				<div class="border-r-base-200 w-full py-3 text-xl md:w-1/2 md:border-r">
					<div class="mb-3 text-2xl">Bagity Basico</div>
					<div class="border-base-200 text-primary border-t pt-2 font-sans text-lg">
						R$50/mês fixo
					</div>
				</div>
				<!-- Gerenciado -->
				<div class="hidden w-full py-3 text-xl md:inline-block md:w-1/2">
					<div class="mb-3 text-2xl">
						Bagity <span
							class="bg-primary relative -top-[2px] ml-1 rounded-lg px-3 py-[2px] text-xl"
						>
							PRO+
						</span>
					</div>
					<div class="border-base-200 text-primary mt-1 border-t pt-2 font-sans text-lg">
						5–10% por venda
					</div>
				</div>
			</div>
		</div>

		<div class="flex flex-col justify-center md:flex-1 md:flex-row md:items-stretch">
			<!-- Você no controle -->
			<div
				class="border-r-base-200 flex w-full flex-col py-5 text-center md:w-1/2 md:border-r md:px-20 md:py-10"
			>
				<!-- <div class="text-primary font-sans text-lg font-bold uppercase">
					{m.careSyncYouControl()}
				</div> -->
				<div class="flex flex-grow flex-col">
					<div class="fw-cmp-box-content !px-10 !py-2 !pb-10">
						Plano que dá acesso completo à plataforma, com <span class="text-base-content"
							>loja pronta para vender</span
						>, integração de pagamentos via FinXPay + Todas as funcionalidades essenciais. A
						personalização é opcional, contratada por tarefa, ideal
						<span class="text-base-content">para quem quer controle de custos e autonomia</span>.
					</div>

					<!-- <ul class="flex-grow">
						{#each autoGestaoItems.slice(0, autoGestaoInitialItems) as item}
							<li><span class="font-bold">{item.title}</span> {item.description}</li>
						{/each}
						{#if isExpanded}
							{#each autoGestaoItems.slice(autoGestaoInitialItems) as item}
								<li><span class="font-bold">{item.title}</span> {item.description}</li>
							{/each}
						{/if}
					</ul> -->
					<!-- {#if autoGestaoItems.length > autoGestaoInitialItems}
						<button
							onclick={() => (isExpanded = !isExpanded)}
							class="text-primary hover:text-primary/70 mt-2 mb-3 flex items-center justify-center gap-2 transition-colors duration-200"
						>
							<span class="text-base font-medium">
								{isExpanded ? m.careSyncToggleLess() : m.careSyncToggleMore()}
							</span>
							<ChevronDown
								class="h-4 w-4 transition-transform duration-200 {isExpanded ? 'rotate-180' : ''}"
							/>
						</button>
					{/if} -->
					<a
						href={localizeHref('/sign-up')}
						class="bg-primary text-base-200 mt-3 mb-2 flex w-[90%] items-center justify-center gap-2 self-center rounded-2xl border px-5 py-2 font-sans font-bold uppercase transition-all duration-300 hover:opacity-50 md:mt-auto md:mb-0"
					>
						{m.startNow()}
					</a>
				</div>
			</div>

			<!-- Nós cuidamos de tudo -->
			<div class="mb-7 flex w-full flex-col items-start md:mb-0 md:w-1/2 md:px-20 md:py-10">
				<!-- Title for mobile -->
				<div class="border-base-200 w-full border-t py-3 text-xl md:hidden md:w-1/2">
					<div class="mb-3 text-2xl">
						Bagity <span
							class="bg-primary relative -top-[2px] ml-1 rounded-lg px-3 py-[2px] text-xl"
						>
							PRO+
						</span>
					</div>
					<div
						class="border-base-200 text-primary mt-1 border-t border-b pt-2 pb-2 font-sans text-lg md:border-b-0 md:pb-0"
					>
						5–10% por venda
					</div>
				</div>

				<div class="flex w-full flex-grow flex-col">
					<div class="fw-cmp-box-content !px-10 !py-2">
						Modelo comissionado de 5% a 10% por venda (dependendo do faturamento), pensado <span
							class="text-base-content">para quem quer um e-commerce premium</span
						>, sem se preocupar com tecnologia.
						<span class="text-base-content">Cuidamos de tudo</span> — Design, Desenvolvimento e Hospedagem
						— E todas personalizações incluídas.
					</div>

					<!-- <ul class="flex-grow">
						{#each gerenciadoItems.slice(0, gerenciadoInitialItems) as item}
							<li><span class="font-bold">{item.title}</span> {item.description}</li>
						{/each}
						{#if isExpanded}
							{#each gerenciadoItems.slice(gerenciadoInitialItems) as item}
								<li><span class="font-bold">{item.title}</span> {item.description}</li>
							{/each}
						{/if}
					</ul> -->
					<!-- {#if gerenciadoItems.length > gerenciadoInitialItems}
						<button
							onclick={() => (isExpanded = !isExpanded)}
							class="text-primary hover:text-primary/70 mt-2 mb-3 flex items-center justify-center gap-2 self-center transition-colors duration-200"
						>
							<span class="text-base font-medium">
								{isExpanded ? m.careSyncToggleLess() : m.careSyncToggleMore()}
							</span>
							<ChevronDown
								class="h-4 w-4 transition-transform duration-200 {isExpanded ? 'rotate-180' : ''}"
							/>
						</button>
					{/if} -->
					<a
						href={localizeHref('/sign-up')}
						class="bg-primary text-base-200 mt-3 mb-2 flex w-[90%] items-center justify-center gap-2 self-center rounded-2xl border px-5 py-2 font-sans font-bold uppercase transition-all duration-300 hover:opacity-50 md:mt-auto md:mb-0"
					>
						{m.startNow()}
					</a>
				</div>
			</div>
		</div>
	</div>

	<Slogan />
	<ServiceOrders />
	<CtaContact />
</main>

<style lang="postcss">
	@reference "tailwindcss";
	li {
		@apply text-lg;
		@apply relative my-3 pl-6 text-left font-sans text-[#8a8a8a] before:absolute before:left-0 before:text-xl before:text-green-500 before:content-['✓'];
	}
</style>
