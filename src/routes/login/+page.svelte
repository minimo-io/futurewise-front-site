<script lang="ts">
	import HeaderLogin from '$lib/components/Header/HeaderLogin.svelte';
	import Login from '$lib/components/Login/Login.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { m } from '$paraglide/messages';
</script>

<Meta title={m.metaLoginTitle()} description={m.metaLoginDescription()} />
<HeaderLogin />
<Login />
