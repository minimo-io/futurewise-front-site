export * from './date.utils';
export * from './redirect.utils';
export * from './smoothScroll.utils';

export function getLocaleName(uiLocale: string) {
	// create a DisplayNames instance for language‐type codes
	const languageNames = new Intl.DisplayNames([uiLocale], { type: 'language' });
	return languageNames.of(uiLocale) || uiLocale;
}
