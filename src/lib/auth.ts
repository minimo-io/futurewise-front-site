// src/lib/auth.ts
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '$databases/db';
import { JWT_SECRET } from '$env/static/private';

export interface User {
	id: string;
	email?: string;
	nostr_pubkey?: string;
	email_verified: boolean;
}

export async function createEmailUser(email: string, password: string) {
	const hashedPassword = await bcrypt.hash(password, 10);

	const [user] = await db('users')
		.insert({
			email,
			password_hash: hashedPassword
		})
		.returning(['id', 'email', 'email_verified']);

	return user;
}

// export async function createNostrUser(nostrPubkey: string) {
//   const [user] = await db('users')
//     .insert({
//       nostr_pubkey: nostrPubkey,
//       email_verified: true // Nostr users are "verified" by default
//     })
//     .returning(['id', 'nostr_pubkey', 'email_verified']);

//   return user;
// }

export async function verifyEmailLogin(email: string, password: string) {
	const user = await db('Fw_Users')
		.select('id', 'email', 'password_hash', 'email_verified')
		.where('email', email)
		.first();

	console.log('USER');
	console.log(user);

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
}

// export async function verifyNostrLogin(nostrPubkey: string, signature: string, challenge: string) {
//   // Implement Nostr signature verification here
//   // This depends on your Nostr implementation

//   const user = await db('users')
//     .select('id', 'nostr_pubkey', 'email_verified')
//     .where('nostr_pubkey', nostrPubkey)
//     .first();

//   return user;
// }

export function generateSessionToken() {
	return jwt.sign({ timestamp: Date.now() }, JWT_SECRET, { expiresIn: '7d' });
}

export async function createSession(userId: string) {
	const sessionToken = generateSessionToken();
	const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

	await db('Fw_User_Sessions').insert({
		user_id: userId,
		session_token: sessionToken,
		expires_at: expiresAt
	});

	return sessionToken;
}

export async function getUserFromSession(sessionToken: string) {
	const session = await db('Fw_User_Sessions')
		.join('Fw_Users', 'Fw_Users.id', 'Fw_User_Sessions.user_id')
		.select('Fw_Users.id', 'Fw_Users.email', 'Fw_Users.nostr_pubkey', 'Fw_Users.email_verified')
		.where('Fw_User_Sessions.session_token', sessionToken)
		.where('Fw_User_Sessions.expires_at', '>', new Date())
		.first();

	return session;
}
