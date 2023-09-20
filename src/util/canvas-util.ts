export const getWeekdayNames = (style: string, letterCase: string) => {
	const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

	return weekdays.map((s) => {
		if (style.toLocaleLowerCase() === 'mon') {
			s = s.substring(0, 3);
		}
		return formatString(s, letterCase);
	});
};

export const getTitleAlignClass = (align: string) => {
	switch (align) {
		case 'Left':
			return 'text-left';

		case 'Right':
			return 'text-right';

		default:
		case 'Center':
			return 'text-center';
	}
};

export const formatString = (str: string, letterCase: string) => {
	switch (letterCase) {
		case 'lowercase':
			return str.toLocaleLowerCase();

		case 'UPPERCASE':
			return str.toLocaleUpperCase();

		default:
			return str[0].toLocaleUpperCase() + str.slice(1).toLocaleLowerCase();
	}
};
