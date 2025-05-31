<script lang="ts">
	import { KeySquare } from '@lucide/svelte';
	import TitleSection from '../TitleSection.svelte';
	import { localizeHref } from '$paraglide/runtime';
	import { m } from '$paraglide/messages';

	// backticks preserve newlines and braces
	const snippet = `// Get a user’s access token and profile data
import Futurewise from '@futurewise-lat/node';
const futurewise = new Futurewise('sk_example_123456789');
const profile = await futurewise.caresync.getProfileAndToken({
  code: '01E2RJ4C05B52KKZ8FSRDAP23J',
  clientID: 'client_123456789',
});`;
</script>

<section class="max-w-fw relative -top-8 mx-auto my-10 md:-top-1 md:my-16">
	<!-- Subtitle -->
	<TitleSection titleLeft="Developers" titleRight="First" forceFlexRow={true} />

	<div class="flex flex-col md:grid md:grid-cols-3">
		<!-- Right text -->
		<div class="mt-7 mr-9 md:col-span-1">
			<h3 class="mb-2 text-xl font-bold tracking-wider">
				{@html m.devSlogan()}
			</h3>
			{@html m.devText()}
			<div class="mt-8 flex flex-row items-center md:mt-0">
				<a href={localizeHref('/docs')} class="fw-button !my-1 mr-4">{m.documentation()}</a>
				<button
					class="text-primary border-base-content !my-1 flex flex-row items-center font-sans text-sm md:text-base"
				>
					<div class="hidden md:block">
						<KeySquare class="h-4" />
					</div>
					<div>{m.getYourAPIKey()}</div>
				</button>
			</div>
		</div>

		<!-- Code -->
		<div
			class="relative mt-8 rounded-md border md:-top-7 md:col-span-2 md:mt-0 md:ml-12"
			style="border-width:0.5px"
		>
			<div class=" mb-4 flex border-b px-3 py-[8px]">
				<button
					class="lang-selected text-primary mr-2 px-3 py-1 text-[18px] font-bold tracking-wider"
				>
					Node.js
				</button>
				<button class="mr-2 px-3 py-1 text-[18px] tracking-wider text-white">Python</button>
				<button class="rounded-t-md px-3 py-1 text-[18px] tracking-wider text-white">Curl</button>
			</div>

			<code class="block overflow-x-auto rounded-lg p-4 font-mono text-sm whitespace-pre">
				<span class="text-[#717AA8]">
					// Get a user’s access token and
					<br />// profile data from an Identity Provider
				</span>
				<br /><br />
				<span class="text-[#D272FF]">import</span>
				<span class="text-[#6B84FF]"> Futurewise </span>
				<span class="text-[#D272FF]">from</span>
				<span class="text-[#37F0C3]">'@futurewise-lat/node'</span>;
				<br /><br />
				<span class="text-[#D272FF]">const</span>
				<span class="text-[#6B84FF]"> futurewise </span> =
				<span class="text-[#D272FF]">new</span>
				<span class="text-[#6B84FF]"> Futurewise</span>(
				<span class="text-[#37F0C3]">'sk_example_123456789'</span>);
				<br /><br />
				<span class="text-[#D272FF]">const</span>
				<span class="text-[#6B84FF]"> profile </span>=
				<span class="text-[#D272FF]">await</span>
				<span class="text-[#6B84FF]"> futurewise.finx.payin.pix{'{'}</span>
				<br />
				<span class="relative pl-8">
					<span class="text-[#D272FF]">code</span>:
					<span class="text-[#37F0C3]">'01E2RJ4C05B52KKZ8FSRDAP23J',</span>
				</span>
				<br />
				<span class="relative pl-8"
					><span class="text-[#D272FF]">clientID</span>:
					<span class="text-[#37F0C3]">'client_123456789',</span>
				</span>

				<br />
				<span>{'}'});</span>
			</code>
		</div>
		<!-- Editors -->
		<div class="relative col-span-3 mt-5 pr-5 text-right font-sans text-base text-white md:-top-8">
			<span class="text-primary mr-2 text-base font-bold md:text-lg">></span>
			{m.devConfira()}
			<a href="/" class="text-primary font-pixel ml-1 underline hover:opacity-50">VSCode</a>
			{m.and()}
			<a href="/" class="text-primary font-pixel ml-1 underline hover:opacity-50">Zed</a>
		</div>
	</div>

	<div class="absolute -top-[10%] -left-[12%] scale-75 opacity-30 md:-top-[15%]">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>

	<div class="absolute -right-[8%] bottom-[5%] hidden scale-85 opacity-80 md:block">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>
</section>
