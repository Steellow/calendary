<script lang="ts">
	import Dropdown from './dropdown.svelte';
	import { monthNames, paperSizes, weekdayStyles } from '../util/constants';
	import ButtonGroup from './button-group.svelte';
	import NumberInput from './number-input.svelte';
	import { store } from '../util/store';

	const rowClasses: string = 'space-x-4 h-10';
</script>

<form class="flex flex-col space-y-8">
	<div class="flex {rowClasses}">
		<Dropdown label="Paper size" store={store.paperSizeIndex} options={paperSizes} />
		<ButtonGroup
			label="Orientation"
			options={['Landscape', 'Portrait']}
			store={store.orientation}
		/>
	</div>
	<div class="flex {rowClasses}">
		<NumberInput label="Year" store={store.year} />
		<Dropdown label="Month" store={store.monthIndex} options={monthNames} />
	</div>
	<h3 class="rounded bg-stone-200 py-2 pl-2 text-xl font-bold">Theme</h3>
	<div class="!mt-2 flex p-0 {rowClasses}">
		<NumberInput label="Title size" store={store.titleSize} />
		<NumberInput label="Text size" store={store.textSize} />
	</div>
	<div class="flex p-0 {rowClasses}">
		<NumberInput label="Weekday size" store={store.weekdaySize} />
	</div>
	<div class={rowClasses}>
		<ButtonGroup label="Weekday style" options={weekdayStyles} store={store.weekdayStyle} />
	</div>
</form>
