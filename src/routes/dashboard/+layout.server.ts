// import { productState } from '$stores/Product.state.svelte';
import { error, redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { Product } from '$types/products.types';

export const load: LayoutServerLoad = async (params) => {
	const { route } = params;

	let selectedProduct = route.id.split('/').filter(Boolean)[1]?.toUpperCase() || null;

	// If dasboard route does not have any product then select the first product for which the user has permissions
	// and then redirect (now we are only redirecting)
	if (route.id === '/dashboard') {
		redirect(302, '/dashboard/care');
	}

	// When we do have a full product route (eg. /dashboard/care)
	// then we check that the product exists, select it and pass it to the front
	if (!selectedProduct || !Object.values(Product).includes(selectedProduct as Product)) {
		console.error(`Product ${selectedProduct} not founded.`);
		error(500);
	} else {
		selectedProduct = selectedProduct as Product;
	}

	// Check for user permissions for the given product
	return {
		selectedProduct
	};
};
