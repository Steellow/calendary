import { writable } from 'svelte/store';

export const store = {
	titleSize: writable(9),
	textSize: writable(5)
};