export const AppConfig = {
	// apiUrl: import.meta.env.DEV ? '/api' : 'https://api.futurewise.lat',
	apiUrl: import.meta.env.DEV ? 'https://api.futurewise.lat' : 'https://api.futurewise.lat',
	calendar: 'https://calendar.app.google/oDbeDazTLXApijoR8',
	status: 'https://stats.uptimerobot.com/pPaLEt4eBM',
	caresync: {
		deviceRefreshIntervalSeconds: 30
	},
	fw: {
		founded: '2025-05-02',
		socials: {
			github: 'https://github.com/futurewise-lat',
			huggingface: 'https://huggingface.co/futurewise',
			npm: 'https://npmjs.com',
			linkedin: 'https://www.linkedin.com/in/nicolas-erramuspe/',
			nostr: 'https://primal.net/p/npub1wujhdsytm3w6g0mpsqh8v7ezx83jcm64dlkwuqgm5v8lv0pds55ssudkw0'
		}
	}
};
