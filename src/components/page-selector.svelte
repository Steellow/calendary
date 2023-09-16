<script lang="ts">
	import Input from './input.svelte';

	export let year: number;
	export let month: number;
</script>

<div class="w-1/3">
	<form class=" flex space-x-4">
		<Input label="Year" value={year} />
		<Input label="Month" value={month} />
	</form>
</div>
