<script lang="ts">
	import Features from '$lib/components/Bagity/Features.svelte';
	import TransparentButton from '$lib/components/Buttons/TransparentButton.svelte';
	import ServiceOrders from '$lib/components/caresync/ServiceOrders.svelte';
	import Slogan from '$lib/components/caresync/Slogan.svelte';
	import CtaContact from '$lib/components/CtaContact.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { Product } from '$types/products.types';
	import { ChevronDown } from '@lucide/svelte';

	let isExpanded = $state(false);
	const autoGestaoInitialItems = 3;
	const gerenciadoInitialItems = 3;

	// Monta os arrays diretamente com chamadas m.chave()
	const autoGestaoItems = [
		{ title: m.careSyncAutoItem0Title(), description: m.careSyncAutoItem0Desc() },
		{ title: m.careSyncAutoItem2Title(), description: m.careSyncAutoItem2Desc() },
		{ title: m.careSyncAutoItem3Title(), description: m.careSyncAutoItem3Desc() },
		{ title: m.careSyncAutoItem1Title(), description: m.careSyncAutoItem1Desc() },
		{ title: m.careSyncAutoItem4Title(), description: m.careSyncAutoItem4Desc() },
		{ title: m.careSyncAutoItem5Title(), description: m.careSyncAutoItem5Desc() },
		{ title: m.careSyncAutoItem6Title(), description: m.careSyncAutoItem6Desc() },
		{ title: m.careSyncAutoItem7Title(), description: m.careSyncAutoItem7Desc() },
		{ title: m.careSyncAutoItem8Title(), description: m.careSyncAutoItem8Desc() }
	];

	const gerenciadoItems = [
		{ title: m.careSyncManagedItem0Title(), description: m.careSyncManagedItem0Desc() },
		{ title: m.careSyncManagedItem1Title(), description: m.careSyncManagedItem1Desc() },
		{ title: m.careSyncManagedItem2Title(), description: m.careSyncManagedItem2Desc() },
		{ title: m.careSyncManagedItem3Title(), description: m.careSyncManagedItem3Desc() },
		{ title: m.careSyncManagedItem6Title(), description: m.careSyncManagedItem6Desc() },
		{ title: m.careSyncManagedItem5Title(), description: m.careSyncManagedItem5Desc() },
		{ title: m.careSyncManagedItem4Title(), description: m.careSyncManagedItem4Desc() },
		{ title: m.careSyncManagedItem7Title(), description: m.careSyncManagedItem7Desc() }
	];
</script>

<Meta title={m.metaCareSyncTitle()} description={m.metaCareSyncDescription()} />

<Header
	background="astronaut"
	opacity="0"
	titleLeft={m.project()}
	titleRight="CareSync"
	heroContent={m.heroContentCareSync()}
/>

<main>
	<div
		class="max-w-fw border-x-base-200 relative container my-0 text-center md:mx-auto md:border-x"
	>
		<div class="flex flex-1 items-center justify-center">
			<div
				class="border-base-200 fw-border-b-divider md:fw-border-t-divider-dot flex w-full flex-col border-b
			            after:absolute after:right-[48%] md:flex-row md:after:top-12 md:after:right-[49.4%] md:after:content-['']"
			>
				<!-- Auto-gestão -->
				<div class="border-r-base-200 w-full py-3 text-xl md:w-1/2 md:border-r">
					<div class="mb-3 text-2xl">
						CareSync <span
							class="bg-primary relative -top-[2px] ml-1 rounded-lg px-3 py-[2px] text-xl"
						>
							{m.careSyncAuto()}
						</span>
					</div>
					<div class="border-base-200 text-primary border-t pt-2 font-sans text-lg font-bold">
						<!-- {m.careSyncIdealFor()} -->
						{m.careSyncYouControl()}
						<div
							class="text-secondary px-0 text-base leading-6 font-semibold tracking-wide md:px-20"
						>
							{@html m.careSyncAutoDesc()}
						</div>
					</div>
				</div>
				<!-- Gerenciado -->
				<div class="hidden w-full py-3 text-xl md:inline-block md:w-1/2">
					<div class="mb-3 text-2xl">
						CareSync <span
							class="bg-primary relative -top-[2px] ml-1 rounded-lg px-3 py-[2px] text-xl"
						>
							{m.careSyncManaged()}
						</span>
					</div>
					<div class="border-base-200 text-primary mt-1 border-t pt-2 font-sans text-lg font-bold">
						<!-- {m.careSyncIdealFor()} -->
						{m.careSyncWeTakeCare()}
						<div
							class="text-secondary px-0 text-base leading-6 font-semibold tracking-wide md:px-20"
						>
							{@html m.careSyncManagedDesc()}
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="flex flex-col justify-center md:flex-1 md:flex-row md:items-stretch">
			<!-- Você no controle -->
			<div
				class="border-r-base-200 flex w-full flex-col py-5 text-center md:w-1/2 md:border-r md:px-20 md:py-10"
			>
				<div class="flex flex-grow flex-col">
					<ul class="flex-grow">
						{#each autoGestaoItems.slice(0, autoGestaoInitialItems) as item}
							<li class="!text-base md:!text-base">
								<span class="font-bold">{item.title}</span>
								{item.description}
							</li>
						{/each}
						{#if isExpanded}
							{#each autoGestaoItems.slice(autoGestaoInitialItems) as item}
								<li class="!text-base md:!text-base">
									<span class="font-bold">{item.title}</span>
									{item.description}
								</li>
							{/each}
						{/if}
					</ul>
					{#if autoGestaoItems.length > autoGestaoInitialItems}
						<button
							onclick={() => (isExpanded = !isExpanded)}
							class="text-primary hover:text-primary/70 mt-2 mb-3 flex items-center justify-center gap-2 transition-colors duration-200"
						>
							<span class="text-base font-medium">
								{isExpanded ? m.careSyncToggleLess() : m.careSyncToggleMore()}
							</span>
							<ChevronDown
								class="h-4 w-4 transition-transform duration-200 {isExpanded ? 'rotate-180' : ''}"
							/>
						</button>
					{/if}

					<TransparentButton href={localizeHref('/sign-up')}>{m.startNow()}</TransparentButton>
				</div>
			</div>

			<!-- Nós cuidamos de tudo -->
			<div class="mb-7 flex w-full flex-col items-start md:mb-0 md:w-1/2 md:px-20 md:py-10">
				<!-- Mobile second option -->
				<div class="border-base-200 w-full border-t border-b py-3 text-xl md:hidden md:w-1/2">
					<div class="mb-2 text-2xl">
						CareSync <span
							class="bg-primary relative -top-[2px] ml-1 rounded-lg px-3 py-[2px] text-xl"
						>
							{m.careSyncManaged()}
						</span>
					</div>
					<div class="border-base-200 text-primary mt-1 border-t pt-2 font-sans text-lg font-bold">
						<!-- {m.careSyncIdealFor()} -->
						{m.careSyncWeTakeCare()}
						<div
							class="text-secondary px-0 text-base leading-6 font-semibold tracking-wide md:px-20"
						>
							{@html m.careSyncManagedDesc()}
						</div>
					</div>
				</div>

				<!-- <div
					class="text-primary self-center pt-5 text-center font-sans text-lg font-bold uppercase md:pt-0"
				>
					{m.careSyncWeTakeCare()}
				</div> -->

				<div class="flex w-full flex-grow flex-col">
					<ul class="flex-grow">
						{#each gerenciadoItems.slice(0, gerenciadoInitialItems) as item}
							<li class="!text-base md:!text-base">
								<span class="font-bold">{item.title}</span>
								{item.description}
							</li>
						{/each}
						{#if isExpanded}
							{#each gerenciadoItems.slice(gerenciadoInitialItems) as item}
								<li class="!text-base md:!text-base">
									<span class="font-bold">{item.title}</span>
									{item.description}
								</li>
							{/each}
						{/if}
					</ul>
					{#if gerenciadoItems.length > gerenciadoInitialItems}
						<button
							onclick={() => (isExpanded = !isExpanded)}
							class="text-primary hover:text-primary/70 mt-2 mb-3 flex items-center justify-center gap-2 self-center transition-colors duration-200"
						>
							<span class="text-base font-medium">
								{isExpanded ? m.careSyncToggleLess() : m.careSyncToggleMore()}
							</span>
							<ChevronDown
								class="h-4 w-4 transition-transform duration-200 {isExpanded ? 'rotate-180' : ''}"
							/>
						</button>
					{/if}
					<TransparentButton href={localizeHref('/sign-up')}>{m.startNow()}</TransparentButton>
				</div>
			</div>
		</div>
	</div>

	<!-- Diferentials -->
	<div class="border-base-200 border-t border-b">
		<section class="max-w-fw mx-auto">
			<div class="border-base-200 mt-5 mb-4 flex justify-center">
				<div
					class="bg-primary animate__animated animate__flash animate__infinite relative left-1 mr-4 block h-[20px] w-[5px] md:-top-1 md:h-[30px] md:w-[8px]"
				></div>
				<h2 class="font-pixel text-2xl tracking-wider md:text-4xl">Por que alugar?</h2>
			</div>
		</section>
	</div>

	<Features product={Product.CARESYNC} />

	<ServiceOrders image="/caresync-dashboard-3.png" />

	<div class="border-base-200 mb-10 border-b pb-5 md:mb-0 md:border-0 md:pb-0">
		<Slogan text={m.careSyncSlogan()} />
	</div>

	<div id="know-more" class="border-base-200 mt-20 font-sans md:mt-0 md:border-t">
		<Faq project="caresync" />
	</div>

	<CtaContact />
</main>

<style lang="postcss">
	@reference "tailwindcss";
	li {
		@apply text-lg;
		@apply relative my-3 pl-6 text-left font-sans text-[#8a8a8a] before:absolute before:left-0 before:text-xl before:text-green-500 before:content-['✓'];
	}
</style>
