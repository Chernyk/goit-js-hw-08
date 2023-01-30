import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
let formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));
function onInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

saveInfoAfterRefresh();

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function saveInfoAfterRefresh() {
  try {
    const saveMessage = localStorage.getItem(STORAGE_KEY);
    if (saveMessage) {
      formData = JSON.parse(saveMessage);
      Object.entries(formData).forEach(([key, value]) => {
        refs.form[key].value = value;
      });
    }
  } catch (error) {
    console.log(error);
  }
}
