import type { LayoutServerLoad } from './$types';
import { AuthService } from '$services';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const user = await AuthService.getAuthenticatedUser(cookies);

	return {
		user
	};
};
