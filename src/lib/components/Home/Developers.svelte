<script lang="ts">
	import TitleSection from '../TitleSection.svelte';
</script>

<section class="max-w-futurewise relative mx-auto my-16">
	<div class="container mx-auto">
		<!-- Subtitle -->
		<TitleSection titleLeft="Developers" titleRight="Ready" />

		<div class="grid grid-cols-3 gap-12">
			<div class="col-span-1 mt-7">
				<h3 class="mb-2 text-xl font-bold">Plataforma unificada,<br />APIs modernas.</h3>
				<p class="text-secondary mb-4 text-lg">
					Além de nossos dashboards, a Futurewise fornece uma interface única e elegante que abstrai
					toda a complexidade das integrações empresariais.
				</p>
				<p class="text-secondary mb-4 text-lg">
					Com APIs prontas para integrar cada um de nossos produtos no seu próprio sistema.
				</p>
				<div class="flex space-x-4">
					<button
						class="hover:bg-opacity-10 rounded-full border border-white px-4 py-2 text-sm font-medium text-white hover:bg-white"
					>
						Documentação
					</button>
					<button
						class="hover:bg-opacity-10 rounded-full border border-white px-4 py-2 text-sm font-medium text-white hover:bg-white"
					>
						<span class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="mr-2 h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
								/>
							</svg>
							Obtenha sua API key
						</span>
					</button>
				</div>
			</div>

			<div class="relative col-span-2 rounded-md bg-gray-900 p-4">
				<div class="mb-4 flex space-x-2">
					<span class="h-3 w-3 rounded-full bg-red-500"></span>
					<span class="h-3 w-3 rounded-full bg-yellow-500"></span>
					<span class="h-3 w-3 rounded-full bg-green-500"></span>
				</div>

				<div class="mb-4 flex">
					<button class="mr-2 rounded-t-md bg-gray-800 px-3 py-1 text-sm text-white">Node.js</button
					>
					<button class="mr-2 rounded-t-md bg-gray-700 px-3 py-1 text-sm text-white">Python</button>
					<button class="rounded-t-md bg-gray-700 px-3 py-1 text-sm text-white">Curl</button>
				</div>

				<pre class="overflow-x-auto text-sm text-gray-300"></pre>

				<div class="mt-4 text-right text-xs text-gray-400">
					Confira também nossos temas de editor para VSCode e Zed
				</div>
			</div>
		</div>
	</div>

	<div class="absolute -top-[30%] -left-[12%] scale-75 opacity-30">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>
</section>
