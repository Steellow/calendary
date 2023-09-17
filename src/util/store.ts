import { writable } from 'svelte/store';

export const store = {
	paperSizeIndex: writable(0),
	orientation: writable('Landscape'),

	year: writable(2023),
	monthIndex: writable(8), // Storing index, so the dropdown work ootb

	titleSize: writable(9),
	textSize: writable(5)
};
