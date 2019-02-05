const applicantJSON = window.localStorage.getItem('lectric-eye');
const applicant = JSON.parse(applicantJSON);

const nameNode = document.getElementById('name');
const cityNode = document.getElementById('city');
const phoneNumberNode = document.getElementById('phone-number');


nameNode.textContent = applicant.name;
cityNode.textContent = applicant.city;
phoneNumberNode.textContent = applicant.phone;