import { Product } from '$lib/type/products.types';
import { productState } from '$stores/Product.state.svelte';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	if (!productState.active) {
		productState.active = Product.CARE;
		// redirect(302, localizeHref(`/dashboard/${Product.CARE.toLowerCase()}`));
	}

	// error(404, 'Not found');
};
