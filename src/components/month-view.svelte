<script lang="ts">
	import { getAllWeekRowsForCalendarView, isWeekend } from '../util/date-util';

	export let year: number;
	export let month: number;
	$: allWeekRows = getAllWeekRowsForCalendarView(year, month);
</script>

<div class="canvas p-10">
	<div class="grid grid-cols-7">
		{#each ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as weekday}
			<div class="h-min font-bold">{weekday}</div>
		{/each}
	</div>

	<!-- Border also here so outlines aren't thinner than grid lines -->
	<div class="grid h-full grid-cols-7 border">
		{#each allWeekRows as row, i ('row' + i)}
			{#each row as cell, idx ('cell' + idx)}
				<div class="border p-1 text-lg {isWeekend(idx) ? 'text-red-600' : ''}">
					{cell === '_' ? '' : cell}
				</div>
			{/each}
		{/each}
	</div>
</div>

<style>
	.canvas {
		width: 891px;
		height: 630px;
	}
</style>
