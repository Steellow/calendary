<script lang="ts">
	export let year: number;
	export let month: number;
</script>

<form class="mr-12 flex w-1/5 flex-col space-y-4">
	<label class="mb-2 text-sm font-bold text-gray-700">
		Year:
		<input
			class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
			type="number"
			bind:value={year}
		/>
	</label>
	<label class="mb-2 text-sm font-bold text-gray-700">
		Month:
		<input
			class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
			type="number"
			bind:value={month}
		/>
	</label>
</form>
