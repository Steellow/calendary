<script lang="ts">
	import { monthNames } from '../util/constants';
	import { getFullMonthArray, isWeekend } from '../util/date-util';

	export let year: number;
	export let month: number;
	$: fullMonth = getFullMonthArray(year, month);
</script>

<div id="printable-shadow" class="ml-6 w-2/3 border shadow-xl">
	<div id="printable" class="p-6">
		<div class="flex h-full flex-col">
			<h1 class="mb-6 text-center text-4xl font-bold">
				{monthNames[month - 1]}
			</h1>

			<div class="grid grid-cols-7">
				{#each ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as weekday}
					<div class="h-min font-bold">{weekday}</div>
				{/each}
			</div>

			<!-- Border also here so outlines aren't thinner than grid lines -->
			<div class="grid flex-grow grid-cols-7 border">
				{#each fullMonth as d, idx ('day' + idx)}
					<div class="border p-1 text-lg {isWeekend(idx) ? 'text-red-600' : ''}">
						{d !== null ? d.getDate().toString() : ''}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	#printable {
		aspect-ratio: 1.41/1;
	}
</style>
