<script>
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<!-- Products Slider Section -->
<section class="relative -top-[20px] px-6 md:px-12 lg:px-16">
	<div class="container mx-auto">
		<div class="mb-8 text-center">
			<button
				class="rounded-tl-3xl rounded-br-3xl bg-white px-10 py-2 text-[18px] font-bold text-black hover:bg-gray-200"
				>Produtos</button
			>
		</div>

		<div class="relative hidden">
			<!-- Slider navigation -->
			<button
				aria-label="button"
				class="bg-opacity-50 absolute top-1/2 left-0 z-10 -translate-y-1/2 transform rounded-full bg-black p-2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</button>

			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
				<!-- Product Card 1 -->
				<div class="bg-fw-dark border-fw-red rounded-sm border-t-2 p-6">
					<div class="mb-4 flex items-center justify-between">
						<div class="flex items-center">
							<div class="mr-2 text-gray-400">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 7h16M4 11h16M4 15h8"
									/>
								</svg>
							</div>
							<span class="font-bold text-white">CoreSync</span>
						</div>
					</div>
					<span class="bg-fw-red mb-2 inline-block px-2 py-1 text-xs text-white"
						>E-COMMERCE PLATFORM</span
					>
					<p class="mb-4 text-sm text-gray-400">API DE PROCESSAMENTO DE PAGAMENTOS GLOBAL</p>
				</div>

				<!-- Product Card 2 -->
				<div class="bg-fw-dark border-fw-red rounded-sm border-t-2 p-6">
					<div class="mb-4 flex items-center justify-between">
						<div class="flex items-center">
							<div class="mr-2 text-gray-400">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<span class="font-bold text-white">Bagity</span>
						</div>
					</div>
					<span class="bg-fw-red mb-2 inline-block px-2 py-1 text-xs text-white"
						>E-COMMERCE PLATFORM</span
					>
					<p class="mb-4 text-sm text-gray-400">API DE AUTORIZAÇÃO DE PAGAMENTOS</p>
				</div>

				<!-- Product Card 3 -->
				<div class="bg-fw-dark border-fw-red rounded-sm border-t-2 p-6">
					<div class="mb-4 flex items-center justify-between">
						<div class="flex items-center">
							<div class="mr-2 text-gray-400">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<span class="font-bold text-white">ViiVPay</span>
						</div>
					</div>
					<span class="bg-fw-red mb-2 inline-block px-2 py-1 text-xs text-white">PAGAMENTOS</span>
					<p class="mb-4 text-sm text-gray-400">PROCESSAMENTO DE CARTÕES E BOLETOS</p>
				</div>

				<!-- Product Card 4 -->
				<div class="bg-fw-dark border-fw-red rounded-sm border-t-2 p-6">
					<div class="mb-4 flex items-center justify-between">
						<div class="flex items-center">
							<div class="mr-2 text-gray-400">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
									/>
								</svg>
							</div>
							<span class="font-bold text-white">DropOn</span>
						</div>
					</div>
					<span class="bg-fw-red mb-2 inline-block px-2 py-1 text-xs text-white">LOGÍSTICA</span>
					<p class="mb-4 text-sm text-gray-400">SMART DELIVERY SUITE</p>
				</div>
			</div>

			<button
				aria-label="button"
				class="bg-opacity-50 absolute top-1/2 right-0 z-10 -translate-y-1/2 transform rounded-full bg-black p-2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>
	</div>
</section>

<!-- Joint Ventures Section -->
<section class="hidden px-6 py-12 md:px-12 lg:px-16">
	<div class="container mx-auto">
		<div class="mb-8 inline-block bg-white px-4 py-2">
			<span class="font-bold text-black">JOINT VENTURES</span>
		</div>

		<p class="mb-8 max-w-3xl text-white">
			Projetos onde a Futurewise participa como fornecedor de tecnologia, alavancados por +10 anos
			de experiência desenvolvendo produtos digitais
		</p>

		<div class="grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
			<!-- Venture 1 -->
			<div class="bg-fw-dark rounded-sm p-6">
				<div class="mb-4">
					<img src="/" alt="ViIV Logo" class="h-8" />
				</div>
				<span class="bg-fw-red mb-2 inline-block px-2 py-1 text-xs text-white">PAGAMENTOS</span>
				<p class="text-sm text-gray-400">FINTAB</p>
			</div>

			<!-- Venture 2 -->
			<div class="bg-fw-dark rounded-sm p-6">
				<div class="mb-4">
					<img src="/" alt="BRADAY Logo" class="h-8" />
				</div>
				<span class="bg-fw-red mb-2 inline-block px-2 py-1 text-xs text-white">PAGAMENTOS</span>
				<p class="text-sm text-gray-400">DIGITAL</p>
			</div>
		</div>
	</div>
</section>

<!-- Developers Section -->
<section class="hidden px-6 py-12 md:px-12 lg:px-16">
	<div class="container mx-auto">
		<div class="mb-8 flex items-center space-x-3">
			<div class="bg-fw-red h-3 w-3"></div>
			<h2 class="text-2xl font-bold">Developers <span class="text-fw-red">Ready</span></h2>
		</div>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			<div>
				<h3 class="mb-2 text-xl font-bold">Plataforma unificada,<br />APIs modernas.</h3>
				<p class="mb-4 text-gray-300">
					Além de nossos dashboards, a Futurewise fornece uma interface única e elegante que abstrai
					toda a complexidade das integrações empresariais.
				</p>
				<p class="mb-8 text-gray-300">
					Com APIs prontas para integrar cada um de nossos produtos no seu próprio sistema.
				</p>
				<div class="flex space-x-4">
					<button
						class="hover:bg-opacity-10 border border-white px-4 py-2 text-sm font-medium text-white hover:bg-white"
					>
						Documentação
					</button>
					<button
						class="hover:bg-opacity-10 border border-white px-4 py-2 text-sm font-medium text-white hover:bg-white"
					>
						<span class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="mr-2 h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
								/>
							</svg>
							Obtenha sua API key
						</span>
					</button>
				</div>
			</div>

			<div class="relative rounded-md bg-gray-900 p-4">
				<div class="mb-4 flex space-x-2">
					<span class="h-3 w-3 rounded-full bg-red-500"></span>
					<span class="h-3 w-3 rounded-full bg-yellow-500"></span>
					<span class="h-3 w-3 rounded-full bg-green-500"></span>
				</div>

				<div class="mb-4 flex">
					<button class="mr-2 rounded-t-md bg-gray-800 px-3 py-1 text-sm text-white">Node.js</button
					>
					<button class="mr-2 rounded-t-md bg-gray-700 px-3 py-1 text-sm text-white">Python</button>
					<button class="rounded-t-md bg-gray-700 px-3 py-1 text-sm text-white">Curl</button>
				</div>

				<pre class="overflow-x-auto text-sm text-gray-300"></pre>

				<div class="mt-4 text-right text-xs text-gray-400">
					Confira também nossos temas de editor para VSCode e Zed
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Lab Section -->
<section class="hidden py-12">
	<div class="mb-8 text-center">
		<button class="bg-white px-8 py-2 font-medium text-black hover:bg-gray-200"
			>O LABORATÓRIO</button
		>
	</div>

	<div class="bg-black py-8 text-center">
		<h2 class="mb-2 text-2xl font-bold">
			HAS NOTHING TO DO<br />WITH <span class="text-fw-red">THE MOON</span>
		</h2>
	</div>
</section>

<!-- Quote Section -->
<section class="hidden px-6 py-12 md:px-12 lg:px-16">
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

<Footer />
