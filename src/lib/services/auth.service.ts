// src/lib/services/auth.service.ts
import bcrypt from 'bcrypt';
import type { Cookies } from '@sveltejs/kit';
import { postgreService } from '$lib/databases';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

export interface User {
	id: string;
	email?: string;
	nostr_pubkey?: string;
	email_verified: boolean;
}

export const AuthService = {
	// Define paths that require authentication
	protectedRoutes: ['/dashboard'],

	isProtectedRoute(path: string): boolean {
		return this.protectedRoutes.some((route) => path.startsWith(route));
	},

	// Create a user/password user
	// async createEmailUser(email: string, password: string) {
	// 	const hashedPassword = await bcrypt.hash(password, 10);

	// 	return await postgreService.execute(async (knex) => {
	// 		const [user] = await knex('users')
	// 			.insert({
	// 				email,
	// 				password_hash: hashedPassword
	// 			})
	// 			.returning(['id', 'email', 'email_verified']);

	// 		return user;
	// 	});
	// },

	async getUserPermissionList(session: string): Promise<string[]> {
		const user = await this.getUserFromSession(session);
		let userPermissions: string[] = [];
		if (user.id) {
			const dbPermissions = await postgreService.execute<{ permissions: string[] }>(
				async (knex) => {
					return await knex('Fw_Users').select('permissions').where('id', user.id).first();
				}
			);

			userPermissions = dbPermissions?.permissions;
			console.log('USER_PERMISSIONS_FROM_DB', userPermissions);
		}

		return userPermissions;
	},

	async verifyEmailLogin(email: string, password: string) {
		const user = await postgreService.execute(async (knex) => {
			return await knex('Fw_Users')
				.select('id', 'email', 'password_hash', 'email_verified')
				.where('email', email)
				.first();
		});

		if (!user || !user.password_hash) {
			console.error('NOT USER OR HASH');
			return null;
		}

		const isValid = await bcrypt.compare(password, user.password_hash);

		if (!isValid) {
			console.error(`IS VALID: ${isValid}`);
			return null;
		}

		return {
			id: user.id,
			email: user.email,
			email_verified: user.email_verified
		};
	},

	// Create user session token which will be used to set the cookies at
	// src/routes/login/+page.server.ts
	async createUserSession(userId: string) {
		const sessionToken = this.generateSessionToken();
		const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

		await postgreService.execute(async (knex) => {
			return await knex('Fw_User_Sessions').insert({
				user_id: userId,
				session_token: sessionToken,
				expires_at: expiresAt
			});
		});

		return sessionToken;
	},

	getAuthenticatedUser: async function (cookies: Cookies) {
		const sessionToken = cookies.get('session');

		if (!sessionToken) {
			return null;
		}

		try {
			const user = await this.getUserFromSession(sessionToken);
			return user || null;
		} catch (error) {
			console.error('Error verifying session:', error);
			return null;
		}
	},

	async getUserFromSession(sessionToken: string): Promise<User> {
		return await postgreService.execute(async (knex) => {
			return await knex('Fw_User_Sessions')
				.join('Fw_Users', 'Fw_Users.id', 'Fw_User_Sessions.user_id')
				.select('Fw_Users.id', 'Fw_Users.email', 'Fw_Users.nostr_pubkey', 'Fw_Users.email_verified')
				.where('Fw_User_Sessions.session_token', sessionToken)
				.where('Fw_User_Sessions.expires_at', '>', new Date())
				.first();
		});
	},

	generateSessionToken() {
		return jwt.sign({ timestamp: Date.now() }, JWT_SECRET, { expiresIn: '7d' });
	}
};
