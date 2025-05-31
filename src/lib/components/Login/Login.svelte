<script>
	import { localizeHref } from '$paraglide/runtime';
</script>

<div class="max-w-fw border-x-base-200 relative container my-0 border-x text-center md:mx-auto">
	<div class="mx-(--fw-app-margin) flex h-[calc(100vh-90px)] flex-1 items-center justify-center">
		<div class="relative -top-8 w-[400px]">
			<h2 class="text-base-content font-sans text-3xl font-black">Entrar</h2>
			<div class="mx-auto">
				<form>
					<!-- Email input -->
					<div class="mt-5 mb-3">
						<label for="email" class="mb-2 ml-2 block text-left text-sm font-medium">Email</label>
						<input
							type="email"
							id="email"
							placeholder="Seu email..."
							class="focus:ring-primary w-full rounded-md border border-white bg-transparent px-4 py-2 text-white focus:ring-2 focus:outline-none"
						/>
					</div>

					<!-- Continue button -->
					<button
						class="mb-5 w-full rounded-md bg-red-600 py-2 font-semibold text-white transition hover:bg-red-700"
					>
						Continuar
					</button>

					<!-- Divider -->
					<div class="mb-5 flex items-center gap-2 text-sm text-gray-400">
						<div class="h-px flex-grow bg-gray-600"></div>
						<span>OU</span>
						<div class="h-px flex-grow bg-gray-600"></div>
					</div>

					<!-- Google button -->
					<button
						class="mb-5 flex w-full items-center justify-center gap-2 rounded-md bg-white py-2 font-medium text-black shadow-sm transition hover:shadow-md"
					>
						<img
							src="https://www.svgrepo.com/show/475656/google-color.svg"
							alt="Google"
							class="h-5 w-5"
						/>
						Continuar com Google
					</button>

					<!-- Register prompt -->
					<p class="text-center text-sm">
						Não tem uma conta?
						<a href={localizeHref('/')} class="text-primary ml-1 font-bold hover:underline"
							>Começar agora</a
						>
					</p>
				</form>
			</div>
		</div>
	</div>

	<!-- Decoration 1 -->
	<div class="absolute -top-[5%] right-[20%] z-10 scale-40 opacity-60 md:bottom-[10%]">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>
	<!-- Decoration 2 -->
	<div class="absolute -top-[5%] -left-[10%] z-10 scale-40 opacity-80 md:bottom-[10%]">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>
</div>
