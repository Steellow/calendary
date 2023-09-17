import { paperSizes } from './constants';

export const getCanvasAspectRatio = (paperSizeIndex: number, orientation: string): number => {
	const paperSize = paperSizes[paperSizeIndex];
	const isLandscape = orientation === 'Landscape';
	let res: number;

	switch (paperSize) {
		case 'Letter':
			res = isLandscape ? 1.2941 / 1 : 1 / 1.2941;
			break;

		case 'Legal':
			res = isLandscape ? 1.6471 / 1 : 1 / 1.6471;
			break;

		case 'Ledger':
			res = isLandscape ? 1.5455 / 1 : 1 / 1.5455;
			break;

		default:
		case 'A4':
		case 'A3':
			res = isLandscape ? 1.41 / 1 : 1 / 1.41;
			break;
	}

	console.log('Aspect ratio: ' + res);
	return res;
};
