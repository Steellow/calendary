<script lang="ts">
	import jsPDF from 'jspdf';
	import html2canvas from 'html2canvas';
	import LoadingSpider from './loading-spider.svelte';

	let loading = false;

	const print = () => {
		loading = true;
		const printable = document.querySelector('#printable') as HTMLElement;

		// Create copy so the actual preview doesn't change size
		const copy = printable?.cloneNode(true) as HTMLElement;
		copy.id = 'temp';
		copy.style.transform = 'none';

		// Element must be in DOM for html2canvas to work
		document.body.appendChild(copy);

		html2canvas(copy, {
			// Rendering without setting scale seems to result in blurry image.
			// Setting higher scale also seems to make the process a lot slower.
			// Below 7 you can see some difference, above 7 everything looks the same.
			// scale: 7
		})
			.then((canvas) => {
				const doc = new jsPDF({
					orientation: 'landscape',
					format: 'a4'
				});

				doc.addImage(
					canvas,
					'jpeg',
					0,
					0,
					doc.internal.pageSize.getWidth(),
					doc.internal.pageSize.getHeight(),
					'test',
					'NONE'
				);
				doc.save('test.pdf');
			})
			.then(() => {
				copy.remove();
				loading = false;
			});
	};
</script>

<button
	on:click|preventDefault={print}
	class="w-full rounded border border-gray-400 px-4 py-2 font-semibold text-gray-800 shadow hover:bg-red-100"
>
	{#if loading}
		<LoadingSpider />
	{:else}
		Print 🖨️
	{/if}
</button>
