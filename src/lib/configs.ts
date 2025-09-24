export const AppConfig = {
	// apiUrl: import.meta.env.DEV ? '/api' : 'https://api.futurewise.lat',
	apiUrl: import.meta.env.DEV ? 'https://api.futurewise.lat' : 'https://api.futurewise.lat',
	calendar: 'https://calendar.app.google/oDbeDazTLXApijoR8',
	status: 'https://stats.uptimerobot.com/pPaLEt4eBM',
	care: {
		deviceRefreshIntervalSeconds: 30
	},
	fw: {
		founded: '2025-05-02',
		socials: {
			github: 'https://github.com/futurewise-lat',
			huggingface: 'https://huggingface.co/futurewise',
			npm: 'https://npmjs.com',
			linkedin: 'https://www.linkedin.com/in/nicolas-erramuspe/',
			nostr: 'https://primal.net/p/npub1jnmckwadeqv4es7r4nug37xur04rasnmv8h35m0la4ukfxfj42cq4un095'
		}
	},

	dashboards: {
		care: {
			base: '/dashboard/care',
			alerts: '/dashboard/care/alerts',
			services: '/dashboard/care/services',
			device: '/dashboard/care/device/',
			actions: {
				addAgent: '/dashboard/care/add-agent',
				addDevice: '/dashboard/care/add-device'
			}
		}
	}
};
