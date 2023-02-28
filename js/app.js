
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const body = document.body;
let preValue = window.pageYOffset;

function getSectionList() {
	const sectionList = $$('section[id^=section]')
	if (sectionList?.length > 0) return sectionList;
	return
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

		if (box.top <= value && box.bottom >= value) {
			sections[index].classList.add('active')
			aTagList[index].classList.add('active')
		} else {
			sections[index].classList.remove('active')
			aTagList[index].classList.remove('active')

		}
	}
}


const header = $('#_922ba6')
const nav = document.createElement(`nav`);
nav.classList.add('navbar__menu')
const ulNavbar = document.createElement(`ul`);
ulNavbar.classList.add('navbar__list')
header.appendChild(nav)
nav.appendChild(ulNavbar)
const sectionList = getSectionList();
const aTagList = [];
for (let index = 0; index < sectionList.length; index++) {
	const section = sectionList[index];
	const sectionName = section.dataset?.nav || `Section ${Math.random().toFixed(3)}`;
	const liTag = document.createElement('li');
	liTag.classList.add('navbar_item')
	const aTag = document.createElement(`a`);
	aTag.classList.add('menu__link')
	if (index === 0) aTag.classList.add('active')
	aTag.innerText = sectionName
	liTag.appendChild(aTag)
	liTag.onclick = (event) => {
		event.preventDefault();
		section.scrollIntoView({ behavior: 'smooth' });
		for (let index = 0; index < sectionList.length; index++) {
			sectionList[index].classList.remove('active')
			aTagList[index].classList.remove('active')
		}
		event.target.classList.add('active')
		section.classList.add('active');
	}
	aTagList.push(aTag)
	ulNavbar.insertAdjacentElement('beforeend', liTag)

}

const eventBody = throttle((event) => {
	makeActive(sectionList, aTagList);
	const currentValue = window.pageYOffset
	if (preValue >= currentValue) {
		header.classList.remove('minify')
	} else {
		header.classList.add('minify')
	}
	preValue = currentValue
}, 20)

body.addEventListener('wheel', eventBody)
