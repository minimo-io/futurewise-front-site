import type { LayoutServerLoad } from './$types';
// import { getAuthenticatedUser } from '$utils';
import { getAuthenticatedUser } from '$utils/auth.utils';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const user = await getAuthenticatedUser(cookies);

	return {
		user
	};
};
