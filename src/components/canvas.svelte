<script lang="ts">
	import { getTitleAlignClass, getWeekdayNames } from '../util/canvas-util';
	import { monthNames } from '../util/constants';
	import { getFullMonthArray, isWeekend } from '../util/date-util';
	import { store } from '../util/store';

	let canvasReady = false;

	let year: number;
	store.year.subscribe((v) => (year = v));

	let month: number;
	store.monthIndex.subscribe((v) => (month = v + 1));

	$: fullMonth = getFullMonthArray(year, month);

	const calculateScaleFactor = () => {
		const parentDiv = document.getElementById('canvas-max-width');

		const parentWidth = parentDiv!!.offsetWidth;
		const parentHeight = window.innerHeight * 0.9;

		const targetWidth = 3508;
		const targetHeight = 2480;

		const scaleX = parentWidth / targetWidth;
		const scaleY = parentHeight / targetHeight;

		const scaleFactor = Math.min(scaleX, scaleY);

		const printableShadow = document.getElementById('printable-shadow');
		if (printableShadow) {
			printableShadow.style.transform = `scale(${scaleFactor})`;
		}
	};

	if (typeof window !== 'undefined') {
		window.addEventListener('resize', calculateScaleFactor);
		calculateScaleFactor();
		canvasReady = true;
	}

	// Style settings
	let titleSize: number;
	store.titleSize.subscribe((v) => (titleSize = v));

	let titleAlign: string;
	store.titleAlign.subscribe((v) => (titleAlign = v));

	let textSize: number;
	store.textSize.subscribe((v) => (textSize = v));

	let weekdaySize: number;
	store.weekdaySize.subscribe((v) => (weekdaySize = v));

	let weekdayStyle: string;
	store.weekdayStyle.subscribe((v) => (weekdayStyle = v));
</script>

<div
	id="printable-shadow"
	class="{canvasReady ? 'visible' : 'collapse'} ml-6 origin-top-left border shadow-2xl"
	style="width: 3508px; height: 2480px;"
>
	<div id="printable" class="h-full p-20">
		<div class="flex h-full flex-col">
			<h1
				class="mb-16 font-bold {getTitleAlignClass(titleAlign)}"
				style="font-size: {titleSize}rem;"
			>
				{monthNames[month - 1]}
			</h1>

			<div class="grid grid-cols-7">
				{#each getWeekdayNames(weekdayStyle) as weekday}
					<div class="h-min font-bold" style="font-size: {weekdaySize}rem;">{weekday}</div>
				{/each}
			</div>

			<!-- Border also here so outlines aren't thinner than grid lines -->
			<div class="grid flex-grow grid-cols-7 border border-4">
				{#each fullMonth as d, idx ('day' + idx)}
					<div
						class="border border-4 pl-6 pt-2 {isWeekend(idx) ? 'text-red-600' : ''}"
						style="font-size: {textSize}rem;"
					>
						{d !== null ? d.getDate().toString() : ''}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
