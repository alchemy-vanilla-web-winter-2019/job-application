const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const gender = document.getElementById('gender');

const jsonObject = window.localStorage.getItem('applicant');
const hydratedApplicant = JSON.parse(jsonObject);

name.textContent = hydratedApplicant.name;
email.textContent = hydratedApplicant.email;
phone.textContent = hydratedApplicant.phone;
gender.textContent = hydratedApplicant.gender;
