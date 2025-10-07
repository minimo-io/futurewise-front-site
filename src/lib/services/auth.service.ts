// src/lib/services/auth.service.ts

import { getUserFromSession } from '$lib/auth';
import type { Cookies } from '@sveltejs/kit';

export const AuthService = {
	getAuthenticatedUser: async function (cookies: Cookies) {
		const sessionToken = cookies.get('session');

		if (!sessionToken) {
			return null;
		}

		try {
			const user = await getUserFromSession(sessionToken);
			return user || null;
		} catch (error) {
			console.error('Error verifying session:', error);
			return null;
		}
	}
};
