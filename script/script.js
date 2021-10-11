/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

import 'core-js/stable';
import 'regenerator-runtime/runtime';


document.addEventListener('DOMContentLoaded', () => {
	console.log('DOMContentLoaded');
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		loop: true,
	
		// Navigation arrows
		navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
	});	
});