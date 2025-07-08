// src/hooks.server.ts
import { redirect, type Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from './paraglide/server';
import { sequence } from '@sveltejs/kit/hooks';
import { deLocalizeUrl, localizeHref } from '$paraglide/runtime';
import { isProtectedRoute } from '$lib/auth';
// import { deLocalizeUrl, localizeHref } from '$paraglide/runtime';
// import { redirect } from '@sveltejs/kit';
// import { getLocale } from '$paraglide/runtime';

// Auth middleware
const authHandle: Handle = async ({ event, resolve }) => {
	// Get auth token from cookies
	const authToken = event.cookies.get('session');

	// // Make it available to the rest of the application
	if (authToken) {
		event.locals.session = authToken;

		// 	try {
		// 		const userStr = event.cookies.get('auth_user');
		// 		if (userStr) {
		// 			event.locals.user = JSON.parse(userStr);
		// 		}
		// 	} catch (e) {
		// 		console.error(`Failed to parse user data: ${e}`);
		// 	}
		// }
	}

	// Check if the route requires authentication and redirect if needed
	const pathDelocalized = deLocalizeUrl(event.url.href);

	if (isProtectedRoute(pathDelocalized.pathname) && !event.locals.session) {
		// 	// Redirect to login page with return URL as a query parameter
		throw redirect(
			303,
			localizeHref(`/login?returnUrl=${encodeURIComponent(pathDelocalized.pathname)}`)
		);
	}

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
