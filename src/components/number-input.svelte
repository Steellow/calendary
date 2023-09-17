<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let label: string;
	export let store: Writable<number>;

	let value: number;
	store.subscribe((v) => {
		value = v;
	});

	const buttonClasses =
		'border border-gray-400 px-4 text-sm font-semibold text-gray-800 shadow hover:bg-slate-100 focus:bg-slate-200';
</script>

<label for={label} class="w-full text-sm font-bold text-gray-700">
	{label}:
	<div role="group" class="inline-flex h-full w-full">
		<button
			on:click|preventDefault={() => store.update((n) => n - 1)}
			class="rounded-l-md {buttonClasses}">-</button
		>
		<div
			class="my-auto flex h-full w-full border-b border-t border-gray-400 px-4 text-center align-middle text-base shadow"
		>
			<div class="m-auto">{value}</div>
		</div>
		<button
			on:click|preventDefault={() => store.update((n) => n + 1)}
			class="rounded-r-md {buttonClasses}">+</button
		>
	</div>
</label>
