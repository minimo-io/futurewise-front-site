import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import pdf1 from '$lib/data/invoices/123e4567-e89b-12d3-a456-426614174000.pdf?url';

const invoices: Record<string, string> = {
	'123e4567-e89b-12d3-a456-426614174000': pdf1
};

export const GET: RequestHandler = async ({ params, fetch }) => {
	const { id } = params;

	const pdfUrl = invoices[id];

	if (!pdfUrl) {
		error(404, 'Invoice not found');
	}

	try {
		const response = await fetch(pdfUrl);
		const pdfBuffer = await response.arrayBuffer();

		return new Response(pdfBuffer, {
			headers: {
				'Content-Type': 'application/pdf',
				'Content-Disposition': `inline; filename="${id}.pdf"`
			}
		});
	} catch (err) {
		console.error('Error fetching PDF:', err);
		error(500, 'Error loading invoice');
	}
};
