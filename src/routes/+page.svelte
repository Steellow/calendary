<script lang="ts">
	import MonthView from '../components/month-view.svelte';
	import PageSelector from '../components/page-selector.svelte';

	let year: number = 2023;
	let month: number = 9;
</script>

<PageSelector bind:year bind:month />
<MonthView bind:year bind:month />
