<script lang="ts">
	import Input from './input.svelte';

	export let year: number;
	export let month: number;
</script>

<div class="mt-10 w-1/3">
	<form class="flex space-x-4">
		<Input label="Year" bind:value={year} />
		<Input label="Month" bind:value={month} />
	</form>
</div>
