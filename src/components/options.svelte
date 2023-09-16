<script lang="ts">
	import Dropdown from './dropdown.svelte';
	import Input from './input.svelte';

	export let year: number;
	export let month: number;

	const options = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
</script>

<form class="flex space-x-4">
	<Input label="Year" bind:value={year} />
	<Dropdown label="Month" bind:selected={month} {options} />
</form>
