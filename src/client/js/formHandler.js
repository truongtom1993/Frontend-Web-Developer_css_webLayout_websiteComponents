import { checkForName } from './nameChecker';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function handleSubmit(event) {
	event.preventDefault();

	// check what text was put into the form field
	let formText = document.getElementById('name').value;
	checkForName(formText);
	const validate = validateName(formText);

	if (validateName(formText) === 'Not be blank') {
		alert('The input field cannot be blank');
		return;
	} else if (validate === 'Not be URL') {
		alert('The input field not be URL');
		return;
	}
	console.log('::: Form Submitted :::');
	fetch('http://localhost:8080/test', {
		method: 'POST',
		mode: 'cors',
		credentials: 'same-origin',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ data: formText }),
	}).then(async res => {
		const data = await res.json();
		if (data) {
			callApiMeaningCloud(data);
		}
	});
}
function callApiMeaningCloud(data) {
	const formdData = new FormData();
	const options = data.options;
	formdData.append('key', options.key);
	formdData.append('lang', options.lang);
	formdData.append('model', options.model);
	formdData.append('url', options.url);

	fetch(data.url, {
		method: 'POST',
		body: formdData,
	})
		.then(async res => {
			const result = await res.text();
			const resultsElement = $('#results');
			resultsElement.innerHTML = `<p>${result}</p>`;
		})
		.catch(err => {
			console.info(`🎁 src/client/js/formHandler.js	Line:34	ID:e2098a`, err);
		});
}
function validateName(value) {
	if (!value) {
		return 'Not be blank';
	}
	if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(value)) {
		return 'Not be URL';
	}
}
export { handleSubmit, validateName };
