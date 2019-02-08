const applicants = window.localStorage.getItem('applicant');
const newApplicants = JSON.parse(applicants);

const newApplicant = newApplicants[newApplicants.length - 1];

const nameNode = document.getElementById('name');

nameNode.textContent = newApplicant.name;