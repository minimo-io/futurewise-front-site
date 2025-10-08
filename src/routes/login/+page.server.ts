// src/routes/login/+page.server.ts
import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { localizeHref } from '$paraglide/runtime';
import { AuthService } from '$services';
// import bcrypt from 'bcrypt';

export const load: PageServerLoad = async ({ cookies }) => {
	// If user is already logged in, redirect to dashboard
	// away from this login page
	const sessionToken = cookies.get('session');
	if (sessionToken) {
		// You could verify the session here
		redirect(302, localizeHref('/dashboard'));
	}

	return {};
};

export const actions = {
	// Email login action
	email: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;

		if (!email) {
			return fail(400, { email, missing: 'email' });
		}

		if (!password) {
			return fail(400, { email, missing: 'password' });
		}

		const user = await AuthService.verifyEmailLogin(email, password);

		if (!user) {
			return fail(400, { email, incorrect: true });
		}

		const sessionToken = await AuthService.createUserSession(user.id);

		cookies.set('session', sessionToken, {
			path: '/',
			httpOnly: true,
			secure: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 7 // 7 days
		});

		redirect(303, localizeHref('/dashboard'));
	}
} satisfies Actions;
