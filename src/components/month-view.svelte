<script lang="ts">
	import { getAllWeekRowsForCalendarView, isWeekend } from '../util/date-util';

	export let year: number;
	export let month: number;
	$: fullMonth = getAllWeekRowsForCalendarView(year, month);
</script>

<div class="canvas p-10">
	<div class="grid grid-cols-7">
		{#each ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as weekday}
			<div class="h-min font-bold">{weekday}</div>
		{/each}
	</div>

	<!-- Border also here so outlines aren't thinner than grid lines -->
	<div class="grid h-full grid-cols-7 border">
		{#each fullMonth as d, idx ('day' + idx)}
			<div class="border p-1 text-lg {isWeekend(idx) ? 'text-red-600' : ''}">
				{d !== null ? d.getDate().toString() : ''}
			</div>
		{/each}
	</div>
</div>

<style>
	.canvas {
		width: 891px;
		height: 630px;
	}
</style>
