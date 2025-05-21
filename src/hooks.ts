// // src/hooks.ts

import type { Reroute } from '@sveltejs/kit';
import { deLocalizeUrl } from '$paraglide/runtime';

export const reroute: Reroute = ({ url }) => {
	const delocalizedPath = deLocalizeUrl(url).pathname;
	// console.log(`Original URL: ${url.pathname}, Delocalized: ${delocalizedPath}`);
	return delocalizedPath;
};
