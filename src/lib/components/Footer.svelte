<!-- Footer -->
<script lang="ts">
	import { FlaskConical } from '@lucide/svelte';
</script>

<footer class=" border-t border-gray-800 bg-white px-6 pt-12 pb-6 md:px-12 lg:px-16">
	<div class="max-w-futurewise container mx-auto">
		<div class="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
			<div>
				<h3 class="mb-4 font-bold text-black">Produtos</h3>
				<ul class="space-y-2">
					<li><a href="/" class="text-gray-400 hover:text-white">CoreSync</a></li>
					<li><a href="/" class="text-gray-400 hover:text-white">Bagity</a></li>
					<li><a href="/" class="text-gray-400 hover:text-white">Scorp</a></li>
					<li><a href="/" class="text-gray-400 hover:text-white">DropOn</a></li>
				</ul>
			</div>

			<div>
				<h3 class="mb-4 font-bold text-black">Ventures</h3>
				<ul class="space-y-2">
					<li><a href="/" class="text-gray-400 hover:text-white">ViiVPay</a></li>
					<li><a href="/" class="text-gray-400 hover:text-white">Braday</a></li>
				</ul>
			</div>

			<div>
				<h3 class="mb-4 font-bold text-black">Social</h3>
				<ul class="space-y-2">
					<li><a href="/" class="text-gray-400 hover:text-white">Github</a></li>
					<li><a href="/" class="text-gray-400 hover:text-white">LinkedIn</a></li>
					<li><a href="/" class="text-gray-400 hover:text-white">Contato</a></li>
					<li><a href="/" class="text-gray-400 hover:text-white">Nostr</a></li>
				</ul>
			</div>

			<div>
				<h3 class="mb-4 flex items-center font-bold text-black">
					<FlaskConical class="mr-1 h-4" />
					Lab
				</h3>
				<ul class="space-y-2">
					<li><a href="/" class="text-gray-400 hover:text-white">Sobre Nós</a></li>
					<li><a href="/" class="text-gray-400 hover:text-white">Experimentos</a></li>
					<li><a href="/" class="text-gray-400 hover:text-white">Ferramentas</a></li>
					<li><a href="/" class="text-gray-400 hover:text-white">Open Source</a></li>
				</ul>
			</div>
		</div>

		<div class="flex flex-col items-center justify-between md:flex-row">
			<p class="mb-4 text-sm text-gray-500 md:mb-0">© 2025, Futurewise Inc.</p>

			<div class="flex items-center">
				<div class="bg-fw-red mr-2 p-2">
					<span class="text-lg font-bold text-white">FW</span>
				</div>
				<span class="text-sm text-red-500">Futurewise Innovation Laboratories</span>
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
	@reference "tailwindcss";
	h3 {
		@apply font-black tracking-wider;
	}
	ul > li > a {
		@apply text-[#8A8A8A];
	}
</style>
