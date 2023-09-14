type DateSelectorFormProps = {
	year: number;
	month: number;
	setYear: React.Dispatch<React.SetStateAction<number>>;
	setMonth: React.Dispatch<React.SetStateAction<number>>;
};

export const DateSelectorForm: React.FunctionComponent<
	DateSelectorFormProps
> = (props) => {
	const { year, month, setYear, setMonth } = props;

	return (
		<form>
			<label>
				Year:
				<input
					type="number"
					value={year}
					onChange={(e) => setYear(e.target.value)}
				/>
			</label>
			<br></br>
			<label>
				Month:
				<input
					type="number"
					value={month}
					onChange={(e) => setMonth(e.target.value)}
				/>
			</label>
		</form>
	);
};
