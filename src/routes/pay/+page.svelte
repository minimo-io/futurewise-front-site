<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import { localizeHref } from '$paraglide/runtime';
	import { m } from '$paraglide/messages';
	import Promo from '$lib/components/Pay/Promo.svelte';
	import CtaContact from '$lib/components/CtaContact.svelte';
	import Developers from '$lib/components/Home/Developers.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import TransparentButton from '$lib/components/Buttons/TransparentButton.svelte';
	import Hr from '$lib/components/Hr.svelte';
	import Clients from '$lib/components/Home/Clients.svelte';
	import { Product } from '$types/products.types';
	// import StandardButton from '$lib/components/Buttons/StandardButton.svelte';
	// import Hr from '$lib/components/Hr.svelte';
</script>

<Meta title={m.metaFinxTitle()} description={m.metaFinxDescription()} />

<Header
	background="rocket"
	opacity="0"
	titleLeft={m.project()}
	titleRight={Product.PAY}
	heroContent={m.heroContentFinX()}
/>
<div>
	<Clients />
</div>

<main class="max-w-fw border-x-base-200 mx-auto md:border-x">
	<div class=" relative mx-auto flex flex-col gap-0 md:flex-row">
		<div class="fw-cmp-box">
			<div class="fw-cmp-box-title">Enterprise</div>
			<div class="fw-cmp-box-content">
				<p>
					Soluções financeiras customizadas para quem tem <span class="text-base-content"
						>alto volume de transações</span
					> e precisa de conciliação ágil e eficiente, com altas taxas de conversão e integração entre
					sistemas. Tudo isso 24/7, simples e 100% compliant!
				</p>
				<TransparentButton class="!mt-6" href={localizeHref('/sign-up')}>
					{m.startNow()}
				</TransparentButton>
			</div>
		</div>
		<div class="fw-cmp-box fw-border-t-divider-dot md:fw-cmp-box-with-dot">
			<div class="fw-cmp-box-title">Startups</div>
			<div class="fw-cmp-box-content">
				<p>
					Como uma empresa de tecnologia, entendemos que <span class="text-base-content"
						>velocidade e boa documentação</span
					> são chaves. Nossa API é de simples integração, permitindo que seu time foque no crescimento
					do seu negócio.
				</p>
				<TransparentButton class="!mt-6" href={localizeHref('/sign-up')}>
					{m.startNow()}
				</TransparentButton>
			</div>
		</div>
		<div class="fw-cmp-box border-r-0">
			<div class="fw-cmp-box-title">E-Commerce</div>
			<div class="fw-cmp-box-content">
				<p>
					Aumente sua taxa de conversão, simplifique sua conciliação, tenha split de pagamentos,
					<span class="text-base-content">checkout transparente</span>, link de pagamentos, Pix
					recorrente e estorno parcial ou total de transações.
				</p>

				<TransparentButton class="!mt-6" href={localizeHref('/sign-up')}>
					{m.startNow()}
				</TransparentButton>
			</div>
		</div>
		<!-- Decorations -->
		<!-- Left -->
		<!-- <div
			class="border-r-base-200 absolute -bottom-[1px] left-0 hidden h-[130px] w-[1px] -translate-x-1/2 transform border-r md:block"
		></div> -->
		<!-- Right -->
		<div
			class="border-r-base-200 absolute -top-[1px] right-0 hidden h-[130px] w-[1px] -translate-x-1/2 transform border-r md:block"
		></div>
	</div>

	<Promo />
</main>
<div class="relative mx-(--fw-app-margin) mt-18 mb-20 md:mb-0">
	<Hr bottom={true} />
	<Developers />
</div>

<div class="mx-(--fw-app-margin)">
	<Faq project="finx" />
</div>

<CtaContact />
