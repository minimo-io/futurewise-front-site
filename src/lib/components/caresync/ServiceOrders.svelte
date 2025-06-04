<div
	class="border-base-200 relative mx-(--fw-app-margin) flex flex-1 items-center justify-center border-t"
>
	<div
		class="border-base-200 flex w-full flex-col justify-center text-center after:absolute after:right-[48%] md:after:top-10 md:after:right-[49.4%] md:after:content-['']"
	>
		<div class="max-w-fw mx-auto w-full pt-10 pb-1">
			<h2 class="font-sans text-3xl font-semibold">Ordens de serviço</h2>
			<p class="text-secondary mx-auto mt-3 w-full font-sans text-xl md:w-[70%]">
				Monitore seus ativos físicos de TI em tempo real, detecte problemas preditivamente com nossa
				IA, acompanhe tendências de custos, e <span class="text-base-content"
					>quando tiver falhas contrate ordens de serviço de manutenção sob demanda</span
				>.
			</p>
		</div>

		<div
			class="max-w-fw mx-auto mt-5 mb-5 flex flex-col justify-start gap-5 md:mb-10 md:flex-row md:justify-around md:gap-20"
		>
			<!-- Container: dark background with white text -->
			<div class="max-w-xs flex-1">
				<!-- Price line: R$, “50” large, and “/hora” -->
				<div
					class="mt-3 mb-5 flex items-baseline justify-center space-x-2 md:my-5 md:justify-start"
				>
					<span class="-left-10 self-start font-sans text-xl font-medium">R$</span>
					<span class="font-sans text-5xl font-bold md:text-6xl">50</span>
					<span class="text-secondary self-center font-sans text-3xl font-medium">/hora</span>
				</div>

				<!-- List of features underneath -->
				<ul class="text-base-content mt-4 ml-7 hidden font-sans text-base md:block">
					<li>Taxas transparentes</li>
					<li>Personalizações</li>
					<li>Descontos por volume</li>
					<li>Acompanhamento online</li>
				</ul>
			</div>
			<!-- Container -->
			<div
				class="border-base-200 flex max-w-xs flex-1 items-center justify-center border-t md:border-t-0"
			>
				<!-- List of features underneath -->
				<ul class="text-secondary space-y-[10px] pt-5 text-left font-sans text-lg md:mt-6 md:pt-0">
					<li class="block md:hidden">Personalizações</li>
					<li class="block md:hidden">Descontos por volume</li>
					<li class="block md:hidden">Acompanhamento online</li>

					<li>Taxas transparentes <br />Controladas pelo Dashboard</li>
					<li>Resolução de emergências remota para evitar interrupção do serviço</li>
					<li>Controle de custos e tendencias históricas</li>
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
	li {
		@apply text-lg;
		@apply relative my-3 pl-6 text-left font-sans text-[#8a8a8a] before:absolute before:left-0 before:text-xl before:text-green-500 before:content-['✓'];
	}
</style>
