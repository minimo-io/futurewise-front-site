<script lang="ts">
	import TopPosts from '$lib/components/blog/topPosts.svelte';
	import CtaContact from '$lib/components/CtaContact.svelte';
	import HeaderContent from '$lib/components/Header/HeaderContent.svelte';
	import HeaderDefined from '$lib/components/Header/HeaderDefined.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { m } from '$paraglide/messages';
	import type { PageProps } from './$types';

	// let { data, form }: PageProps = $props();
	// let { form }: PageProps = $props();
</script>

<Meta title="Blog" description={m.metaLoginDescription()} />
<HeaderDefined headerButtons="institutional" mobileBorderB={true} />

<!-- <div class="border-base-200 border-b">
	<div class="max-w-fw container mx-auto">
		<HeaderContent
			titleLeft="Future"
			titleRight="Blog"
			heroContent="Creamos e impulsamos proyectos de innovación: somos una plataforma de tecnología, mentoría y redes enfocada en LATAM.Desde Pagos hasta e-Commerce, IA e IoT."
			buttons={false}
		/>
	</div>
</div> -->

<main>
	<div
		class="max-w-fw border-x-base-200 relative container my-0 text-center md:mx-auto md:border-0 md:border-x"
	>
		<TopPosts />

		<div class="mx-(--fw-app-margin) flex h-[calc(100vh-90px)] flex-1 items-center justify-center">
			<div class="relative -top-8 w-[400px]">
				<h2 class="text-base-content font-sans text-3xl font-black">{m.login()}</h2>
				<div class="mx-auto"></div>
			</div>
		</div>

		<CtaContact />

		<!-- Decoration 1 -->
		<div class="absolute -top-[5%] right-[20%] z-10 scale-40 opacity-60 md:bottom-[10%]">
			<img src="/bgs/cross.svg" alt="cross" />
		</div>
		<!-- Decoration 2 -->
		<div class="absolute -top-[5%] -left-[10%] z-10 scale-40 opacity-80 md:bottom-[10%]">
			<img src="/bgs/cross.svg" alt="cross" />
		</div>
	</div>
</main>
