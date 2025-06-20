import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// Simulate a 3-second delay
	// await new Promise((resolve) => setTimeout(resolve, 2000));

	return {
		message: 'Data loaded after 3 seconds',
		timestamp: new Date().toISOString()
	};
};
