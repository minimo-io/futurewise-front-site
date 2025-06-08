// // src/hooks.ts

import type { Reroute } from '@sveltejs/kit';
import { deLocalizeUrl } from '$paraglide/runtime';

export const reroute: Reroute = ({ url }) => {
	const delocalizedPath = deLocalizeUrl(url).pathname;
	// console.log(`Original URL: ${url.pathname}, Delocalized: ${delocalizedPath}`);

	// Temporarily redirect all routes to "/soon" except the "/soon" route itself
	// to avoid infinite redirect loops
	// const allowedRoutes = [
	// 	'/soon', // The target route itself
	// 	'/', // Home route
	// 	'/es', // Spanish locale route
	// 	'/en', // English locale route
	// 	'/finx',
	// 	'/caresync',
	// 	'/login',
	// 	'/lab'
	// ];

	// // Temporarily redirect all routes to "/soon" except allowed routes
	// if (!allowedRoutes.includes(delocalizedPath)) {
	// 	return localizeHref('/soon');
	// }
	return delocalizedPath;
};
