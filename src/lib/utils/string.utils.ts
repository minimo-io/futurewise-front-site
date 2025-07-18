import type { PostAuthor } from '$types/blog.types';
import type { MachineType } from '$types/caresync-machines.types';

export function authorsComposeName(authors: PostAuthor[]): string {
	const firstNames = authors.map((author) => author.fullName.trim().split(' ')[0]);
	return firstNames.join(' & ');
}

export function machineTypeCode(type: MachineType | string) {
	if (type == 'NOTEBOOK') {
		return 'NT';
	} else if (type == 'DESKTOP') {
		return 'DT';
	} else if (type == 'ALLINONE') {
		return 'DT';
	} else {
		return 'N/A';
	}
}
