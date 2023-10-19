<script lang="ts">
	import jsPDF from 'jspdf';
	import html2canvas from 'html2canvas';

	const print = () => {
		const printable = document.querySelector('#printable') as HTMLElement;

		// Create copy so the actual preview doesn't change size
		const copy = printable?.cloneNode(true) as HTMLElement;
		copy.style.transform = 'none';

		// Element must be in DOM for html2canvas to work
		document.body.appendChild(copy);

		html2canvas(printable, {
			// Rendering without setting scale seems to result in blurry image.
			// Setting higher scale also seems to make the process a lot slower.
			// Below 7 you can see some difference, above 7 everything looks the same.
			scale: 7
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
			});
	};
</script>

<button
	on:click|preventDefault={print}
	class="w-full rounded border border-gray-400 px-4 py-2 font-semibold text-gray-800 shadow hover:bg-red-100"
>
	Print 🖨️
</button>
