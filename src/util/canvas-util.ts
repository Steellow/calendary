export const getWeekdayNames = (style: string) => {
	const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

	if (style === 'Monday') {
		return weekdays;
	} else if (style === 'Mon') {
		return weekdays.map((s) => s.substring(0, 3));
	} else if (style === 'MONDAY') {
		return weekdays.map((s) => s.toLocaleUpperCase());
	} else {
		return weekdays.map((s) => s.toLocaleUpperCase().substring(0, 3));
	}
};
