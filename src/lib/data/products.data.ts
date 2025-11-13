import { Activity, Cable, ShoppingBag, Zap } from '@lucide/svelte';
import { LabProduct, Product, type ProductsList } from '$lib/type/products.types';
import { localizeHref } from '$paraglide/runtime';
import { m } from '$paraglide/messages';

export const PRODUCTS: ProductsList = [
	{
		id: Product.CARE,
		name: Product.CARE,
		isMain: true,
		slogan: m.productCareSlogan(),
		sloganSimple: m.productCareSloganSimple(),
		details: m.productCareDetails(),
		icon: Activity,
		isBold: true,
		primary: false,
		underDevelopment: false,
		url: localizeHref('/care')
	},

	{
		id: Product.STORE,
		name: Product.STORE,
		isMain: true,
		slogan: m.productStoreSlogan(),
		sloganSimple: m.productStoreSloganSimple(),
		details: m.productStoreDetails(),
		icon: ShoppingBag,
		// underDevelopment: true,
		primary: false,
		isBold: true,
		online: true,
		url: localizeHref('/store')
	},
	{
		id: Product.PAY,
		name: Product.PAY,
		isMain: true,
		slogan: m.productPaySlogan(),
		sloganSimple: m.productPaySloganSimple(),
		details: m.productPayDetails(),
		icon: Zap,
		isBold: true,
		primary: false,
		underDevelopment: true,
		url: localizeHref('/pay')
	},

	{
		id: Product.APIS,
		name: 'APIs',
		isMain: true,
		slogan: m.productAPISlogan(),
		sloganSimple: m.productAPISloganSimple(),
		details: m.productAPIDetails(),
		icon: Cable,
		primary: true,
		isBold: true,
		underDevelopment: true,
		url: localizeHref('https://api.futurewise.lat/docs')
	},
	{
		id: Product.NOTES,
		name: Product.NOTES,
		isMain: false,
		slogan: m.productNotesSlogan(),
		sloganSimple: m.productNotesSloganSimple(),
		details: m.productNotesDetails(),
		icon: Cable,
		primary: true,
		isBold: true,
		underDevelopment: true,
		url: localizeHref('/dashboard/notes')
	}

	// {
	// 	id: 'delibra',
	// 	name: 'Delibra',
	// 	slogan: 'Fluxo Integrado de Envios',
	// 	sloganSimple: 'Fluxo integrado de envios',
	// 	details: 'Automação, rastreio<br />e melhor preço',
	// 	icon: Box,
	// 	isBold: true,
	// 	url: localizeHref('/delibra')
	// },

	// {
	// 	id: 'nostradamus',
	// 	name: 'Nostradamus',
	// 	slogan: 'On-Demand Nostr Intelligence',
	// 	sloganSimple: 'On-Demand Nostr Intelligence',
	// 	details: 'Sats-Driven Nostr Insights<br />See Further.',
	// 	icon: WandSparkles,
	// 	isBold: true,
	// 	url: localizeHref('/nostradamus')
	// }
];

export const PRODUCTS_FROM_LAB: ProductsList = [
	{
		id: LabProduct.LNBEER,
		name: LabProduct.LNBEER,
		logo: '/products/lnbeer-logo.png',
		isMain: true,
		slogan: m.productLnBeerSlogan(),
		sloganSimple: '',
		details: m.productLnBeerDetails(),
		isBold: true,
		primary: true,
		underDevelopment: true,
		url: 'https://www.figma.com/design/A9ZpwzFjlfZSZlWIrNfztG/Lightning-Beer?node-id=2-3&t=XKNaVwyAoxWPFXNB-1'
	},
	{
		id: LabProduct.BETIZEN,
		name: LabProduct.BETIZEN,
		logo: '/products/betizen-logo.png',
		isMain: true,
		slogan: m.productBetizenSlogan(),
		sloganSimple: '',
		details: m.productBetizenDetails(),
		isBold: true,
		primary: true,
		underDevelopment: true,
		url: 'https://www.betizen.org'
	}
];
