<script lang="ts">
	import '../app.css';

	import Canvas from '../components/canvas.svelte';
	import Options from '../components/options.svelte';

	let year: number = 2023;
	let month: number = 9;
</script>

<div class="mx-auto my-6 flex max-w-screen-xl">
	<Options bind:year bind:month />
	<Canvas {year} {month} />
</div>
