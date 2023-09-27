<script lang="ts">
	import html2canvas from 'html2canvas';

	const print = () => {
		const printable = document.querySelector('#printable') as HTMLElement;

		const copy = printable?.cloneNode(true) as HTMLElement;
		printable.style.transform = 'none';

		html2canvas(printable).then((canvas) => {
			canvas.toBlob((blob) => {
				const link = document.createElement('a');
				link.download = 'test.png';
				link.href = URL.createObjectURL(blob as Blob);
				link.click();
				URL.revokeObjectURL(link.href);
			});
		});
	};
</script>

<button
	on:click|preventDefault={print}
	class="w-full rounded border border-gray-400 px-4 py-2 font-semibold text-gray-800 shadow hover:bg-red-100"
>
	Print 🖨️
</button>
