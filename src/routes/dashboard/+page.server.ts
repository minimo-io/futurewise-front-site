// // src/routes/logout/+page.server.ts
// import type { Actions } from './$types';
// import { redirect } from '@sveltejs/kit';
// import db from '$databases/db';
// import { localizeHref } from '$paraglide/runtime';

// export const actions = {
// 	default: async ({ cookies }) => {
// 		const sessionToken = cookies.get('session');

// 		if (sessionToken) {
// 			// Remove session from database
// 			await db('Fw_User_Sessions').where('session_token', sessionToken).del();
// 		}

// 		cookies.delete('session', { path: '/' });
// 		redirect(303, localizeHref('/login'));
// 	}
// } satisfies Actions;

// src/routes/logout/+page.server.ts
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import { postgreService } from '$lib/databases';
import { localizeHref } from '$paraglide/runtime';

export const actions = {
	default: async ({ cookies }) => {
		const sessionToken = cookies.get('session');

		if (sessionToken) {
			try {
				// Remove session from database
				await postgreService.execute(async (knex) => {
					return await knex('Fw_User_Sessions').where('session_token', sessionToken).del();
				});
			} catch (error) {
				// Log error but don't prevent logout
				console.error('Error removing session from database:', error);
			}
		}

		cookies.delete('session', { path: '/' });
		redirect(303, localizeHref('/login'));
	}
} satisfies Actions;
