<script lang="ts">
	import Dropdown from '../dropdown.svelte';
	import {
		letterCases,
		monthNames,
		paperSizes,
		titleAlignOptions,
		weekdayStyles
	} from '../../util/constants';
	import ButtonGroup from '../button-group.svelte';
	import NumberInput from '../number-input.svelte';
	import { store } from '../../util/store';

	const rowClasses: string = 'space-x-4 h-10';
</script>

<form class="flex flex-col space-y-8">
	<!-- GENERAL SETTINGS -->
	<div class="flex {rowClasses}">
		<Dropdown label="Paper size" store={store.paperSizeIndex} options={paperSizes} />
		<ButtonGroup
			label="Orientation"
			options={['Landscape', 'Portrait']}
			store={store.orientation}
		/>
	</div>
	<div class="flex {rowClasses}">
		<NumberInput label="Year" store={store.year} />
		<Dropdown label="Month" store={store.monthIndex} options={monthNames} />
	</div>

	<!-- THEME -->
	<h3 class="!mt-10 border-t py-2 text-2xl font-bold">Theme</h3>

	<!---- Title style -->
	<h4 class="!mt-0 text-xl font-semibold">Title</h4>
	<div class="!mt-2 flex p-0 {rowClasses}">
		<NumberInput label="Size" store={store.titleSize} />
		<ButtonGroup label="Align" options={titleAlignOptions} store={store.titleAlign} />
	</div>
	<div class="flex p-0 {rowClasses}">
		<ButtonGroup label="Letter case" options={letterCases} store={store.titleLetterCase} />
	</div>

	<!---- Weekday style -->
	<h4 class="!mt-10 border-t pt-2 text-xl font-semibold">Weekday</h4>
	<div class="!mt-2 flex p-0 {rowClasses}">
		<NumberInput label="Size" store={store.weekdaySize} />
	</div>
	<div class={rowClasses}>
		<ButtonGroup label="Style" options={weekdayStyles} store={store.weekdayStyle} />
	</div>

	<!-- Date number style -->
	<h4 class="!mt-10 border-t pt-2 text-xl font-semibold">Date number</h4>
	<div class="!mt-2 flex p-0 {rowClasses}">
		<NumberInput label="Text size" store={store.textSize} />
	</div>
</form>
