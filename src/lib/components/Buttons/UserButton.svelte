<script lang="ts">
	import { ChevronDown, User } from '@lucide/svelte';
	import { getLocale } from '$paraglide/runtime';
	import { enhance } from '$app/forms';
	import { toggleLoader } from '$stores/Loader.state.svelte';

	let locale = $state(getLocale());
</script>

<div class="dropdown dropdown-end">
	<button
		class="bg-base-200 hover:bg-base-100 fw-header-fs relative hidden items-center rounded-full px-3 py-3 md:flex"
	>
		<User class="h-5" strokeWidth="1" />
		<ChevronDown strokeWidth="1" class="h-4" />
	</button>

	<ul class="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-fit p-2 shadow-md">
		<li><a href="/">Configurações</a></li>
		<div class="my-1 border-b border-b-gray-700"></div>
		<li>
			<form
				method="POST"
				action="/dashboard?/logout"
				use:enhance={() => {
					toggleLoader();
					return async ({ update }) => {
						toggleLoader();
						update();
					};
				}}
			>
				<button type="submit">Saír da conta</button>
			</form>
		</li>
	</ul>
</div>
