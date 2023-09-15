<script lang="ts">
	import { getAllWeekRowsForCalendarView } from '../util/date-util';

	export let year: number;
	export let month: number;
	$: allWeekRows = getAllWeekRowsForCalendarView(year, month);
</script>

<div class="canvas">
	<table class="w-full h-full table-fixed">
		<thead>
			<tr class="border border-black">
				<th class="border border-black">MON</th>
				<th class="border border-black">TUE</th>
				<th class="border border-black">WED</th>
				<th class="border border-black">THU</th>
				<th class="border border-black">FRI</th>
				<th class="border border-black">SAT</th>
				<th class="border border-black">SUN</th>
			</tr>
		</thead>
		<tbody>
			{#each allWeekRows as row, i ('row' + i)}
				<tr class="border border-black rounded">
					{#each row as cell, idx ('cell' + idx)}
						<td
							class="text-center border border-black mx-auto text-xl font-bold {idx === 6 ||
							idx === 5
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
