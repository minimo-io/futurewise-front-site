<script lang="ts">
	import type { Post } from '$lib/type/blog.types';
	import { Globe, MessageCircleMore, Sparkles } from '@lucide/svelte';
	import TopPostsCard from './topPostsCard.svelte';
	let articles: Post[] = [
		{
			title: 'Introducing the Futurewise Platform',
			excerpt:
				'Futurewise is here—an open platform designed to power the next era of digital experiences. Built for developers, creators, and visionaries, it redefines how intelligent apps are imagined, scaled, and deployed across ecosystems.',

			date: 'Janeiro 2',
			slug: '/#',
			isMain: true,
			icon: Sparkles,
			authors: [
				{ avatar: '/me.jpeg', fullName: 'Nicolas Erramuspe' },
				{ avatar: '/claude-logo.png', fullName: 'Claude AI' }
			]
		},
		{
			title: 'WPP and Futurewise: Bringing AI to the creative process',
			excerpt:
				'Futurewise and WPP are joining forces to transform creativity through generative AI. This partnership puts advanced AI tools directly into the hands of global creative teams—unlocking new dimensions of storytelling, design, and production at scale.',

			date: 'Julho 1',
			slug: '/#',
			isMain: false,
			icon: Globe,
			authors: [
				{ avatar: '/chatgpt-logo.png', fullName: 'ChatGPT AI' },
				{ avatar: '/me.jpeg', fullName: 'Nicolas Erramuspe' }
			]
		},
		{
			title: 'iOS developers can now offer commission-free payments on web',
			excerpt:
				'Big change for developers: iOS apps can now offer web-based, commission-free payments. This marks a pivotal moment for the open web and empowers developers to take back control of their monetization strategies—fully aligned with Futurewise principles.',

			date: 'Setembro 22',
			slug: '/#',
			isMain: false,
			icon: MessageCircleMore,
			authors: [
				{ avatar: '/claude-logo.png', fullName: 'Claude AI' },
				{ avatar: '/me.jpeg', fullName: 'Nicolas Erramuspe' }
			]
		}
	];
</script>

<div class="border-base-200 relative grid grid-cols-1 gap-1 border-b md:grid-cols-3 md:gap-0">
	{#each articles as article, i (i)}
		<TopPostsCard {article} />
	{/each}
</div>
