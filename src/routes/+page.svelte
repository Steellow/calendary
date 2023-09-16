<script lang="ts">
	import '../app.css';

	import MonthView from '../components/month-view.svelte';
	import PageSelector from '../components/page-selector.svelte';

	let year: number = 2023;
	let month: number = 9;
</script>

<div class="mx-auto my-6 flex max-w-screen-xl">
	<PageSelector bind:year bind:month />
	<MonthView {year} {month} />
</div>
