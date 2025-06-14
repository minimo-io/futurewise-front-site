<script>
	import Hr from '../Hr.svelte';
</script>

<div
	class="border-base-200 relative mx-(--fw-app-margin) flex flex-1 items-center justify-center border-t"
>
	<div
		class="border-base-200 flex w-full flex-col justify-center text-center after:absolute after:right-[48%] md:after:top-10 md:after:right-[49.4%] md:after:content-['']"
	>
		<div id="know-more" class="max-w-fw mx-auto w-full pt-10 pb-1">
			<h2 class="mx-auto w-[90%] font-sans text-2xl font-semibold md:w-1/2 md:text-3xl">
				Pagamentos globais em tempo real com segurança e foco na América Latina
			</h2>
			<p class="text-secondary mx-auto mt-3 w-full font-sans text-xl md:w-[70%] md:text-2xl">
				Receba via PIX no Brasil e liquide em USD/USDT/Bitcoin no exterior, no instante, com 100% de
				compliance
			</p>
		</div>

		<!-- Divider -->
		<div class="mx-auto w-fit">
			<img src="/bgs/square-divider.svg" alt="divider" class="mt-3 w-[70%]" />
		</div>

		<div class="max-w-fw relative mx-auto w-full pt-5 pb-1">
			<Hr />
			<h2 class="mx-auto w-[90%] font-sans text-2xl font-semibold">
				Um exemplo de cómo FinXPay pode ajudar seu negócio
				<!-- Exemplo -->
			</h2>
			<p class="text-secondary mx-auto mt-2 w-full font-sans text-xl md:w-[70%]">
				Uma plataforma colombiana de cursos online vende para alunos brasileiros. Com a FinX:
			</p>
			<ol class="text-secondary mx-auto my-5 w-[90%] font-sans text-xl md:w-1/2">
				<li>Aluno paga R$ 300 via PIX.</li>
				<li>Plataforma converte para USDT (≈ $60) automaticamente.</li>
				<li>Valor é liquidado na conta da empresa na Colômbia no instante, sem taxas ocultas.</li>
			</ol>
		</div>

		<div
			class="fw-promo-li max-w-fw mx-auto mt-5 mb-5 flex flex-col justify-start gap-5 md:mb-10 md:flex-row md:justify-around md:gap-20"
		>
			<Hr />
			<!-- Container: dark background with white text -->
			<div
				class="border-base-200 max-w-fw flex flex-1 items-center justify-center border-t md:border-t-0"
			>
				<!-- Price line: R$, “50” large, and “/hora” -->
				<!-- <div
					class="mt-3 mb-5 flex items-baseline justify-center space-x-2 md:my-5 md:justify-start"
				>
					<span class="-left-10 self-start font-sans text-xl font-medium">R$</span>
					<span class="font-sans text-5xl font-bold md:text-6xl">0,5</span>
					<span class="text-secondary self-center font-sans text-3xl font-medium">/req</span>
				</div> -->

				<!-- List of features underneath -->
				<!-- <ul class="text-base-content mt-4 ml-7 hidden font-sans text-base md:block"> -->
				<ul class="text-secondary space-y-[10px] pt-5 text-left font-sans text-lg md:mt-6 md:pt-0">
					<li>Descontos por volume</li>
					<li>Settlement instantâneo 24/7</li>
					<li>Transparencia total, verificável</li>
					<li>Conformidade regulatória</li>
					<li>Moeda Local, Stablecoins ou Bitcoin</li>
					<li>Analisis de transação via IA</li>

					<li class="block md:hidden">Documentação descomplicada</li>
					<li class="block md:hidden">Checkout customizáveis</li>
				</ul>
			</div>
			<!-- Container -->
			<div
				class="border-base-200 max-w-fw flex-1 items-center justify-center border-t md:flex md:border-t-0"
			>
				<!-- List of features underneath -->
				<ul
					class="text-secondary hidden space-y-[10px] pt-5 text-left font-sans text-lg md:mt-6 md:block md:pt-0"
				>
					<!-- <li class="block md:hidden">Descontos por volume</li>
					<li class="block md:hidden">Settlement instantâneo</li>
					<li class="block md:hidden">Moeda Local, Stablecoins ou Bitcoin</li>
					<li class="block md:hidden">Conformidade regulatória</li> -->

					<li>Documentação descomplicada</li>
					<li>Segurança de dados</li>
					<li>Resolução de disputas</li>
					<li>Checkout customizáveis</li>
					<li>Menor taxa de transação</li>
					<li>API e Dashboard unificados</li>
				</ul>
			</div>
		</div>
		<div
			class="border-r-base-200 absolute -bottom-[1px] left-1/2 hidden h-[130px] w-[1px] -translate-x-1/2 transform border-r md:block"
		></div>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";
	.fw-promo-li li {
		@apply relative my-3 pl-6 text-left font-sans text-[#8a8a8a] before:absolute before:left-0 before:text-xl before:text-green-500 before:content-['✓'];
	}
</style>
