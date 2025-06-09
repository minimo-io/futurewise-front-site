<script lang="ts">
	import HeaderLogin from '$lib/components/Header/HeaderLogin.svelte';
	import Login from '$lib/components/Login/Login.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { m } from '$paraglide/messages';
	import type { PageProps } from './$types';

	// let { data, form }: PageProps = $props();
	let { form }: PageProps = $props();
</script>

<Meta title={m.metaLoginTitle()} description={m.metaLoginDescription()} />
<HeaderLogin />
<Login {form} />
