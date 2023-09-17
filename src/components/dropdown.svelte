<script lang="ts">
	export let label: string;
	export let selected: number | string;

	export let options: string[];
</script>

<label for={label} class="w-full text-sm font-bold text-gray-700">
	{label}:
	<select
		class="color-white h-full w-full rounded border bg-white px-3 py-2 leading-tight text-gray-700 shadow focus:border-2 focus:border-red-500"
		name={label}
		bind:value={selected}
	>
		{#each options as option, index}
			<option value={index}>{option}</option>
		{/each}
	</select>
</label>
