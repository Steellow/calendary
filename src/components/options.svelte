<script lang="ts">
	import Dropdown from './dropdown.svelte';
	import Input from './input.svelte';
	import { monthNames, paperSizes } from '../util/constants';
	import ButtonGroup from './button-group.svelte';
	import NumberInput from './number-input.svelte';
	import { store } from '../util/store';

	const rowHeight: string = 'h-10';
</script>

<form class="flex flex-col space-y-8">
	<div class="flex space-x-4 {rowHeight}">
		<Dropdown label="Paper size" store={store.paperSizeIndex} options={paperSizes} />
		<ButtonGroup
			label="Orientation"
			options={['Landscape', 'Portrait']}
			store={store.orientation}
		/>
	</div>
	<div class="flex space-x-4 {rowHeight}">
		<NumberInput label="Year" store={store.year} />
		<Dropdown label="Month" store={store.monthIndex} options={monthNames} />
	</div>
	<div class="flex space-x-4 {rowHeight}">
		<NumberInput label="Title size" store={store.titleSize} />
		<NumberInput label="Text size" store={store.textSize} />
	</div>
</form>
