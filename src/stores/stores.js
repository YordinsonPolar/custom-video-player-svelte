import { writable } from 'svelte/store';

export const toggleEpisodesMenu = writable(false);
export const playerError = writable(false);