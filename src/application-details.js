const applicantName = document.getElementById('name');
const position = document.getElementById('position');
const knitExperience = document.getElementById('knitting-experience');
const woolAllergy = document.getElementById('allergy');
const yarnsUsed = document.getElementById('yarn-brands');

const json = window.localStorage.getItem('applicant');

const fullApplicant = JSON.parse(json);

applicantName.textContent = fullApplicant.name;
position.textContent = fullApplicant.position;
knitExperience.textContent = fullApplicant.skillLevel;
woolAllergy.textContent = fullApplicant.allergy.join(' ');
yarnsUsed.textContent = fullApplicant.yarn.join(' ');
