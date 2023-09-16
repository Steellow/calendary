<script lang="ts">
	export let label: string;
	export let value: any;
</script>

<label class="mb-2 text-sm font-bold text-gray-700">
	{label}:
	<input
		class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
		type="number"
		bind:value
	/>
</label>
