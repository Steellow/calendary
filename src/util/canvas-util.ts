export const getWeekdayNames = (style: string) => {
	const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

	switch (style) {
		case 'Mon':
			return weekdays.map((s) => s.substring(0, 3));

		case 'MONDAY':
			return weekdays.map((s) => s.toLocaleUpperCase());

		case 'MON':
			return weekdays.map((s) => s.toLocaleUpperCase().substring(0, 3));

		default:
			return weekdays;
	}
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
