<script lang="ts">
	import Dropdown from './dropdown.svelte';
	import Input from './input.svelte';
	import { monthNames, paperSizes } from '../util/constants';
	import ButtonGroup from './button-group.svelte';
	import NumberInput from './number-input.svelte';
	import { store } from '../util/store';

	export let paperSizeIndex: number;
	export let orientation: string;
	export let setOrientation: (option: string) => void;

	export let year: number;
	export let monthIndex: number;

	const rowHeight: string = 'h-10';
</script>

<form class="flex flex-col space-y-8">
	<div class="flex space-x-4 {rowHeight}">
		<Dropdown label="Paper size" bind:selected={paperSizeIndex} options={paperSizes} />
		<ButtonGroup
			label="Orientation"
			options={['Landscape', 'Portrait']}
			selected={orientation}
			onSelection={setOrientation}
		/>
	</div>
	<div class="flex space-x-4 {rowHeight}">
		<Input label="Year" bind:value={year} />
		<Dropdown label="Month" bind:selected={monthIndex} options={monthNames} />
	</div>
	<div class="flex space-x-4 {rowHeight}">
		<NumberInput label="Title size" store={store.titleSize} />
	</div>
</form>
