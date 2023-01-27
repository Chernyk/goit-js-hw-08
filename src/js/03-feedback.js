import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};
refs.form.addEventListener('submit', onFornSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));
function onInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

saveInfoAfterRefresh();

function onFornSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function saveInfoAfterRefresh() {
  const saveMessage = localStorage.getItem(STORAGE_KEY);
  if (saveMessage) {
    const parseMessage = JSON.parse(saveMessage);
    console.log(parseMessage);
    refs.input.value = parseMessage.email;
    refs.textarea.value = parseMessage.message;
  }
}
