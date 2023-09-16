<script lang="ts">
	import Dropdown from './dropdown.svelte';
	import Input from './input.svelte';
	import { monthNames } from '../util/constants';

	export let year: number;
	export let month: number;
</script>

<form class="flex space-x-4">
	<Input label="Year" bind:value={year} />
	<Dropdown label="Month" bind:selected={month} options={monthNames} />
</form>
