// vite.config.ts
import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { blogPosts } from './src/lib/data/blogPostsForVite';

export default defineConfig({
	plugins: [
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/paraglide',
			strategy: ['url', 'cookie', 'baseLocale'],
			urlPatterns: [
				{
					pattern: '/',
					localized: [
						['pt', '/'],
						['en', '/en'],
						['es', '/es']
					]
				},
				// Blog

				...blogPosts,

				{
					pattern: '/blog/:id',
					localized: [
						['pt', '/blog/:id'],
						['en', '/en/blog/:id'],
						['es', '/es/blog/:id']
					]
				},
				{
					pattern: '/blog',
					localized: [
						['pt', '/blog'],
						['es', '/es/blog'],
						['en', '/en/blog']
					]
				},

				{
					pattern: '/soon',
					localized: [
						['pt', '/em-breve'],
						['es', '/es/proximamente'],
						['en', '/en/soon']
					]
				},
				{
					pattern: '/login',
					localized: [
						['pt', '/entrar'],
						['es', '/es/entrar'],
						['en', '/en/login']
					]
				},
				{
					pattern: '/sign-up',
					localized: [
						['pt', '/cadastro'],
						['es', '/es/registro'],
						['en', '/en/sign-up']
					]
				},

				// Dashboards
				{
					pattern: '/dashboard',
					localized: [
						['pt', '/dashboard'],
						['es', '/es/dashboard'],
						['en', '/en/dashboard']
					]
				},
				{
					pattern: '/dashboard/caresync',
					localized: [
						['pt', '/dashboard/caresync'],
						['es', '/es/dashboard/caresync'],
						['en', '/en/dashboard/caresync']
					]
				},

				{
					pattern: '/bagity',
					localized: [
						['pt', '/bagity'],
						['es', '/es/bagity'],
						['en', '/en/bagity']
					]
				},

				{
					pattern: '/lab',
					localized: [
						['pt', '/lab'],
						['es', '/es/lab'],
						['en', '/en/lab']
					]
				},
				// Products
				{
					pattern: '/finx',
					localized: [
						['pt', '/finx'],
						['es', '/es/finx'],
						['en', '/en/finx']
					]
				},
				{
					pattern: '/caresync',
					localized: [
						['pt', '/caresync'],
						['es', '/es/caresync'],
						['en', '/en/caresync']
					]
				}
			]
		}),
		tailwindcss(),
		sveltekit()
	],
	server: {
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:8080',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
});

// import { paraglideVitePlugin } from '@inlang/paraglide-js';
// import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vite';

// export default defineConfig({
// 	plugins: [
// 		sveltekit(),

// 		paraglideVitePlugin({
// 			project: './project.inlang',
// 			outdir: './src/lib/paraglide',

// 			strategy: ['url', 'cookie', 'baseLocale'],
// 			urlPatterns: [
// 				{
// 					pattern: '/',
// 					localized: [
// 						['pt', '/'],
// 						['uy', '/uy/']
// 					]
// 				},

// 				{
// 					pattern: '/blog/',
// 					localized: [
// 						['pt', '/blog/'],
// 						['uy', '/uy/blog/']
// 					]
// 				},

// 				// Club
// 				{
// 					pattern: '/club/',
// 					localized: [
// 						['pt', '/clube/'],
// 						['uy', '/uy/club/']
// 					]
// 				},

// 				// Account
// 				{
// 					pattern: '/account/',
// 					localized: [
// 						['pt', '/conta/'],
// 						['uy', '/uy/cuenta/']
// 					]
// 				},

// 				// Carrinho
// 				{
// 					pattern: '/cart/',
// 					localized: [
// 						['pt', '/carrinho/'],
// 						['uy', '/uy/carrito/']
// 					]
// 				},

// 				// Produtores de vinho
// 				{
// 					pattern: '/produtores-de-vinho/:id',
// 					localized: [
// 						['pt', '/produtores-de-vinho/:id'],
// 						['uy', '/uy/productores-de-vino/:id']
// 					]
// 				},

// 				// Harmonizacoes
// 				{
// 					pattern: '/harmonizacoes/:id',
// 					localized: [
// 						['pt', '/harmonizacoes/:id'],
// 						['uy', '/uy/maridajes/:id']
// 					]
// 				},

// 				// Uva
// 				{
// 					pattern: '/uva/:id',
// 					localized: [
// 						['pt', '/uva/:id'],
// 						['uy', '/uy/uva/:id']
// 					]
// 				},

// 				// Tag
// 				{
// 					pattern: '/tag/:id',
// 					localized: [
// 						['pt', '/tag/:id'],
// 						['uy', '/uy/tag/:id']
// 					]
// 				},

// 				// Blog
// 				{
// 					pattern: '/blog/:id',
// 					localized: [
// 						['pt', '/blog/:id(.*)?'],
// 						['uy', '/uy/blog/:id(.*)?']
// 					]
// 				},

// 				{
// 					pattern: '/produto/:id',
// 					localized: [
// 						['pt', '/produto/:id(.*)?'],
// 						['uy', '/uy/producto/:id(.*)?']
// 					]
// 				},

// 				// Category & Subcategory route – intended to match exactly one segment (e.g. "/cervezas/")
// 				{
// 					pattern: '/:path/',
// 					localized: [
// 						['pt', '/:path/'],
// 						['uy', '/uy/:path/']
// 					]
// 				}
// 			]
// 		})
// 	],
// 	build: {
// 		cssCodeSplit: true
// 	},
// 	server: {
// 		port: 4000
// 	}
// });
