import { writable } from 'svelte/store';
import { orientationOptions, weekdayStyles } from './constants';

export const store = {
	paperSizeIndex: writable(0),
	orientation: writable(orientationOptions[0]),

	year: writable(2023),
	monthIndex: writable(8), // Storing index, so the dropdown work ootb

	titleSize: writable(9),
	weekdaySize: writable(5),
	textSize: writable(5),

	weekdayStyle: writable(weekdayStyles[0])
};
