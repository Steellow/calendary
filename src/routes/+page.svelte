<script lang="ts">
	import '../app.css';

	import Canvas from '../components/canvas.svelte';
	import PrintButton from '../components/print-button.svelte';
	import Options from '../components/options.svelte';

	let paperSizeIndex: number;
	let orientation: string = 'Landscape';
	const setOrientation = (option: string) => {
		console.log('New orientation: ' + option);
		orientation = option;
	};

	let year: number = 2023;
	let monthIndex: number = 9; // Using index so Dropdown works correctly
</script>

<div class="m-10 mx-auto flex max-w-screen-2xl">
	<div class="ml-10 flex w-1/3 flex-col space-y-10">
		<Options bind:year bind:monthIndex bind:paperSizeIndex bind:orientation {setOrientation} />
		<PrintButton />
	</div>
	<div class="mr-10 w-2/3" id="canvas-max-width">
		<Canvas {year} month={monthIndex + 1} />
	</div>
</div>
