<!-- Footer -->
<script lang="ts">
	import { Circle } from '@lucide/svelte';
</script>

<footer
	class="fw-border-t-divider fw-border-t-divider-dot fw-border-t-divider-dot-center relative bg-white py-20"
>
	<div class="max-w-futurewise container mx-auto flex flex-col">
		<div class="flex justify-between">
			<!-- Items -->
			<div class="mb-5 grid grid-cols-2 gap-16 text-[18px] md:grid-cols-4">
				<div>
					<h3 class="mb-4 text-xl font-bold text-black">Produtos</h3>
					<ul class="space-y-2">
						<li><a href="/" class="text-gray-400 hover:text-white">CareSync</a></li>
						<li><a href="/" class="text-gray-400 hover:text-white">Braaay</a></li>
						<li><a href="/" class="text-gray-400 hover:text-white">Scorp</a></li>
						<li><a href="/" class="text-gray-400 hover:text-white">DropOn</a></li>
					</ul>
				</div>

				<div>
					<h3 class="mb-4 text-xl font-bold text-black">Ventures</h3>
					<ul class="space-y-2">
						<li><a href="/" class="text-gray-400 hover:text-white">ViiVPay</a></li>
						<li><a href="/" class="text-gray-400 hover:text-white">Braday</a></li>
					</ul>
				</div>

				<div>
					<h3 class="mb-4 text-xl font-bold text-black">Social</h3>
					<ul class="space-y-2">
						<li><a href="/" class="text-gray-400 hover:text-white">Github</a></li>
						<li><a href="/" class="text-gray-400 hover:text-white">LinkedIn</a></li>
						<li><a href="/" class="text-gray-400 hover:text-white">Contato</a></li>
						<li><a href="/" class="text-gray-400 hover:text-white">Nostr</a></li>
					</ul>
				</div>

				<div>
					<h3 class="mb-4 flex items-center text-xl font-bold text-black">Lab</h3>
					<ul class="space-y-2">
						<li><a href="/" class="text-gray-400 hover:text-white">Sobre Nós</a></li>
						<li><a href="/" class="text-gray-400 hover:text-white">Experimentos</a></li>
						<li><a href="/" class="text-gray-400 hover:text-white">Ferramentas</a></li>
						<li><a href="/" class="text-gray-400 hover:text-white">Open Source</a></li>
					</ul>
				</div>
			</div>
			<!-- Logo / Status -->
			<div class="flex flex-col items-end justify-start">
				<div>
					<img src="/logos/futurewise-logo-footer.svg" width="200" alt="footer-logo" />
				</div>
				<div class="text-primary mt-2 flex items-center text-sm text-[16px]">
					<div>
						<Circle class="h-3" fill="#ff4016" />
					</div>
					<div>Todos os sistemas funcionando</div>
				</div>
			</div>
		</div>

		<!-- Copyright/Left -->
		<div class="mt-5 flex flex-col items-center justify-between md:flex-row">
			<p class="mb-4 text-sm text-gray-500 md:mb-0">© 2025, Futurewise Inc.</p>
		</div>
	</div>
</footer>
