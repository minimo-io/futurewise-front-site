// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from './paraglide/server';
import { sequence } from '@sveltejs/kit/hooks';
import { deLocalizeUrl, localizeHref } from '$paraglide/runtime';
import { redirect } from '@sveltejs/kit';
import { getLocale } from '$paraglide/runtime';

const allowedRoutes = [
	'/soon', // The target route itself
	'/', // Home route
	'/es', // Spanish locale route
	'/en', // English locale route
	'/finx',
	'/caresync',
	'/login',
	'/lab',
	'/dashboard',
	'/bagity'
];

// Auth middleware
const authHandle: Handle = async ({ event, resolve }) => {
	// Get auth token from cookies
	// const authToken = event.cookies.get('auth_token');

	// // Make it available to the rest of the application
	// if (authToken) {
	// 	event.locals.authToken = authToken;

	// 	try {
	// 		const userStr = event.cookies.get('auth_user');
	// 		if (userStr) {
	// 			event.locals.user = JSON.parse(userStr);
	// 		}
	// 	} catch (e) {
	// 		console.error(`Failed to parse user data: ${e}`);
	// 	}
	// }

	// Check if the route requires authentication and redirect if needed
	const delocalizedPath = deLocalizeUrl(event.url).pathname;

	// Redirect logged-in users away from auth pages
	// if (isAuthRoute(pathDelocalized.pathname) && event.locals.authToken) {
	if (!allowedRoutes.includes(delocalizedPath)) {
		throw redirect(303, localizeHref('/soon', { locale: getLocale() }));
	}

	// if (requiresAuth(pathDelocalized.pathname) && !event.locals.authToken) {
	// 	// Redirect to login page with return URL as a query parameter
	// 	throw redirect(303, `/login?returnUrl=${encodeURIComponent(pathDelocalized.pathname)}`);
	// }

	return resolve(event);
};

// creating a handle to use the paraglide middleware
const paraglideHandle: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
		event.request = localizedRequest;
		return resolve(event, {
			transformPageChunk: ({ html }) => {
				return html.replace('%lang%', locale);
			}
		});
	});

// export const handle: Handle = paraglideHandle;
export const handle = sequence(authHandle, paraglideHandle);
