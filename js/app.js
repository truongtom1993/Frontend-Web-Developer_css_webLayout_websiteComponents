/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function getSectionList() {
	const sectionList = $$('section[id^=section]')
	if (sectionList?.length > 0) return sectionList;
	return
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

const createNavBar = () => {
	const sectionList = getSectionList();
	const ulNavbar = $("#_2feeb3");
	if (ulNavbar) {
		for (let index = 0; index < sectionList.length; index++) {
			const section = sectionList[index];
			const sectionName = section.dataset?.nav || `Section ${Math.random().toFixed(3)}`;

			const li = document.createElement('li');
			li.classList.add('navbar_item')
			li.innerHTML = `<a class="menu__link active">${sectionName}</a>`;
			li.onclick = () => {
				section.scrollIntoView({ behavior: 'smooth' });
				for (let index = 0; index < sectionList.length; index++) {
					sectionList[index].classList.remove('active')
				}
				section.classList.add('active');
			}
			ulNavbar.insertAdjacentElement('beforeend', li)
		}
	}
}



// build the nav
createNavBar()

// Add class 'active' to section when near top of viewport

const body = document.body;
const eventBody = (event) => {
	console.info(`🎁 js/app.js	Line:81	ID:70b7ff`,event.);
	
}
body.addEventListener('wheel', eventBody)
console.info(`🎁 js/app.js	Line:80	ID:b138b2`, body);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
