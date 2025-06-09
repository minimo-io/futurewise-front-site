// src/routes/login/+page.server.ts
import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { verifyEmailLogin, createSession } from '$lib/auth';
import { localizeHref } from '$paraglide/runtime';
// import bcrypt from 'bcrypt';

export const load: PageServerLoad = async ({ cookies }) => {
	// If user is already logged in, redirect to dashboard
	const sessionToken = cookies.get('session');
	if (sessionToken) {
		// You could verify the session here
		redirect(302, '/dashboard');
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

		const user = await verifyEmailLogin(email, password);
		console.log('USER FROM ACTION');
		console.log(user);
		if (!user) {
			return fail(400, { email, incorrect: true });
		}

		const sessionToken = await createSession(user.id);

		cookies.set('session', sessionToken, {
			path: '/',
			httpOnly: true,
			secure: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 7 // 7 days
		});

		redirect(303, localizeHref('/dashboard'));
	}

	// Nostr login action
	// nostr: async ({ cookies, request }) => {
	// 	const data = await request.formData();
	// 	const nostrPubkey = data.get('nostrPubkey') as string;
	// 	const signature = data.get('signature') as string;
	// 	const challenge = data.get('challenge') as string;

	// 	if (!nostrPubkey || !signature || !challenge) {
	// 		return fail(400, { nostr: true, missing: true });
	// 	}

	// 	let user = await verifyNostrLogin(nostrPubkey, signature, challenge);

	// 	// If user doesn't exist, create them
	// 	if (!user) {
	// 		user = await createNostrUser(nostrPubkey);
	// 	}

	// 	const sessionToken = await createSession(user.id);

	// 	cookies.set('session', sessionToken, {
	// 		path: '/',
	// 		httpOnly: true,
	// 		secure: true,
	// 		sameSite: 'strict',
	// 		maxAge: 60 * 60 * 24 * 7
	// 	});

	// 	redirect(303, '/dashboard');
	// },

	// Register action
	// register: async ({ cookies, request }) => {
	// 	const data = await request.formData();
	// 	const email = data.get('email') as string;
	// 	const password = data.get('password') as string;

	// 	if (!email) {
	// 		return fail(400, { email, missing: 'email' });
	// 	}

	// 	if (!password || password.length < 8) {
	// 		return fail(400, { email, missing: 'password', weak: true });
	// 	}

	// 	try {
	// 		const user = await createEmailUser(email, password);
	// 		const sessionToken = await createSession(user.id);

	// 		cookies.set('session', sessionToken, {
	// 			path: '/',
	// 			httpOnly: true,
	// 			secure: true,
	// 			sameSite: 'strict',
	// 			maxAge: 60 * 60 * 24 * 7
	// 		});

	// 		redirect(303, '/dashboard');
	// 	} catch (error) {
	// 		console.log(`Error: ${error}`);
	// 		return fail(400, { email, exists: true });
	// 	}
	// }
} satisfies Actions;
