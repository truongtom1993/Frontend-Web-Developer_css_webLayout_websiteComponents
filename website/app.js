/* Global Variables */
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
const apiKey = 'cf67433d04239eef4ffae022a3ccfa98&units=imperial';

async function createProjectData(url, data) {
	const res = await fetch(url, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		referrerPolicy: 'no-referrer',
		redirect: 'follow',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: (data => {
			if (typeof data === 'object') {
				return JSON.stringify(data);
			}
		})(data),
	});
	if (res.ok) {
		return await res.json();
	}
}

async function getWetherMap(zipcode) {
	const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${apiKey}`);
	if (res.ok) {
		return await res.json();
	}
}

async function getProjectData(url) {
	const res = await fetch(url, {
		method: 'GET',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		referrerPolicy: 'no-referrer',
		redirect: 'follow',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	if (res.ok) {
		return await res.json();
	}
}

const generateBtn = $('#generate');
const getProjectDataBtn = $('#_e62ba5');
const textArea = $('#feelings');
const zip = $('#zip');
const dateElement = $('#date');
const tempElement = $('#temp');
const contentElement = $('#content');

generateBtn.addEventListener(`click`, async () => {
	const feel = textArea.value;
	const zipCode = zip.value;
	if (!zipCode) {
		return console.error(`Don't leave the zip Code blank`,);
		
	}
	try {
		const result = await getWetherMap(zipCode);
		if (result) {
			const data = {
				temp: result?.main?.temp,
				date: newDate,
				feel,
			};
			const result2 = await createProjectData('/wether', data);
			if (result2) {
				const res = await getProjectData('/all');
				if (res) {
					tempElement.innerHTML = `Temp: ${Math.round(res.temp)} degrees`;
					dateElement.innerHTML = `Date: ${res.date}`;
					contentElement.innerHTML = `Content: ${res.feel}`;
				}
			}
		}
	} catch (error) {
		console.info(`🎁 website/app.js	Line:88	ID:c54cdc`, error);
	}
});
