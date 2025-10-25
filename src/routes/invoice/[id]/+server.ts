// src/routes/invoice/[id]/+server.ts
import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';

export const GET: RequestHandler = async ({ params }) => {
	const { id } = params;
	// const password = url.searchParams.get('password');

	// if (password !== 'secret123') {
	// 	return new Response('Unauthorized', { status: 401 });
	// }

	// Make path relative to project root, which is safer in dev and prod
	const filePath = path.resolve(process.cwd(), `src/lib/data/invoices/${id}.pdf`);

	try {
		const pdfBuffer = await fs.readFile(filePath); // Node Buffer

		// Convert Buffer -> Uint8Array so TypeScript accepts it as BodyInit
		const body = new Uint8Array(pdfBuffer);

		return new Response(body, {
			headers: {
				'Content-Type': 'application/pdf',
				'Content-Disposition': `inline; filename="invoice-${id}.pdf"`
			}
		});
	} catch (err) {
		console.error(err);
		return new Response('Invoice not found', { status: 404 });
	}
};
