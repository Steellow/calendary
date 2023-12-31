import { writable } from 'svelte/store';
import { letterCases, orientationOptions, titleAlignOptions, weekdayStyles } from './constants';

export const store = {
	paperSizeIndex: writable(0),
	orientation: writable(orientationOptions[0]),

	year: writable(2023),
	monthIndex: writable(8), // Storing index, so the dropdown work ootb

	// Title settings
	titleSize: writable(9),
	titleAlign: writable(titleAlignOptions[1]),
	titleLetterCase: writable(letterCases[0]),

	// Weekday options
	weekdaySize: writable(5),
	weekdayStyle: writable(weekdayStyles[0]),
	weekdayLetterCase: writable(letterCases[0]),

	// Date box options
	textSize: writable(5)
};
