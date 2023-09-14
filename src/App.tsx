import { useState } from "react";
import { MonthView } from "./month-view";
import { DateSelectorForm } from "./date-selector-form";

function App() {
	const [year, setYear] = useState(2023);
	const [month, setMonth] = useState(8);

	return (
		<>
			<DateSelectorForm {...{ year, month, setYear, setMonth }} />
			<MonthView yearNumber={year} monthNumber={month} />
		</>
	);
}

export default App;
