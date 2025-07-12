import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';

const postsDir = path.resolve(process.cwd(), 'src/lib/data/posts');
const outputDir = path.resolve(process.cwd(), 'src/lib/data');
const outputFile = path.join(outputDir, 'posts.ts');

// Function to format date as "Month Day"
function formatDate(dateString, locale) {
	const date = new Date(dateString);
	const options = { month: 'long', day: 'numeric' };
	return date.toLocaleDateString(locale, options);
}

const languages = ['en', 'es', 'pt'];
const postsByLanguage = {};
languages.forEach((lang) => {
	postsByLanguage[lang] = [];
});

const allPosts = [];

fs.readdirSync(postsDir)
	.filter((file) => file.endsWith('.md'))
	.forEach((file) => {
		const match = file.match(/^(.*)-([a-z]{2})\.md$/);
		if (!match) {
			console.warn(`Skipping file with invalid name format: ${file}. Expected format: slug-lang.md`);
			return;
		}

		const slug = match[1];
		const lang = match[2];

		if (!languages.includes(lang)) {
			console.warn(
				`Skipping file with unknown language: ${file}. Supported languages are: ${languages.join(
					', '
				)}`
			);
			return;
		}

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

		const post = {
			title: data.title,
			excerpt: data.excerpt,
			content: htmlContent,
			date: data.date, // Store raw date for sorting
			slug: lang === 'pt' ? `/blog/${slug}` : `/${lang}/blog/${slug}`,
			isMain: data.isMain || false,
			iconName: data.icon || null, // Store as iconName for now
			authors: authors
		};

				postsByLanguage[lang].push(post);
		allPosts.push(post);
	});

// Sort posts by date in descending order (newest first)
languages.forEach((lang) => {
	postsByLanguage[lang].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

// Collect all unique icons used
const iconsUsed = new Set();
allPosts.forEach((post) => {
	if (post.iconName && typeof post.iconName === 'string') {
		iconsUsed.add(post.iconName);
	}
});

// Generate imports
const iconImports =
	Array.from(iconsUsed).length > 0
		? `import { ${Array.from(iconsUsed).join(', ')} } from '@lucide/svelte';

`
		: `import { type Icon as IconType } from '@lucide/svelte';

`;

// Build the posts object manually to include proper icon references
let postsObject = 'export const posts = {\n';
for (const lang of languages) {
	postsObject += `\t${lang}: [\n`;
	const posts = postsByLanguage[lang];
	posts.forEach((post, index) => {
		const iconRef = post.iconName ? post.iconName : 'undefined';

		postsObject += '\t\t{\n';
		postsObject += `\t\t\ttitle: ${JSON.stringify(post.title)},\n`;
		postsObject += `\t\t\texcerpt: ${JSON.stringify(post.excerpt)},\n`;
		postsObject += `\t\t\tcontent: ${JSON.stringify(post.content)},\n`;
		postsObject += `			date: ${JSON.stringify(formatDate(post.date, lang))},
`;
		postsObject += `\t\t\tslug: ${JSON.stringify(post.slug)},\n`;
		postsObject += `\t\t\tisMain: ${post.isMain},\n`;
		postsObject += `\t\t\ticon: ${iconRef},\n`;
		postsObject += '\t\t\tauthors: [\n';

		post.authors.forEach((author, authorIndex) => {
			postsObject += '\t\t\t\t{\n';
			postsObject += `\t\t\t\t\tfullName: ${JSON.stringify(author.fullName)},\n`;
			postsObject += `\t\t\t\t\tavatar: ${JSON.stringify(author.avatar)}\n`;
			postsObject += '\t\t\t\t}';
			if (authorIndex < post.authors.length - 1) postsObject += ',';
			postsObject += '\n';
		});

		postsObject += '\t\t\t]\n';
		postsObject += '\t\t}';
		if (index < posts.length - 1) postsObject += ',';
		postsObject += '\n';
	});
	postsObject += `\t]`;
	if (languages.indexOf(lang) < languages.length - 1) {
		postsObject += ',\n';
	} else {
		postsObject += '\n';
	}
}
postsObject += '};';

const fileContent = `${iconImports}${postsObject}`;

fs.writeFileSync(outputFile, fileContent);

console.log('Posts processed successfully!');