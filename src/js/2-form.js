const localStorageKey = 'feedback-form-state';

const form = document.querySelector(".feedback-form");

function readFormData(form) {
    const mail = form.email.value;
    const feedback = form.message.value;
    return {
        mail,
        feedback
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
    form.email.value = data.mail.trim();
    form.message.value = data.feedback.trim();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = readFormData(form);
  console.log(data);
  localStorage.removeItem(localStorageKey);
  form.reset();
});