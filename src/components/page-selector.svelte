<script lang="ts">
	export let year: number;
	export let month: number;
</script>

<form class="flex space-x-12 w-1/3 mb-2">
	<label class="text-gray-700 text-sm font-bold mb-2">
		Year:
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="number"
			bind:value={year}
		/>
	</label>
	<label class="text-gray-700 text-sm font-bold mb-2">
		Month:
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="number"
			bind:value={month}
		/>
	</label>
</form>
