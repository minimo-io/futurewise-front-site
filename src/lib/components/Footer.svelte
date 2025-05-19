<!-- Footer -->
<script lang="ts">
	import { Bot, Circle } from '@lucide/svelte';
	import { getCurrentYear } from '$utils';
	import { AppConfig } from '$lib';

	// Footer year
	let currentYear = getCurrentYear();
	const date = new Date(AppConfig.fw.founded);
	const foundationYear = date.getFullYear();
	const finalYear = `${currentYear != foundationYear ? `${foundationYear} - ${currentYear}` : currentYear}`;
</script>

<footer
	class="fw-border-t-divider fw-border-t-divider-dot fw-border-t-divider-dot-center relative bg-white pt-20 pb-10"
>
	<div class="max-w-fw container mx-auto flex flex-col">
		<div class="flex justify-between">
			<!-- Items -->
			<div class="mb-5 grid grid-cols-2 gap-16 text-[18px] md:grid-cols-4">
				<div>
					<h3 class="mb-4 font-sans text-xl font-bold text-black">Produtos</h3>
					<ul class="space-y-2">
						<li><a href="/" class="text-secondary">CareSync</a></li>
						<li><a href="/" class="text-secondary">FinX</a></li>
						<li><a href="/" class="text-secondary">Growify</a></li>
						<li><a href="/" class="text-secondary">APIs</a></li>
					</ul>
				</div>

				<div>
					<h3 class="mb-4 font-sans text-xl font-bold text-black">Libraries</h3>
					<ul class="space-y-2">
						<!-- <li><a href="/" class="text-secondary">ViiVPay</a></li> -->
						<li><a href="/" class="text-secondary">js-codex</a></li>
					</ul>
				</div>

				<div>
					<h3 class="mb-4 flex items-center font-sans text-xl font-bold text-black">Lab</h3>
					<ul class="space-y-2">
						<li><a href="/" class="text-secondary">Sobre Nós</a></li>
						<li><a href="/" class="text-secondary">Experimentos</a></li>
						<li><a href="/" class="text-secondary">Ferramentas</a></li>
						<li><a href="/" class="text-secondary">Contato</a></li>
					</ul>
				</div>

				<div>
					<h3 class="mb-4 font-sans text-xl font-bold text-black">Social</h3>
					<ul class="space-y-2">
						<li>
							<a
								href={AppConfig.fw.socials.github}
								rel="nofollow noopener"
								target="_blank"
								class="text-secondary"
							>
								Github
							</a>
						</li>
						<li>
							<a
								href={AppConfig.fw.socials.huggingface}
								rel="nofollow noopener"
								target="_blank"
								class="text-secondary">HuggingFace</a
							>
						</li>
						<li>
							<a
								rel="nofollow noopener"
								target="_blank"
								href={AppConfig.fw.socials.nostr}
								class="text-secondary">Nostr</a
							>
						</li>
						<li>
							<a
								href={AppConfig.fw.socials.linkedin}
								rel="nofollow noopener"
								target="_blank"
								class="text-secondary">LinkedIn</a
							>
						</li>
					</ul>
				</div>
			</div>
			<!-- Logo / Status -->
			<div class="flex flex-col items-end justify-start">
				<div>
					<img src="/logos/futurewise-logo-footer.svg" width="180" alt="footer-logo" />
				</div>
				<div class="text-primary mt-2 flex items-center text-sm text-[16px]">
					<div>
						<Circle class="h-3" fill="#ff4016" />
					</div>
					<div class="font-sans">Todos os sistemas funcionando</div>
				</div>
			</div>
		</div>

		<!-- Copyright/Left -->
		<div class="mt-5 flex flex-col items-center justify-between md:flex-row">
			<div class="mb-4 flex items-center text-sm text-black md:mb-0">
				<!-- ©  -->
				<Bot class="mr-1 mb-[1px] h-[15px]" />
				<div>
					{finalYear}, Futurewise Inc.
				</div>
			</div>
		</div>
	</div>
</footer>
