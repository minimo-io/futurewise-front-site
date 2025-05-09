<script lang="ts">
	import TitleSection from '../TitleSection.svelte';
</script>

<!-- Hero Section -->
<div class="relative my-20 max-w-4xl">
	<!-- Section title -->
	<TitleSection titleLeft="Bem-vindo" titleRight="Ao Futuro" />

	<p
		class="text-secondary font-regular my-7 font-sans text-[25px] leading-[118%] font-normal tracking-wide"
	>
		Somos uma <span class="text-base-content opacity-80">Plataforma de Produtos Digitais</span> e um
		Laboratório de Desenvolvimento focados na Inovação nas áreas de
		<span class="text-base-content opacity-80">e-Commerce, Pagamentos, IA e Máquinas (IoT)</span>,
		para LATAM.

		<!-- a platform of digital products and a development lab focused on innovation in LATAM -->
	</p>
	<div class="mt-8 flex flex-wrap gap-4">
		<button class="text-base-200 bg-base-content rounded-full px-6 py-2">Saiba mais</button>
		<button
			class="hover:bg-opacity-10 border-base-content text-base-content rounded-full border px-6 py-2 font-medium"
		>
			<!-- <span class="mr-1 font-bold">Lançamento !</span> -->
			<span class="font-light tracking-wide"> Agende uma reunião </span>
		</button>
	</div>
</div>
