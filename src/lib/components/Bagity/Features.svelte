<script lang="ts">
	import { fly } from 'svelte/transition';
	import { m } from '$paraglide/messages';
	import { Product } from '$types/products.types';
	import Pill from '../Pill.svelte';

	let { product = Product.BAGITY }: { product?: Product } = $props();

	// Reactive state for carousel
	let currentIndex = $state(0);
	let direction = $state(1); // 1 for next, -1 for prev

	// Feature type definition using actual Pill types
	type Feature = {
		img: string;
		title: string;
		desc: string;
		pill?: {
			text: string;
			color: 'light' | 'primary' | 'dark' | 'primary-transparent';
			customCss: string;
		} | null;
	};

	// Define features based on product
	const bagityFeatures: Feature[] = [
		{
			img: '/feature-1.svg',
			title: m.bagityFeature1Title(),
			desc: m.bagityFeature1Desc(),
			pill: null
		},
		{
			img: '/feature-4.svg',
			title: m.bagityFeature2Title(),
			desc: m.bagityFeature2Desc(),
			pill: null
		},
		{
			img: '/feature-8.svg',
			title: m.bagityFeature8Title(),
			desc: m.bagityFeature8Desc(),
			pill: {
				text: m.prototyping(),
				color: 'primary-transparent',
				customCss: '!px-3'
			}
		},
		{
			img: '/feature-3.svg',
			title: m.bagityFeature5Title(),
			desc: m.bagityFeature5Desc(),
			pill: null
		},
		{
			img: '/feature-7.svg',
			title: m.bagityFeature7Title(),
			desc: m.bagityFeature7Desc(),
			pill: null
		},
		{
			img: '/feature-5.svg',
			title: m.bagityFeature4Title(),
			desc: m.bagityFeature4Desc(),
			pill: null
		},
		{
			img: '/feature-2.svg',
			title: m.bagityFeature3Title(),
			desc: m.bagityFeature3Desc(),
			pill: null
		},
		{
			img: '/feature-6.svg',
			title: m.bagityFeature6Title(),
			desc: m.bagityFeature6Desc(),
			pill: null
		}
	];

	const caresyncFeatures: Feature[] = [
		{
			img: '/feature-5.svg',
			title: 'Zero investimento inicial',
			desc: 'Sem grande desembolso inicial. Sem consumo de linha de crédito. Ao alugar você recebe muito além dos equipamentos!'
		},
		{
			img: '/feature-tool.svg',
			title: 'Manutenção inclusa',
			desc: 'Esqueça de gastos de manutenção, perda de produto ou acionamento de garantia. Nós fazemos tudo e disponibilizamos um equipamento sempre pronto.'
		},
		{
			img: '/feature-headset.svg',
			title: 'Atendimento especializado',
			desc: 'Suporte especializado sem custo. Resolução de problemas na empresa ou em home office, remoto ou presencial.'
		},
		{
			img: '/feature-health.svg',
			title: 'Monitoramento 24hrs',
			desc: 'Monitoramento, detecção de anomalias e previsão de falhas com nossa IA treinada pela Futurewise para evitar interrupções e gerar alertas preventivas.'
		},
		{
			img: '/feature-dashboard.svg',
			title: 'Dashboards de acompanhamento',
			desc: 'Acompanhe nossa gestão através de nossos dashboards, gere relatórios de custos, serviços e performance. Gostamos da transparência total!'
		},
		{
			img: '/feature-8.svg',
			title: 'Continuidade inteligente',
			desc: 'Receba um equipamento substituto imediatamente enquanto o outro estiver em manutenção, garantindo que suas operações nunca parem!'
		}
	];

	// Computed properties using $derived
	let features = $derived(product === Product.BAGITY ? bagityFeatures : caresyncFeatures);
	let isMobile = $state(false);
	let itemsPerPage = $derived(isMobile ? 3 : 4);
	let totalPages = $derived(Math.ceil(features.length / itemsPerPage));
	let canGoPrev = $derived(currentIndex > 0);
	let canGoNext = $derived(currentIndex < totalPages - 1);

	// Navigation functions
	function goToPrev() {
		if (canGoPrev) {
			direction = -1;
			currentIndex--;
		}
	}

	function goToNext() {
		if (canGoNext) {
			direction = 1;
			currentIndex++;
		}
	}

	// Get current page features
	let currentPageFeatures = $derived(
		features.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
	);

	// Swipe handling
	let touchStartX = $state(0);

	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.touches[0].clientX;
	}

	function handleTouchEnd(e: TouchEvent) {
		const touchEndX = e.changedTouches[0].clientX;
		const diff = touchStartX - touchEndX;

		// Minimum swipe distance
		if (Math.abs(diff) > 50) {
			if (diff > 0 && canGoNext) {
				direction = 1;
				goToNext();
			} else if (diff < 0 && canGoPrev) {
				direction = -1;
				goToPrev();
			}
		}
	}

	// Check if device is mobile
	$effect(() => {
		const checkMobile = () => {
			isMobile = window.innerWidth < 768; // Tailwind's md breakpoint
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	});
</script>

<div class="max-w-fw mx-auto py-10 !pb-5 md:px-10 md:py-16 md:!pb-10">
	<!-- Carousel container -->
	<div
		class="relative"
		ontouchstart={isMobile ? handleTouchStart : undefined}
		ontouchend={isMobile ? handleTouchEnd : undefined}
	>
		<!-- Features container with animation -->
		<div class="grid grid-cols-1 gap-12 overflow-hidden lg:grid-cols-2">
			{#each currentPageFeatures as feature, i (feature.img)}
				<div class="feature-item" in:fly={{ x: direction * 100, opacity: 0, duration: 150 }}>
					<div class="flex-shrink-0">
						<img src={feature.img} alt={`feature-${i + 1}`} />
					</div>
					<div class="feature-item-desc">
						<h3 class="text-base-content relative">
							{#if feature.pill}
								<div class="absolute -top-6 -right-1 scale-80 md:-top-3 md:right-5">
									<Pill
										color={feature.pill.color}
										text={feature.pill.text}
										customCss={feature.pill.customCss}
									/>
								</div>
							{/if}
							{@html feature.title}
						</h3>
						<p class="text-secondary">{@html feature.desc}</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- Navigation controls for desktop - hidden on mobile -->
		{#if !isMobile}
			<div class="absolute inset-y-0 -top-10 -left-18 flex items-center">
				<button
					class="btn border-primary text-primary btn-circle btn-outline btn-sm md:btn-md hover:bg-primary hover:text-white hover:opacity-100"
					class:hidden={!canGoPrev}
					onclick={goToPrev}
					aria-label="Previous features"
				>
					{'<'}
				</button>
			</div>

			<div class="absolute inset-y-0 -top-10 -right-18 z-50 flex items-center">
				<button
					class="btn border-primary text-primary btn-circle btn-outline btn-sm md:btn-md hover:bg-primary pt-[1px] pl-[1px] hover:text-white hover:opacity-100"
					class:hidden={!canGoNext}
					onclick={goToNext}
					aria-label="Next features"
				>
					{'>'}
				</button>
			</div>
		{/if}

		<!-- Pagination dots -->
		<div class="mt-12 flex justify-center space-x-2">
			{#each Array(totalPages) as _, i}
				<button
					class="h-3 w-3 rounded-full transition-all duration-300"
					class:bg-primary={i === currentIndex}
					class:bg-base-300={i !== currentIndex}
					onclick={() => (currentIndex = i)}
					aria-label={`Go to page ${i + 1}`}
				></button>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.feature-item {
		@apply flex items-center space-x-6;
	}
	.feature-item-desc {
		@apply flex-1;
	}
	.feature-item-desc h3 {
		@apply mb-1 font-sans text-[18px] font-black md:mb-0 md:text-[22px];
	}
	.feature-item-desc p {
		@apply font-sans text-sm md:text-base;
	}
	.feature-item > div > img {
		@apply aspect-square h-[60px] md:h-[90px];
	}
</style>
