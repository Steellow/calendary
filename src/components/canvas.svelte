<script lang="ts">
	import { getFullMonthArray, isWeekend } from '../util/date-util';

	export let year: number;
	export let month: number;
	$: fullMonth = getFullMonthArray(year, month);
</script>

<div class="canvas ml-6 w-2/3 border px-6 pb-12 pt-5 shadow-xl">
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
		aspect-ratio: 1.41/1;
	}
</style>
