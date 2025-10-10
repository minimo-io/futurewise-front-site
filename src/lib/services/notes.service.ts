// src/lib/services/notes.service.ts
import { browser } from '$app/environment';
import { writable, get } from 'svelte/store';
import type { Note } from '$types/notes.types';

function createNotesService() {
	const STORE_KEY = 'fw-notes';
	const MAX_TITLE_LENGTH = 18;
	const notesStore = writable<Note[]>([]);

	// Load initial data
	if (browser) {
		try {
			const initialData: Note[] = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
			initialData.sort((a, b) => b.lastUpdated - a.lastUpdated);
			notesStore.set(initialData);
		} catch (e) {
			console.error('NotesService: Failed to load notes.', e);
			notesStore.set([]);
		}

		// Auto-save to localStorage on changes
		notesStore.subscribe((notes) => {
			localStorage.setItem(STORE_KEY, JSON.stringify(notes));
		});
	}

	return {
		// Expose the store for reactive subscriptions
		store: notesStore,

		get notes() {
			return get(notesStore);
		},

		update(id: string, content: string) {
			const currentNotes = get(notesStore);
			const index = currentNotes.findIndex((n) => n.id === id);

			const firstLine = content.split('\n')[0].trim();
			// const derivedTitle = firstLine.length > 0 ? firstLine : 'Untitled Note';
			const derivedTitle =
				firstLine.length > 0
					? firstLine.length > MAX_TITLE_LENGTH
						? firstLine.substring(0, MAX_TITLE_LENGTH) + '...'
						: firstLine
					: 'Untitled Note';

			const noteToSave: Note = {
				id: id,
				title: derivedTitle,
				content: content,
				lastUpdated: Date.now()
			};

			let updatedNotes: Note[];
			if (index > -1) {
				updatedNotes = [...currentNotes];
				updatedNotes[index] = noteToSave;
				updatedNotes.sort((a, b) => b.lastUpdated - a.lastUpdated);
			} else {
				updatedNotes = [noteToSave, ...currentNotes];
			}

			notesStore.set(updatedNotes);
		},

		delete(id: string) {
			const currentNotes = get(notesStore);
			notesStore.set(currentNotes.filter((note) => note.id !== id));
		},

		get(id: string): Note | undefined {
			const currentNotes = get(notesStore);
			return currentNotes.find((n) => n.id === id);
		},

		getSize(id: string): number {
			const note = this.get(id);
			if (!note) return 0;

			// Calculate size in KB (content + metadata)
			const noteString = JSON.stringify(note);
			const sizeInBytes = new Blob([noteString]).size;
			const sizeInKB = sizeInBytes / 1024;

			return parseFloat(sizeInKB.toFixed(2));
		}
	};
}

export const NotesService = createNotesService();
