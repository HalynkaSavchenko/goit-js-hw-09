const localStorageKey = 'feedback-form-state';

const form = document.querySelector(".feedback-form");

function readFormData(form) {
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    return {
        email,
        message
    }
}

form.addEventListener("input", (event) => {
    const data = readFormData(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(localStorageKey, jsonData);
});

const rawData = localStorage.getItem(localStorageKey);
if (rawData){
    const data = JSON.parse(rawData);
    form.email.value = data.email;
    form.message.value = data.message;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = readFormData(form);
  console.log(data);
  localStorage.removeItem(localStorageKey);
  form.reset();
});