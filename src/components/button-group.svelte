<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let label: string;
	export let options: string[];

	export let store: Writable<string>;

	let selected: string;
	store.subscribe((v) => (selected = v));

	const getBorder = (idx: number) => {
		if (idx === 0) {
			return 'border rounded-l-md';
		} else if (idx === options.length - 1) {
			return 'border-t border-r border-b rounded-r-md';
		} else {
			return 'border-t border-b border-r';
		}
	};
</script>

<label for={label} class="w-full text-sm font-bold text-gray-700">
	{label}:
	<div role="group" class="inline-flex h-full w-full">
		{#each options as option, idx ('orientation-button-' + idx)}
			<button
				name={label}
				class="w-full border-gray-400 px-3 text-sm font-semibold text-gray-800 shadow {getBorder(
					idx
				)} {option === selected ? 'bg-slate-200' : 'hover:bg-slate-100 focus:bg-slate-200'}"
				on:click|preventDefault={() => store.set(option)}
			>
				{option}
			</button>
		{/each}
	</div>
</label>
