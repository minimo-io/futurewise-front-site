// src/lib/utils.js
import { browser } from '$app/environment';

/**
 * Tries to use the Web Share API to share content.
 * @param {object} data The data object for the share dialog.
 * @param {string} data.title A title for the shared content.
 * @param {string} data.text Descriptive text for the shared content.
 * @param {string} data.url The URL to share.
 */
export async function simpleShare({ title, text, url }) {
	// 1. Check if we are in the browser.
	if (!browser) {
		throw new Error('Attempted to share from the server. navigator is not defined.');
	}

	// 2. Check if the Web Share API is supported.
	if (!navigator.share) {
		throw new Error('Web Share API is not supported in this browser/environment.');
	}

	// 3. Execute the share command.
	try {
		await navigator.share({ title, text, url });
	} catch (error) {
		// --- FIX IS HERE ---
		// 1. Narrow the type: Check if the error is an instance of a standard Error object.
		if (error instanceof Error) {
			// 2. Now TypeScript knows 'error' has '.name' and '.message'.
			if (error.name !== 'AbortError') {
				throw new Error(`Sharing failed: ${error.message}`);
			}
		} else {
			// Handle non-Error objects (like strings, numbers, etc.) which are rare
			// but possible in JS and still typed as 'unknown'.
			throw new Error(`Sharing failed with an unknown error: ${String(error)}`);
		}
	}
}
