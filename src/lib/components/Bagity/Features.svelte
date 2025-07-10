<script lang="ts">
	// Exemplo de função de tradução
	import { m } from '$paraglide/messages';
	import { Product } from '$types/products.types';
	import Pill from '../Pill.svelte';

	let { product = Product.BAGITY }: { product?: Product } = $props();
</script>

<div class="max-w-fw mx-auto py-10 md:px-10 md:py-16">
	<!-- Grid container -->
	<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
		{#if product == Product.BAGITY}
			<!-- Tecnologia de ponta -->
			<div class="feature-item">
				<div class="flex-shrink-0">
					<img src="/feature-1.svg" alt="feature-1" />
				</div>
				<div class="feature-item-desc">
					<h3 class="text-base-content">{m.bagityFeature1Title()}</h3>
					<p class="text-secondary">{@html m.bagityFeature1Desc()}</p>
				</div>
			</div>

			<!-- Soluções por segmento -->
			<div class="feature-item">
				<div class="flex-shrink-0">
					<img src="/feature-4.svg" alt="feature-4" />
				</div>
				<div class="feature-item-desc">
					<h3 class="text-base-content">{m.bagityFeature2Title()}</h3>
					<p class="text-secondary">{@html m.bagityFeature2Desc()}</p>
				</div>
			</div>

			<!-- AutoCrm -->
			<div class="feature-item">
				<div class="flex-shrink-0">
					<img src="/feature-8.svg" alt="feature-8" />
				</div>
				<div class="feature-item-desc">
					<h3 class="text-base-content relative">
						<div class="absolute -top-6 -right-1 scale-80 md:-top-3 md:right-5">
							<Pill color="primary-transparent" text={m.prototyping()} customCss="!px-3" />
						</div>
						{m.bagityFeature8Title()}
					</h3>
					<p class="text-secondary">
						{@html m.bagityFeature8Desc()}
					</p>
				</div>
			</div>

			<!-- Foco em atendimento premium -->
			<div class="feature-item">
				<div class="flex-shrink-0">
					<img src="/feature-3.svg" alt="feature-3" />
				</div>
				<div class="feature-item-desc">
					<h3 class="text-base-content">{m.bagityFeature5Title()}</h3>
					<p class="text-secondary">{@html m.bagityFeature5Desc()}</p>
				</div>
			</div>

			<!-- Headless -->
			<div class="feature-item">
				<div class="flex-shrink-0">
					<img src="/feature-7.svg" alt="feature-7" />
				</div>
				<div class="feature-item-desc">
					<h3 class="text-base-content">{m.bagityFeature7Title()}</h3>
					<p class="text-secondary">
						{@html m.bagityFeature7Desc()}
					</p>
				</div>
			</div>

			<!-- Alta indexação no Google e LLMs -->
			<div class="feature-item">
				<div class="flex-shrink-0">
					<img src="/feature-5.svg" alt="feature-5" />
				</div>
				<div class="feature-item-desc">
					<h3 class="text-base-content">{m.bagityFeature4Title()}</h3>
					<p class="text-secondary">{@html m.bagityFeature4Desc()}</p>
				</div>
			</div>

			<!-- Integrações sob medida -->
			<div class="feature-item">
				<div class="flex-shrink-0">
					<img src="/feature-2.svg" alt="feature-2" />
				</div>
				<div class="feature-item-desc">
					<h3 class="text-base-content">{m.bagityFeature3Title()}</h3>
					<p class="text-secondary">{@html m.bagityFeature3Desc()}</p>
				</div>
			</div>

			<!-- Checkout express -->
			<div class="feature-item">
				<div class="flex-shrink-0">
					<img src="/feature-6.svg" alt="feature-6" />
				</div>
				<div class="feature-item-desc">
					<h3 class="text-base-content">{m.bagityFeature6Title()}</h3>
					<p class="text-secondary">{@html m.bagityFeature6Desc()}</p>
				</div>
			</div>
		{:else if product == Product.CARESYNC}
			<!-- Alugue -->
			<div class="feature-item">
				<div class="flex-shrink-0">
					<img src="/feature-5.svg" alt="feature-5" />
				</div>
				<div class="feature-item-desc">
					<h3 class="text-base-content">{'Zero investimento inicial'}</h3>
					<p class="text-secondary">
						{'Sem grande desembolso inicial. Sem consumo de linha de crédito. Ao alugar você recebe muito além dos equipamentos!'}
					</p>
				</div>
			</div>

			<!-- Manutencao -->
			<div class="feature-item">
				<div class="flex-shrink-0">
					<img src="/feature-tool.svg" alt="feature-4" />
				</div>
				<div class="feature-item-desc">
					<h3 class="text-base-content">Manutenção inclusa</h3>
					<p class="text-secondary">
						{'Esqueça de gastos de manutenção, perda de produto ou acionamento de garantia. Nós fazemos tudo e disponibilizamos um equipamento sempre pronto.'}
					</p>
				</div>
			</div>

			<!-- Atendimento especializado -->
			<div class="feature-item">
				<div class="flex-shrink-0">
					<img src="/feature-headset.svg" alt="feature-4" />
				</div>
				<div class="feature-item-desc">
					<h3 class="text-base-content">Atendimento especializado</h3>
					<p class="text-secondary">
						{'Suporte especializado sem custo. Resolução de problemas na empresa ou em home office, remoto ou presencial.'}
					</p>
				</div>
			</div>

			<!-- Monitoramento 24hrs -->
			<div class="feature-item">
				<div class="flex-shrink-0">
					<img src="/feature-health.svg" alt="feature-4" />
				</div>
				<div class="feature-item-desc">
					<h3 class="text-base-content">Monitoramento 24hrs</h3>
					<p class="text-secondary">
						{'Monitoramento, detecção de anomalias e previsão de falhas com nossa IA treinada pela Futurewise para evitar interrupções e gerar alertas preventivas.'}
					</p>
				</div>
			</div>

			<!-- Dashboard -->
			<div class="feature-item">
				<div class="flex-shrink-0">
					<img src="/feature-dashboard.svg" alt="feature-4" />
				</div>
				<div class="feature-item-desc">
					<h3 class="text-base-content">Dashboards de acompanhamento</h3>
					<p class="text-secondary">
						{'Acompanhe nossa gestão através de nossos dashboards, gere relatórios de custos, serviços e performance. Gostamos da transparência total!'}
					</p>
				</div>
			</div>

			<!-- Servico de continuidade  -->
			<div class="feature-item">
				<div class="flex-shrink-0">
					<img src="/feature-8.svg" alt="feature-4" />
				</div>
				<div class="feature-item-desc">
					<h3 class="text-base-content">Continuidade inteligente</h3>
					<p class="text-secondary">
						{'Receba um equipamento substituto imediatamente enquanto o outro estiver em manutenção, garantindo que suas operações nunca parem!'}
					</p>
				</div>
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.feature-item {
		@apply flex items-center space-x-6;
	}
	.feature-item-desc {
		@apply flex-1;
	}
	.feature-item-desc h3 {
		@apply mb-1 font-sans text-[18px] font-black md:mb-0 md:text-[22px];
	}
	.feature-item-desc p {
		@apply font-sans text-sm md:text-base;
	}
	.feature-item > div > img {
		@apply aspect-square h-[60px] md:h-[90px];
	}
</style>
