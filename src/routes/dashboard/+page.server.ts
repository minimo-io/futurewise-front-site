import { localizeHref } from '$paraglide/runtime';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { productState } from '$stores/Product.state.svelte';
import { Product } from '$lib/type/products.types';

export const load: PageServerLoad = async () => {
	if (!productState.active) {
		redirect(302, localizeHref(`/dashboard/${Product.CARESYNC.toLowerCase()}`));
	} else {
		redirect(302, localizeHref(`/dashboard/${productState.active.toLowerCase()}`));
	}

	// error(404, 'Not found');
};
