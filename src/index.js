import './css/styles.css';
import { formSubmit } from './modules/api-handler.js';

const formButton = document.getElementById('submit-button');
formButton.addEventListener('click', (event) => {
  formSubmit();
  event.preventDefault();
});
