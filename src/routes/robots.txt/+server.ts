// src/routes/robots.txt/+server.ts
export const prerender = true;

export async function GET({ url }) {
	const robotsTxt = `User-agent: *
Allow: /

# Block dashboard and admin areas
Disallow: /dashboard/
Disallow: /*/dashboard/

# Block API endpoints
Disallow: /api/
Disallow: /*/api/

# Reference sitemap
Sitemap: ${url.origin}/sitemap.xml`;

	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain'
		}
	});
}
