<script lang="ts">
	// Exemplo de função de tradução
	import { m } from '$paraglide/messages';
</script>

<div class="max-w-fw mx-auto py-10 md:px-10 md:py-16">
	<!-- Grid container -->
	<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
		<!-- Tecnologia de ponta -->
		<div class="feature-item">
			<div class="flex-shrink-0">
				<img src="/feature-1.svg" alt="feature-1" />
			</div>
			<div class="feature-item-desc">
				<h3 class="text-base-content">{m.bagityFeature1Title()}</h3>
				<p class="text-secondary">{m.bagityFeature1Desc()}</p>
			</div>
		</div>

		<!-- Soluções por segmento -->
		<div class="feature-item">
			<div class="flex-shrink-0">
				<img src="/feature-4.svg" alt="feature-4" />
			</div>
			<div class="feature-item-desc">
				<h3 class="text-base-content">{m.bagityFeature2Title()}</h3>
				<p class="text-secondary">{m.bagityFeature2Desc()}</p>
			</div>
		</div>

		<!-- Integrações sob medida -->
		<div class="feature-item">
			<div class="flex-shrink-0">
				<img src="/feature-2.svg" alt="feature-2" />
			</div>
			<div class="feature-item-desc">
				<h3 class="text-base-content">{m.bagityFeature3Title()}</h3>
				<p class="text-secondary">{m.bagityFeature3Desc()}</p>
			</div>
		</div>

		<!-- Alta indexação no Google e LLMs -->
		<div class="feature-item">
			<div class="flex-shrink-0">
				<img src="/feature-5.svg" alt="feature-5" />
			</div>
			<div class="feature-item-desc">
				<h3 class="text-base-content">{m.bagityFeature4Title()}</h3>
				<p class="text-secondary">{m.bagityFeature4Desc()}</p>
			</div>
		</div>

		<!-- Foco em atendimento premium -->
		<div class="feature-item">
			<div class="flex-shrink-0">
				<img src="/feature-3.svg" alt="feature-3" />
			</div>
			<div class="feature-item-desc">
				<h3 class="text-base-content">{m.bagityFeature5Title()}</h3>
				<p class="text-secondary">{m.bagityFeature5Desc()}</p>
			</div>
		</div>

		<!-- Checkout express -->
		<div class="feature-item">
			<div class="flex-shrink-0">
				<img src="/feature-6.svg" alt="feature-6" />
			</div>
			<div class="feature-item-desc">
				<h3 class="text-base-content">{m.bagityFeature6Title()}</h3>
				<p class="text-secondary">{m.bagityFeature6Desc()}</p>
			</div>
		</div>
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
		@apply aspect-square h-[75px] md:h-[90px];
	}
	.col-span-full {
		@apply lg:col-span-2;
	}
</style>
