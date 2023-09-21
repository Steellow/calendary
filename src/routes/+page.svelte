<script lang="ts">
	import '../app.css';

	import Canvas from '../components/canvas.svelte';
	import Options from '../components/settings/settings.svelte';
</script>

<div class="m-10 mx-auto flex max-w-screen-2xl">
	<div class="ml-10 flex w-1/3 flex-col space-y-10">
		<div id="scrollable">
			<Options />
		</div>
	</div>
	<div class="mr-10 w-2/3" id="canvas-max-width">
		<Canvas />
	</div>
</div>

<style>
	#scrollable {
		overflow: scroll;
		overflow-x: hidden;
		max-height: 100vh;
	}
	#scrollable::-webkit-scrollbar {
		width: 0; /* Remove scrollbar space */
	}
</style>
