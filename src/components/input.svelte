<script lang="ts">
	export let label: string;
	export let value: any;
</script>

<label for={label} class="w-1/2 text-sm font-bold text-gray-700">
	{label}:
	<input
		class="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow !outline-none focus:border-2 focus:border-red-500"
		type="number"
		bind:value
	/>
</label>
