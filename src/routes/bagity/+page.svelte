<script lang="ts">
	import Features from '$lib/components/Bagity/Features.svelte';
	import TransparentButton from '$lib/components/Buttons/TransparentButton.svelte';
	import ServiceOrders from '$lib/components/caresync/ServiceOrders.svelte';
	import Slogan from '$lib/components/caresync/Slogan.svelte';
	import CtaContact from '$lib/components/CtaContact.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import Clients from '$lib/components/Home/Clients.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
</script>

<Meta title={m.metaFinxTitle()} description={m.metaFinxDescription()} />

<Header
	background="commerce"
	opacity="0"
	titleLeft={m.project()}
	titleRight="Bagity"
	heroContent={m.heroContentBagity()}
/>

<div>
	<Clients />
</div>

<main>
	<div
		class="max-w-fw border-x-base-200 relative container my-0 text-center md:mx-auto md:border-x"
	>
		<div id="know-more" class="flex flex-1 items-center justify-center">
			<div
				class="border-base-200 fw-border-b-divider md:fw-border-t-divider-dot flex w-full flex-col border-b
			            after:absolute after:right-[48%] md:flex-row md:after:top-12 md:after:right-[49.4%] md:after:content-['']"
			>
				<!-- Auto-gestão -->
				<div class="border-r-base-200 w-full py-3 text-xl md:w-1/2 md:border-r">
					<div class="mb-3 text-2xl">{m.bagityBasic()}</div>
					<div class="border-base-200 text-primary border-t pt-2 font-sans text-lg font-bold">
						{m.bagityBasicPrice()}
					</div>
				</div>
				<!-- Gerenciado -->
				<div class="hidden w-full py-3 text-xl md:inline-block md:w-1/2">
					<div class="mb-3 text-2xl">
						{@html m.bagityPro()}
					</div>
					<div class="border-base-200 text-primary mt-1 border-t pt-2 font-sans text-lg font-bold">
						{m.bagityProPrice()}
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
					<div class="fw-cmp-box-content !px-7 !py-2 !pb-3 md:!pb-10">
						{@html m.bagityBasicDescription()}
					</div>
					<TransparentButton href={localizeHref('/sign-up')}>{m.startNow()}</TransparentButton>
				</div>
			</div>

			<!-- Nós cuidamos de tudo -->
			<div class="mb-7 flex w-full flex-col items-start md:mb-0 md:w-1/2 md:px-20 md:py-10">
				<!-- Title for mobile -->
				<div class="border-base-200 w-full border-t py-3 text-xl md:hidden md:w-1/2">
					<div class="mb-3 text-2xl">
						{@html m.bagityPro()}
					</div>
					<div
						class="border-base-200 text-primary mt-1 border-t border-b pt-2 pb-2 font-sans text-lg font-bold md:border-b-0 md:pb-0"
					>
						{m.bagityProPrice()}
					</div>
				</div>

				<div class="flex w-full flex-grow flex-col">
					<div class="fw-cmp-box-content !px-7 !py-2">
						{@html m.bagityProDescription()}
					</div>

					<TransparentButton href={localizeHref('/sign-up')}>{m.startNow()}</TransparentButton>
				</div>
			</div>
		</div>
	</div>

	<!-- Common features -->
	<div class="border-base-200 border-t border-b">
		<section class="max-w-fw mx-auto">
			<div class="border-base-200 mt-5 mb-4 flex justify-center">
				<div
					class="bg-primary animate__animated animate__flash animate__infinite relative left-1 mr-4 block h-[20px] w-[5px] md:-top-1 md:h-[30px] md:w-[8px]"
				></div>
				<h2 class="font-pixel text-2xl tracking-wider md:text-3xl">{m.bagityDifferentials()}</h2>
			</div>
		</section>
	</div>

	<Features />

	<Slogan text={m.bagitySlogan()} />
	<ServiceOrders />
	<div id="know-more" class="border-base-200 mt-10 font-sans md:border-t">
		<Faq project="bagity" />
	</div>
	<CtaContact />
</main>
