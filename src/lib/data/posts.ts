import { Star } from '@lucide/svelte';

export const posts = [
	{
		title: "Introducing the Futurewise Platform",
		excerpt: "This is the excerpt for my first post and it will an awesome project, and nowone will believe it, not even me, a somehow svelte coder, turned into a Futurist.",
		content: "<p>This is the content of my first post. It&#39;s written in Markdown.</p>\n",
		date: "June 29",
		slug: "my-first-post",
		isMain: true,
		icon: Star,
		authors: [
			{
				fullName: "Nicolas Erramuspe",
				avatar: "/me.jpeg"
			},
			{
				fullName: "Claude AI",
				avatar: "/claude-logo.png"
			}
		]
	}
];