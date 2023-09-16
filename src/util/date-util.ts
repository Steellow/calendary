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

	// const date: any = new Date(Date.UTC(year, 8, 1));
	// const days: Date[] = [];
	// while (date.getUTCMonth() === month) {
	// 	days.push(new Date(date));
	// 	date.setUTCDate(date.getUTCDate() + 1);
	// }
	// return days;
}

export const isMonday = (date: Date): boolean => date.getDay() == 1;

// Starts from 1
export const getWeekdayFromMonday = (date: Date): number =>
	date.getDay() == 0 ? 7 : date.getDay();

// Starts form 0
export const getWeekdayIndexFromMonday = (date: Date): number => getWeekdayFromMonday(date) - 1;

/**
 * @param year Year, not zero based
 * @param month Month, not zero based
 */
export const getWeekCount = (year: number, month: number): number => {
	const firstOfMonth: Date = new Date(year, month - 1, 1);
	const lastOfMonth: Date = new Date(year, month, 0);

	const firstOfMonthWeekdayIndex = getWeekdayIndexFromMonday(firstOfMonth);

	const used = firstOfMonthWeekdayIndex + lastOfMonth.getDate();
	return Math.ceil(used / 7);
};

export const getAllWeekRowsForCalendarView = (year: number, month: number): string[][] => {
	const monthArray: Date[] = getDaysInMonth(year, month);
	const totalDays = getWeekCount(year, month) * 7;

	const allWeekRows: string[][] = [];

	let currentWeek: string[] = [];
	let calendarPointer: number = 0;

	for (let i = 1; i < totalDays + 1; i++) {
		const d = monthArray[calendarPointer];

		if (
			d === undefined ||
			(i < 8 && i != getWeekdayFromMonday(d)) ||
			calendarPointer > monthArray.length
		) {
			currentWeek.push('_');
		} else {
			currentWeek.push(d.getDate().toString());
			calendarPointer++;
		}

		if (i % 7 == 0) {
			allWeekRows.push(currentWeek);
			currentWeek = [];
		}
	}

	return allWeekRows;
};

export const isWeekend = (weekdayIndex: number): boolean =>
	weekdayIndex === 5 || weekdayIndex === 6;
