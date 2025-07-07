import type { Actions } from '@sveltejs/kit';
import { logoutAction } from '..';
import type { PageServerLoad } from '../$types';
import { productState } from '$stores/Product.state.svelte';

export const actions = {
	logout: logoutAction
} satisfies Actions;

export const load: PageServerLoad = async () => {
	console.log('PS_CARESYNC!!!!!!', productState.active);

	// if (!productState.active) {
	//     productState.active = Product.CARESYNC;
	// }

	// redirect(302, localizeHref(`/dashboard/${productState.active.toLowerCase()}`));

	// error(404, 'Not found');
};
