<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let label: string;
	export let options: string[];

	export let store: Writable<number>;
</script>

<label for={label} class="w-full text-sm font-bold text-gray-700">
	{label}:
	<select
		class="color-white h-full w-full rounded border border-gray-400 bg-white px-3 py-2 leading-tight text-gray-700 shadow focus:border-2 focus:border-red-500"
		name={label}
		bind:value={$store}
	>
		{#each options as option, index}
			<option value={index}>{option}</option>
		{/each}
	</select>
</label>
