<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let label: string;
	export let store: Writable<string | number>;
</script>

<label for={label} class="w-full text-sm font-bold text-gray-700">
	{label}:
	<input
		class="h-full w-full appearance-none rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 shadow !outline-none focus:border-2 focus:border-red-500"
		type="number"
		bind:value={$store}
	/>
</label>
