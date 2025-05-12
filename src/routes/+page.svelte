<script lang="ts">
	// import Clients from '$lib/components/Home/Clients.svelte';
	import Developers from '$lib/components/Home/Developers.svelte';
	import Products from '$lib/components/Home/Products.svelte';
	import PillFlower from '$lib/components/PillFlower.svelte';
</script>

<!-- Products Slider Section -->
<section class="fw-border-b-divider relative -top-[23px] px-6 pb-5 md:px-12 lg:px-16">
	<div>
		<div class="text-center">
			<PillFlower title="Produtos" />
		</div>

		<Products />
	</div>
</section>

<!-- Joint Ventures Section -->
<!-- <section
	class="fw-border-b-divider fw-border-b-divider-dot fw-border-b-divider-dot-center relative mx-auto mt-3 pb-6"
>
	<div class="max-w-futurewise mx-auto">
		<div class="mb-10 flex items-center gap-10">
			<div class="">
				<PillFlower title="Clientes" />
			</div>

			<p class="text-secondary max-w-3xl font-sans text-[22px] leading-6">
				Projetos onde a Futurewise participa como fornecedor de tecnologia, alavancados por +10 anos
				de experiência desenvolvendo produtos digitais
			</p>
		</div>

		<Clients />
	</div>
</section> -->

<!-- Developers Section -->
<Developers />

<!-- Lab Section -->
<section
	class="fw-border-b-divider relative my-24 px-6 pb-5 md:px-12 lg:px-16"
	style="background-image:url('/lab.png')"
>
	<div class="bg-primary absolute top-0 right-0 h-full w-full opacity-45"></div>
	<div class="relative -top-[23px] z-10 text-center">
		<PillFlower title="O LABORATÓRIO" />
	</div>
	<div class="relative z-10">
		<div class=" py-8 text-center">
			<h2 class="mb-2 text-5xl font-bold">
				HAS NOTHING TO DO<br />WITH <span class="text-fw-red">THE MOON</span>
			</h2>
		</div>
	</div>
</section>

<!-- Quote Section -->
<section class=" px-6 py-12 md:px-12 lg:px-16">
	<div class="container mx-auto">
		<div class="mx-auto max-w-4xl">
			<blockquote class="mb-4">
				<div class="flex">
					<span class="text-fw-red font-serif text-6xl">"</span>
					<p class="text-lg text-white">
						<span class="text-fw-red font-bold">F</span>uturewise não é uma palavra padrão de
						dicionário, mas é usada geralmente como adjetivo ou advérbio significando "<span
							class="text-fw-red">com relação ao futuro</span
						>" ou "<span class="text-fw-red">em termos de futuro</span>".
					</p>
				</div>
			</blockquote>
			<p class="text-right text-sm text-gray-400">Fonte: Dicionário</p>
		</div>
	</div>
</section>

<!-- About Section -->
<section class="hidden px-6 py-12 text-gray-300 md:px-12 lg:px-16">
	<div class="container mx-auto max-w-4xl">
		<p class="mb-6">
			<span class="text-fw-red text-2xl font-bold">W</span>e are an innovation & development lab
			experimenting in the intersection of e-Commerce, Payments, AI and Machines, with a focus in
			LATAM
		</p>

		<p class="mb-6">
			We have fun experimenting with technology... We build real-world applications & machines.
		</p>

		<p class="mb-6">
			We are minimalists & efficient. We aim at building performant systems with little. We use what
			it's best, we do not reinvent wheels. No charge for it. We are <span
				class="text-fw-red font-bold">techno-optimists</span
			>.
		</p>

		<p class="mb-8">We design, we experiment, we ship!</p>

		<p class="mb-6">
			<span class="text-fw-red text-2xl font-bold">W</span>e are also a platform for developing
			Digital Products. We offer our infrastructure, APIs and libraries to experimental projects.
		</p>

		<p class="mb-6">
			Some experiments fail, do not reach the level of products, so they remain as acquired
			knowledge in the form of libraries, designs, and articles.
		</p>

		<p class="mb-6">
			Sometimes ideas do not leave their form, so we let them mature in the <span class="underline"
				>Idea Lab</span
			>.
		</p>

		<p class="mb-6">
			<span class="text-fw-red text-2xl font-bold">F</span>ortunately our base tech stack is very
			simple yet powerful: <span class="font-bold">Swift</span> &
			<span class="font-bold">Figma</span>
			for the front-end, <span class="font-bold">NextJS</span> for our
			<span class="font-bold">Python</span> for AI, <span class="font-bold">MicroPython</span> for
			embedded systems, and <span class="font-bold">Docker</span> for containerization,
			<span class="font-bold">Bitcoin</span> / <span class="font-bold">USDT</span> for value
			preservation & money transmission,
			<span class="font-bold">ArWeave</span>, <span class="font-bold">Render</span> &
			<span class="font-bold">AWS</span> for cloud infrastructure.
		</p>

		<p class="mb-6">
			<span class="text-fw-red text-2xl font-bold">W</span>e believe in open-protocols, so we are
			also experimenting on building for <span class="font-bold">Nostr</span>.
		</p>

		<p class="mb-6">
			Sometimes we use our expertise to contribute to other projects. In these Joint Ventures we
			participate as technological partners, providing our infrastructure, APIs & team.
		</p>

		<p class="mb-6">
			<span class="text-fw-red text-2xl font-bold">W</span>e first solve our own problems through
			technology, and then make valuable products out of it.
		</p>

		<p class="mb-6">
			We also curate a list of third party Tools that we ourselves use on a daily basis, aiming to
			share with others not only our own stuff, but what it's best out there.
		</p>

		<p class="mb-6">
			We nurse from open-source, so we contribute to open-source. Many of the libraries we create
			for our products can be found in our <span class="underline">GitHub profile</span>. Sometimes
			even complete projects!
		</p>

		<p class="mb-8">
			Have a crazy idea? Let's chat about it, we will love it, <span class="font-bold"
				>get in touch!</span
			>
		</p>

		<ul class="mb-8 list-inside list-disc space-y-2 pl-6">
			<li><span class="text-fw-red">▶</span> Check our products and our simple pricing.</li>
			<li>
				<span class="text-fw-red">▶</span> Check out all of our archived experiments
				<span class="underline">here</span>.
			</li>
			<li><span class="text-fw-red">▶</span> Check out our open-source libraries & projects.</li>
		</ul>

		<p class="mb-4">
			Let's build stuff,<br />
			<span class="italic">~The Futurewise Team</span>
		</p>
	</div>
</section>
