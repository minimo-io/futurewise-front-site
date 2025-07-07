import type { Actions } from '@sveltejs/kit';
import { logoutAction } from '..';
// import type { PageServerLoad } from '../$types';
// import { productState } from '$stores/Product.state.svelte';
// import { Product } from '$lib/type/products.types';

export const actions = {
	logout: logoutAction
} satisfies Actions;

// export const load: PageServerLoad = () => {
// 	if (productState.active != Product.FINX) {
// 		productState.active = Product.FINX;
// 	}
// };
