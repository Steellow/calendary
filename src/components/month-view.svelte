<script lang="ts">
	import { getAllWeekRowsForCalendarView, isWeekend } from '../util/date-util';

	export let year: number;
	export let month: number;
	$: allWeekRows = getAllWeekRowsForCalendarView(year, month);
</script>

<div class="canvas p-10">
	<table class="h-full w-full table-fixed">
		<thead>
			<tr>
				{#each ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'] as weekday}
					<th class="border border-black">{weekday}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each allWeekRows as row, i ('row' + i)}
				<tr>
					{#each row as cell, idx ('cell' + idx)}
						<td
							class="mx-auto border border-black text-center text-xl font-bold {isWeekend(idx)
								? 'text-red-600'
								: ''}">{cell}</td
						>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.canvas {
		width: 891px;
		height: 630px;
	}
</style>
