<script lang="ts">
	import { getAllWeekRowsForCalendarView } from '../util/date-util';

	export let year: number;
	export let month: number;

	$: allWeekRows = getAllWeekRowsForCalendarView(year, month);
</script>

<table>
	<thead>
		<tr>
			<th>MON</th>
			<th>TUE</th>
			<th>WED</th>
			<th>THU</th>
			<th>FRI</th>
			<th>SAT</th>
			<th>SUN</th>
		</tr>
	</thead>
	<tbody>
		{#each allWeekRows as row, i ('row' + i)}
			<tr>
				{#each row as cell, i ('cell' + i)}
					<td>{cell}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
