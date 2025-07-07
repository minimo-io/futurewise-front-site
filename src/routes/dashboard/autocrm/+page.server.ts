import type { Actions } from '@sveltejs/kit';
import { logoutAction } from '..';

export const actions = {
	logout: logoutAction
} satisfies Actions;
