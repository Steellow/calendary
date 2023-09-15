<script lang="ts">
	export let year: number;
	export let month: number;
</script>

<form>
	<label>
		Year:
		<input type="number" bind:value={year} />
	</label>
	<br>
	<label>
		Month:
		<input type="number" bind:value={month} />
	</label>
</form>