<!-- Footer -->
<script lang="ts">
	import { Bot, Circle } from '@lucide/svelte';
	import { getCurrentYear } from '$utils';
	import { AppConfig } from '$lib';
	import SystemStatus from './SystemStatus.svelte';
	import { localizeHref } from '$paraglide/runtime';
	import { m } from '$paraglide/messages';

	// Footer year
	let currentYear = getCurrentYear();
	const date = new Date(AppConfig.fw.founded);
	const foundationYear = date.getFullYear();
	const finalYear = `${currentYear != foundationYear ? `${foundationYear} - ${currentYear}` : currentYear}`;
</script>

<footer
	class="fw-border-t-divider md:fw-border-t-divider-dot fw-border-t-divider-dot-center relative bg-white px-(--fw-app-margin) pt-5 pb-10 pl-12 md:pt-18 md:pl-0"
>
	<div class="max-w-fw container mx-auto flex flex-col">
		<div class="flex flex-col justify-between md:flex-row">
			<!-- Items -->
			<div class="mb-5 grid grid-cols-2 gap-10 text-[18px] md:grid-cols-4 md:gap-20">
				<div>
					<h3 class="font-pixel text-base-100 mb-4 text-xl">{m.menuProducts()}</h3>
					<ul class="space-y-2">
						<li><a href={localizeHref('/caresync')} class="text-secondary">CareSync</a></li>
						<li><a href={localizeHref('/finx')} class="text-secondary">FinXPay</a></li>
						<li><a href={localizeHref('/bagity')} class="text-secondary">Bagity</a></li>
						<li><a href={localizeHref('/soon')} class="text-secondary">AutoCRM</a></li>
						<!-- <li>
							<a
								href="https://braaay.com"
								target="_blank"
								rel="nofollow noopener"
								class="text-secondary">Braaay</a
							>
						</li> -->
					</ul>
				</div>

				<div class="order-last md:order-none">
					<h3 class="font-pixel text-base-100 mb-4 text-xl">Developers</h3>
					<ul class="space-y-2">
						<!-- <li><a href="/" class="text-secondary">ViiVPay</a></li> -->
						<li><a href={localizeHref('/soon')} class="text-secondary">{m.documentation()}</a></li>
						<li>
							<a
								href={AppConfig.status}
								class="text-secondary"
								target="_blank"
								rel="nofollow noopener">Status</a
							>
						</li>
						<li>
							<a href={AppConfig.status} class="text-secondary">Changelog</a>
						</li>
						<li>
							<a href={localizeHref('/blog')} class="text-secondary">Blog</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 class="font-pixel text-base-100 mb-4 text-xl">Futurewise</h3>
					<ul class="space-y-2">
						<li><a href="/" class="text-secondary">{m.aboutUs()}</a></li>
						<li><a href={localizeHref('/lab')} class="text-secondary">Laboratório</a></li>
						<li><a href={localizeHref('/soon')} class="text-secondary">One Pager</a></li>
						<li><a href="/" class="text-secondary">Contato</a></li>
					</ul>
				</div>

				<div>
					<h3 class="font-pixel text-base-100 mb-4 text-xl">{m.social()}</h3>
					<ul class="space-y-2">
						<li>
							<a
								href={AppConfig.fw.socials.linkedin}
								rel="nofollow noopener"
								target="_blank"
								class="text-secondary">LinkedIn</a
							>
						</li>
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
					</ul>
				</div>
			</div>
			<!-- Logo / Status -->
			<div
				class="order-first mb-10 flex flex-col items-start justify-center md:order-none md:mb-0 md:items-end"
			>
				<div class="hidden md:block">
					<img
						src="/logos/futurewise-logo-footer.svg"
						class="w-[200px]"
						width="180"
						alt="footer-logo"
					/>
				</div>
			</div>
		</div>

		<!-- Copyright/Left -->
		<div
			class="mt-5 flex flex-col items-start border-black md:flex-col md:items-start md:justify-start"
		>
			<div class="block md:hidden">
				<img
					src="/logos/futurewise-logo-footer.svg"
					class="w-[130px] md:w-[180px]"
					width="180"
					alt="footer-logo"
				/>
			</div>
			<div class="relative -left-2">
				<SystemStatus />
			</div>
			<div class="text-secondary mt-0 mb-4 flex items-center text-sm md:mb-0">
				<!-- ©  -->
				<span class="font-pixel text-primary mr-2">//</span>
				<div>
					{finalYear}, Futurewise Inc.
				</div>
			</div>
		</div>
	</div>
</footer>
