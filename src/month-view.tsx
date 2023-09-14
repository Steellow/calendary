import {
	getDaysInMonth,
	getWeekCount,
	getWeekdayFromMonday,
} from "./util/date-util";

type MonthViewProps = {
	yearNumber: number;
	monthNumber: number;
};

export const MonthView: React.FunctionComponent<MonthViewProps> = (props) => {
	const { yearNumber, monthNumber } = props;

	const month = getDaysInMonth(yearNumber, monthNumber);

	const allWeekRows: string[][] = [];
	let currentWeek: string[] = [];
	let calendarPointer: number = 0;

	const totalDays = getWeekCount(yearNumber, monthNumber) * 7;

	// Start from 1 for simplicity
	for (let i = 1; i < totalDays + 1; i++) {
		const d = month[calendarPointer];

		if (
			d === undefined ||
			(i < 8 && i != getWeekdayFromMonday(d)) ||
			calendarPointer > month.length
		) {
			currentWeek.push("_");
		} else {
			currentWeek.push(d.getDate().toString());
			calendarPointer++;
		}

		if (i % 7 == 0) {
			allWeekRows.push(currentWeek);
			currentWeek = [];
		}
	}

	return (
		<table>
			<tr>
				<th>MON</th>
				<th>TUE</th>
				<th>WED</th>
				<th>THU</th>
				<th>FRI</th>
				<th>SAT</th>
				<th>SUN</th>
			</tr>
			{allWeekRows.map((row, index) => {
				return (
					<tr key={"row" + index}>
						{row.map((cell, index) => {
							return <td key={"cell" + index}>{cell}</td>;
						})}
					</tr>
				);
			})}
		</table>
	);
};
