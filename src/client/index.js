import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
// alert('I EXIST');

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const formElement = $('form');
const inputName = $('#name');

formElement.addEventListener(`submit`, event => {
	event.preventDefault();
	console.info(`🎁 src/client/index.js	Line:16	ID:083dfb`, inputName.value);
});
