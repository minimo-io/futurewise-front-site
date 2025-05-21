import { localizeHref } from '$paraglide/runtime';

export function redirectLocale(newLocale: string) {
	window.location.href = localizeHref('/', { locale: newLocale });
}

export function redirectHref(href: string) {
	window.location.href = href;
}
