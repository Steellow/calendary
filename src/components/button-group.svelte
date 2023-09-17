<script lang="ts">
	export let label: string;
	export let options: string[];
	export let selected: string;

	const getBorder = (idx: number) => {
		if (options.length === 2) {
			if (idx === 0) {
				return 'border-l border-t border-b rounded-l-md';
			} else {
				return 'border rounded-r-md';
			}
		} else {
			if (idx === 0) {
				return 'border rounded-l-md';
			} else if (idx === options.length - 1) {
				return 'border rounded-r-md';
			} else {
				return 'border-b border-t';
			}
		}
	};
</script>

<label for={label} class="w-full text-sm font-bold text-gray-700">
	{label}:
	<div role="group" class="inline-flex h-full w-full">
		{#each options as option, idx ('orientation-button-' + idx)}
			<button
				name={label}
				class="border-gray-400 px-3 text-sm font-semibold text-gray-800 shadow {getBorder(
					idx
				)} {option === selected ? 'bg-slate-200' : ''}"
				on:click|preventDefault={() => (selected = option)}
			>
				{option}
			</button>
		{/each}
	</div>
</label>
