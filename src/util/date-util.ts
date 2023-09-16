/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @param {int} The month number, not 0 based
 * @param {int} The year, not zero based, required to account for leap years
 * @return {Date[]} List with date objects for each day of the month
 */
export function getDaysInMonth(year: number, month: number): Date[] {
	const howManyDays: number = new Date(year, month, 0).getDate();
	const result = [];

	for (let i = 1; i <= howManyDays; i++) {
		result.push(new Date(year, month - 1, i));
	}

	return result;
}

export const isMonday = (date: Date): boolean => date.getDay() == 1;

/**
 * @returns Returns weekday number, starting from 1
 */
export const getWeekdayFromMonday = (date: Date): number =>
	date.getDay() == 0 ? 7 : date.getDay();

// Starts form 0
export const getWeekdayIndexFromMonday = (date: Date): number => getWeekdayFromMonday(date) - 1;

/**
 * @returns Returns how many full calendar weeks is in that week,
 * first and last week may be partial weeks (e.g. if week star from Sunday)
 */
export const getWeekCount = (year: number, month: number): number => {
	const firstOfMonth: Date = new Date(year, month - 1, 1);
	const lastOfMonth: Date = new Date(year, month, 0);

	const firstOfMonthWeekdayIndex = getWeekdayIndexFromMonday(firstOfMonth);

	const used = firstOfMonthWeekdayIndex + lastOfMonth.getDate();
	return Math.ceil(used / 7);
};

/**
 * @returns Array of full calendar week. nulls are dates from prev/next month
 */
export const getFullMonthArray = (year: number, month: number): (Date | null)[] => {
	const monthArray: Date[] = getDaysInMonth(year, month);
	const totalDays = getWeekCount(year, month) * 7;

	const fullMonth: (Date | null)[] = [];

	let calendarPointer: number = 0;

	for (let i = 1; i < totalDays + 1; i++) {
		const d = monthArray[calendarPointer];

		if (
			d === undefined ||
			(i < 8 && i != getWeekdayFromMonday(d)) ||
			calendarPointer > monthArray.length
		) {
			fullMonth.push(null);
		} else {
			fullMonth.push(d);
			calendarPointer++;
		}
	}

	return fullMonth;
};

export const isWeekend = (calendarIndex: number): boolean =>
	calendarIndex % 7 === 5 || calendarIndex % 7 === 6;
