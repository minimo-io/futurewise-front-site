import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';

const postsDir = path.resolve(process.cwd(), 'src/lib/data/posts');
const outputDir = path.resolve(process.cwd(), 'src/lib/data');
const outputFile = path.join(outputDir, 'posts.ts');

// Function to format date as "Month Day"
function formatDate(dateString) {
	const date = new Date(dateString);
	const options = { month: 'long', day: 'numeric' };
	return date.toLocaleDateString('en-US', options);
}

const posts = fs
	.readdirSync(postsDir)
	.filter((file) => file.endsWith('.md'))
	.map((file) => {
		const filePath = path.join(postsDir, file);
		const content = fs.readFileSync(filePath, 'utf-8');
		const { data, content: body } = matter(content);
		const htmlContent = marked(body);

		// Map 'name' to 'fullName' for authors
		const authors = data.authors
			? data.authors.map((author) => ({
					fullName: author.name,
					avatar: author.avatar
				}))
			: [];

		return {
			title: data.title,
			excerpt: data.excerpt,
			content: htmlContent,
			date: data.date ? formatDate(data.date) : data.date,
			slug: file.replace(/\.md$/, ''),
			isMain: data.isMain || false,
			iconName: data.icon || null, // Store as iconName for now
			authors: authors
		};
	});

// Collect all unique icons used
const iconsUsed = new Set();
posts.forEach((post) => {
	if (post.iconName && typeof post.iconName === 'string') {
		iconsUsed.add(post.iconName);
	}
});

// Generate imports
const iconImports =
	Array.from(iconsUsed).length > 0
		? `import { ${Array.from(iconsUsed).join(', ')} } from '@lucide/svelte';\n\n`
		: `import { type Icon as IconType } from '@lucide/svelte';\n\n`;

// Build the posts array manually to include proper icon references
let postsArray = 'export const posts = [\n';
posts.forEach((post, index) => {
	const iconRef = post.iconName ? post.iconName : 'undefined';

	postsArray += '\t{\n';
	postsArray += `\t\ttitle: ${JSON.stringify(post.title)},\n`;
	postsArray += `\t\texcerpt: ${JSON.stringify(post.excerpt)},\n`;
	postsArray += `\t\tcontent: ${JSON.stringify(post.content)},\n`;
	postsArray += `\t\tdate: ${JSON.stringify(post.date)},\n`;
	postsArray += `\t\tslug: ${JSON.stringify(post.slug)},\n`;
	postsArray += `\t\tisMain: ${post.isMain},\n`;
	postsArray += `\t\ticon: ${iconRef},\n`;
	postsArray += '\t\tauthors: [\n';

	post.authors.forEach((author, authorIndex) => {
		postsArray += '\t\t\t{\n';
		postsArray += `\t\t\t\tfullName: ${JSON.stringify(author.fullName)},\n`;
		postsArray += `\t\t\t\tavatar: ${JSON.stringify(author.avatar)}\n`;
		postsArray += '\t\t\t}';
		if (authorIndex < post.authors.length - 1) postsArray += ',';
		postsArray += '\n';
	});

	postsArray += '\t\t]\n';
	postsArray += '\t}';
	if (index < posts.length - 1) postsArray += ',';
	postsArray += '\n';
});
postsArray += '];';

const fileContent = `${iconImports}${postsArray}`;

fs.writeFileSync(outputFile, fileContent);

console.log('Posts processed successfully!');
