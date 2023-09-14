import { getWeekCount, getWeekdayFromMonday } from "./util/date-util";

type MonthViewProps = {
	month: Date[]
}

export const MonthView: React.FunctionComponent<MonthViewProps> = (props) => {
	const { month } = props;

	const allWeekRows: string[][] = [];
	let currentWeek: string[] = []
	let calendarPointer: number = 0;

	const totalDays = getWeekCount(2023, 9) * 7

	// Start from 1 for simplicity
	for (let i = 1; i < totalDays + 1; i++) {
		const d = month[calendarPointer]

		if(d === undefined
			|| (i < 8 && i !=getWeekdayFromMonday(d))
			|| calendarPointer > month.length) {

				currentWeek.push("_")

			} else {
				currentWeek.push(d.getDate().toString())
				calendarPointer++
			}

			if(i % 7 == 0) {
				allWeekRows.push(currentWeek)
				currentWeek = []
			}
	}

	return <table>
		<tr>
			<th>MON</th>
			<th>TUE</th>
			<th>WED</th>
			<th>THU</th>
			<th>FRI</th>
			<th>SAT</th>
			<th>SUN</th>
		</tr>
		{allWeekRows.map((row) => {
			return <tr>
				{row.map((cell) => {
					return <td>{cell}</td>
				})}
			</tr>
		})}
	</table>

}