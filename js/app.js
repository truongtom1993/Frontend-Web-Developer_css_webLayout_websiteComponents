// Define Global Variables
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const body = document.body;
let preValue = window.pageYOffset;
const header = $('#_922ba6');
const nav = $('#_087d49');
const ulNavbar = $('#navbar__list');
const aTagList = [];
let isScroll = false;

// End Global Variables

// Define Helper Functions
function getSectionList() {
	const sectionList = $$('section[id^=section]');
	if (sectionList?.length > 0) return sectionList;
	return;
}
function throttle(callback, limit) {
	let waiting = false;
	return function () {
		if (!waiting) {
			callback.apply(this, arguments);
			waiting = true;
			setTimeout(function () {
				waiting = false;
			}, limit);
		}
	};
}
function makeActive(sections, aTagList) {
	const value = 471;
	for (let index = 0; index < sections.length; index++) {
		const box = sections[index].getBoundingClientRect();
		// Add class 'active' to section when near top of viewport
		if (box.top <= value && box.bottom >= value) {
			sections[index].classList.add('active');
			aTagList[index].classList.add('active');
		} else {
			sections[index].classList.remove('active');
			aTagList[index].classList.remove('active');
		}
	}
}
// End Helper Functions

// Begin Main Functions

// build the nav
const sectionList = getSectionList();
for (let index = 0; index < sectionList.length; index++) {
	const section = sectionList[index];
	const sectionName = section.dataset?.nav || `Section ${Math.random().toFixed(3)}`;
	const liTag = document.createElement('li');
	liTag.classList.add('navbar_item');
	const aTag = document.createElement(`a`);
	aTag.classList.add('menu__link');
	if (index === 0) aTag.classList.add('active');
	aTag.innerText = sectionName;
	liTag.appendChild(aTag);
	liTag.onclick = event => {
		event.preventDefault();

		// Scroll to section on link click
		section.scrollIntoView({ behavior: 'smooth' });
		for (let index = 0; index < sectionList.length; index++) {
			sectionList[index].classList.remove('active');
			aTagList[index].classList.remove('active');
		}
		// Set sections as active when click
		event.target.classList.add('active');
		section.classList.add('active');
	};
	aTagList.push(aTag);
	ulNavbar.insertAdjacentElement('beforeend', liTag);
}
let id;
const eventBody = throttle(event => {
	// Add class 'active' to section when near top of viewport
	makeActive(sectionList, aTagList);

	// Scroll to anchor ID using scroll event
	// const currentValue = window.pageYOffset;
	// if (preValue >= currentValue) {
	// 	setTimeout(() => {
	// 		header.classList.remove('minify');
	// 	}, 100);
	// } else {
	// 	header.classList.add('minify');
	// }
	// preValue = currentValue;

	header.classList.remove('minify');
	if (id) {
		clearTimeout(id)
	} else {
		const newId = setTimeout(() => {
			header.classList.add('minify');
			id = newId
		}, 1500);
	}
}, 20);

body.addEventListener('wheel', eventBody);
// End Main Functions