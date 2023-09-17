<script lang="ts">
	import '../app.css';

	import Canvas from '../components/canvas.svelte';
	import PrintButton from '../components/print-button.svelte';
	import Options from '../components/options.svelte';
	import { getCanvasAspectRatio } from '../util/canvas-util';

	let paperSizeIndex: number;
	let orientation: string = 'Landscape';
	const setOrientation = (option: string) => {
		console.log('New orientation: ' + option);
		orientation = option;
	};

	$: aspectRatio = getCanvasAspectRatio(paperSizeIndex, orientation);

	let year: number = 2023;
	let monthIndex: number = 9; // Using index so Dropdown works correctly
</script>

<div class="mx-auto my-6 flex max-w-screen-xl">
	<div class="flex w-1/3 flex-col space-y-10">
		<Options bind:year bind:monthIndex bind:paperSizeIndex bind:orientation {setOrientation} />
		<PrintButton />
	</div>
	<Canvas {year} month={monthIndex + 1} {aspectRatio} />
</div>
