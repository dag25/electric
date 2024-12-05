import { modal } from './modules/modal';
import { topSlider } from './modules/slider';
import { carousel } from './modules/carousel';
import { up } from './modules/up';
import { accordion } from './modules/accordion';
import sendForm  from './modules/sendForm';


modal();
topSlider();
carousel();
up();

accordion();
sendForm({
	modalId: 'callback',
	// someElem: [
	// 	{
	// 		type: 'block',
	// 		id: 'total',
	// 	},
	// ],
});
