<script lang="ts">
	// import { Key, KeySquare } from '@lucide/svelte';
	import TitleSection from '../TitleSection.svelte';
</script>

<section class="max-w-futurewise relative mx-auto my-10">
	<div class="container mx-auto">
		<!-- Subtitle -->
		<TitleSection titleLeft="Developers" titleRight="Ready" />

		<div class="grid grid-cols-3 gap-12">
			<div class="col-span-1 mt-7">
				<h3 class="mb-2 text-xl font-bold">Plataforma unificada,<br />APIs modernas.</h3>
				<p class="text-secondary mb-4 text-xl leading-6">
					Além de nossos dashboards, a Futurewise fornece uma interface única e elegante que abstrai
					toda a complexidade das integrações empresariais.
				</p>
				<p class="text-secondary mb-4 text-xl leading-6">
					Com APIs prontas para integrar cada um de nossos produtos no seu próprio sistema.
				</p>
				<div class="flex flex-row items-center">
					<button class="fw-button !my-1 mr-4"> Documentação </button>
					<!-- <button class="text-primary border-base-content !my-1 flex flex-row items-center">
						<div>
							<KeySquare class="h-4" />
						</div>
						<div>Obtenha sua API key</div>
					</button> -->
				</div>
			</div>

			<div class="relative col-span-2 rounded-md border bg-black p-4">
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

	<div class="absolute -top-[15%] -left-[12%] scale-75 opacity-30">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>
</section>
