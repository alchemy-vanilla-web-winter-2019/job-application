const nameNode = document.getElementById('name');
const applicant = window.localStorage.getItem('applicant');
const newApplicant = JSON.parse(applicant);

nameNode.textContent = newApplicant.name;