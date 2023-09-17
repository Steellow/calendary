<script lang="ts">
	import Dropdown from './dropdown.svelte';
	import Input from './input.svelte';
	import { monthNames, paperSizes } from '../util/constants';
	import ButtonGroup from './button-group.svelte';

	export let paperSize: string;
	export let orientation: string;

	export let year: number;
	export let month: number;

	const rowHeight: string = 'h-10';
</script>

<form class="flex flex-col space-y-8">
	<div class="flex space-x-4 {rowHeight}">
		<Dropdown label="Paper size" bind:selected={paperSize} options={paperSizes} />
		<ButtonGroup label="Orientation" options={['Landscape', 'Portrait']} selected={orientation} />
	</div>
	<div class="flex space-x-4 {rowHeight}">
		<Input label="Year" bind:value={year} />
		<Dropdown label="Month" bind:selected={month} options={monthNames} />
	</div>
</form>
