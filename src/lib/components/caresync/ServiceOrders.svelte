<div
	class="border-base-200 relative mx-(--fw-app-margin) flex flex-1 items-center justify-center border-t"
>
	<div
		class="border-base-200 flex w-full flex-col justify-center text-center after:absolute after:right-[48%] md:after:top-10 md:after:right-[49.4%] md:after:content-['']"
	>
		<div class="max-w-fw mx-auto w-full pt-10 pb-1">
			<h2 class="font-sans text-3xl font-semibold">Ordens de serviço</h2>
			<p class="text-secondary mx-auto mt-3 w-[70%] font-sans text-xl">
				<!-- Ajudamos empresas rodar seu negócios sem que TI atrapalhe. -->

				<!-- <br />Somos uma empresa de manutenção preditiva, monitoramento em tempo real e gestão de
				ativos físicos
				<br />Opere sem dores de cabeca -->
			</p>
			<p class="text-secondary mx-auto mt-3 w-[70%] font-sans text-xl">
				Monitore seus ativos físicos de TI em tempo real, detecte problemas preditivamente com nossa
				IA, acompanhe tendências de custos, e contrate ordens de serviço de manutenção sob demand.
			</p>
		</div>

		<div class="max-w-fw mx-auto mt-5 mb-10 flex flex-row justify-around gap-20">
			<!-- Container: dark background with white text -->
			<div class="max-w-xs flex-1">
				<!-- Price line: R$, “50” large, and “/hora” -->
				<div class="flex items-baseline space-x-2">
					<span class="-left-10 self-start font-sans text-xl font-medium">R$</span>
					<span class="font-sans text-6xl font-bold">50</span>
					<span class="text-secondary self-center font-sans text-4xl font-medium">/hora</span>
				</div>

				<!-- List of features underneath -->
				<ul class="text-base-content mt-4 ml-7 text-left font-sans text-base">
					<li>Taxa fixa</li>
					<li>Personalizações</li>
					<li>Descontos por volume</li>
				</ul>
			</div>
			<div class="flex max-w-xs flex-1 items-center justify-center">
				<!-- List of features underneath -->
				<ul class="text-secondary space-y-[10px] text-left font-sans text-lg">
					<li>Taxa previsível, transparencia <br />Controlada no Dashboard</li>
					<li>Resolução de emergências remota para evitar interrupção do serviço</li>
				</ul>
			</div>
		</div>
		<div
			class="border-r-base-200 absolute -bottom-[1px] left-1/2 h-[130px] w-[1px] -translate-x-1/2 transform border-r"
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
