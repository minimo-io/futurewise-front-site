import { localizeHref } from '$paraglide/runtime';
import type { PageServerLoad } from '../$types';
import { error, redirect } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';

export const load: PageServerLoad = () => {
	const newUuIdV4 = uuidv4();
	// create new note
	if (newUuIdV4) {
		redirect(302, localizeHref(`/dashboard/notes/${newUuIdV4}`));
	}

	error(404, 'No note was founded.');
};
