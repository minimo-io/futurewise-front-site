import type { Cookies } from '@sveltejs/kit';
import { getUserFromSession } from '$lib/auth';

export async function getAuthenticatedUser(cookies: Cookies) {
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
