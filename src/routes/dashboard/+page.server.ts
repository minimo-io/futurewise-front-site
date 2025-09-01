import { localizeHref } from '$paraglide/runtime';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { productState } from '$stores/Product.state.svelte';
import { Product } from '$lib/type/products.types';
import { dashboardCommonActions } from '.';

export const actions = dashboardCommonActions;

export const load: PageServerLoad = async () => {
	if (!productState.active) {
		redirect(302, localizeHref(`/dashboard/${Product.CARE.toLowerCase()}`));
	} else {
		redirect(302, localizeHref(`/dashboard/${productState.active.toLowerCase()}`));
	}

	// error(404, 'Not found');
};
