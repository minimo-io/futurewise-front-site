<script lang="ts">
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { page } from '$app/state';

	let user = $derived(page.data.user);
	console.log('USER', user);
</script>

<!-- Login/Dashboard Button -->
{#if user}
	<a
		href={localizeHref('/dashboard')}
		class="bg-base-200 hover:bg-base-100 flex items-center rounded-full px-5 py-3 text-[13px] font-light uppercase md:px-6 md:text-[15px]"
	>
		<span class="relative top-[1px] flex items-center"> Dashboard </span>
	</a>
{:else}
	<a
		href={localizeHref('/login')}
		class="bg-base-200 hover:bg-base-100 flex items-center rounded-full px-5 py-3 text-[13px] font-light uppercase md:px-6 md:text-[15px]"
	>
		<span class="relative top-[1px] flex items-center">
			<span class="mr-0 md:mr-[5px]">{m.login()}</span>
			<kbd class="kbd kbd-sm relative -top-[2px] hidden md:inline-block">
				<span>L</span>
			</kbd>
		</span>
	</a>
{/if}
