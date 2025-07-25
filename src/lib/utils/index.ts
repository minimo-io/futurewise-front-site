import type { Action } from 'svelte/action';
import { smoothScroll } from './smoothScroll.utils';

export * from './date.utils';
export * from './redirect.utils';
export * from './smoothScroll.utils';
export * from './string.utils';
// export * from './auth.utils';

export function getLocaleName(uiLocale: string) {
	// create a DisplayNames instance for language‐type codes
	const languageNames = new Intl.DisplayNames([uiLocale], { type: 'language' });
	return languageNames.of(uiLocale) || uiLocale;
}

export const conditionalSmoothScroll: Action<HTMLElement, string> = (node, url) => {
	if (url === '#know-more') {
		return smoothScroll(node); // must return { destroy } or nothing
	}
};
