<script lang="ts">
	import TitleSection from '../TitleSection.svelte';
</script>

<!-- Hero Section -->
<div class="relative my-15 max-w-4xl md:my-20">
	<!-- Section title -->
	<TitleSection titleLeft="Bem-vindo" titleRight="Ao Futuro" />

	<p
		class="text-secondary font-regular my-7 font-sans text-[20px] leading-[120%] font-normal tracking-wide md:text-[25px] md:leading-[118%]"
	>
		Somos uma <span class="text-base-content opacity-80">Plataforma de Produtos Digitais</span> e um
		Laboratório de Desenvolvimento focados na Inovação nas áreas de
		<span class="text-base-content opacity-80">e-Commerce, Pagamentos, IA e Máquinas (IoT)</span>,
		para LATAM.

		<!-- a platform of digital products and a development lab focused on innovation in LATAM -->
	</p>
	<div class="mt-8 flex flex-wrap gap-4">
		<a href="/" class="fw-button z-20 flex items-center">Saiba mais</a>
		<a
			href="https://calendar.app.google/oDbeDazTLXApijoR8"
			target="_blank"
			rel="nofollow noopener	"
			class="hover:bg-opacity-10 border-base-content text-base-content z-20 rounded-full border px-6 py-2 text-sm font-medium md:text-base"
		>
			<!-- <span class="mr-1 font-bold">Lançamento !</span> -->
			<span class="font-light tracking-wide"> Agende uma reunião </span>
		</a>
	</div>
</div>
