/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// SLIDER
document.addEventListener('DOMContentLoaded', () => {
	console.log('DOMContentLoaded');
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		loop: true,
	
		// Navigation arrows
		navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
	});	
});

// Mobile nav bar

const hamburger = document.querySelector('#hamburger');
const nav_ul = document.querySelector('#nav-ul');

hamburger.addEventListener('click', () => {
	nav_ul.classList.toggle('show');
});