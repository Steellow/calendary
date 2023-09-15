<script lang="ts">
	import '../app.css';

	import MonthView from '../components/month-view.svelte';
	import PageSelector from '../components/page-selector.svelte';

	let year: number = 2023;
	let month: number = 9;
</script>

<PageSelector bind:year bind:month />
<MonthView {year} {month} />
