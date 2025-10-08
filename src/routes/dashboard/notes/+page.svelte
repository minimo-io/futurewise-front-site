<script lang="ts">
	import { onMount } from 'svelte';
	import ActionsNotes from './components/ActionsNotes.svelte';
	import { Maximize } from '@lucide/svelte';
	import { m } from '$paraglide/messages';

	let noteTextarea;
	let noteContent = $state('');
	onMount(() => {
		noteTextarea.focus();
		setTimeout(() => {}, 300);
	});
</script>

<div class="flex flex-1 flex-col justify-start">
	<ActionsNotes />
	<div class="relative flex h-full justify-start">
		<button
			onclick={async () => {
				const elem = document.getElementById('note');
				if (elem?.requestFullscreen) {
					await elem.requestFullscreen();
					elem.focus();
				} else {
					// Show toast in the future
					alert('Sorry, your browser does not support full-screen');
				}
			}}
			class="absolute top-5 right-5 z-50"
		>
			<Maximize class="text-neutral h-5" />
		</button>
		<textarea
			bind:this={noteTextarea}
			bind:value={noteContent}
			placeholder={m.addNotePlaceholder()}
			id="note"
			name="note"
			spellcheck="false"
			class="textarea textarea-neutral text-base-content h-full w-full border-0 font-mono text-sm font-semibold focus:outline-0"
		></textarea>
	</div>
</div>
