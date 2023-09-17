<script lang="ts">
	import '../app.css';

	import Canvas from '../components/canvas.svelte';
	import PrintButton from '../components/print-button.svelte';
	import Options from '../components/options.svelte';

	let paperSize: string;
	let orientation: string = 'Landscape';

	let year: number = 2023;
	let month: number = 9;
</script>

<div class="mx-auto my-6 flex max-w-screen-xl">
	<div class="flex w-1/3 flex-col space-y-10">
		<Options bind:year bind:month bind:paperSize bind:orientation />
		<PrintButton />
	</div>
	<Canvas {year} {month} />
</div>
