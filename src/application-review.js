const applicant = window.localStorage.getItem('applicant');
const newApplicant = JSON.parse(applicant);

const nameNode = document.getElementById('name');
const philosophyNode = document.getElementById('philosophy');
const skillNode = document.getElementById('skill');
const moralityNode = document.getElementById('morality');
const cityNode = document.getElementById('city');
const salaryNode = document.getElementById('salary');

// console.log(newApplicant);

nameNode.textContent = newApplicant.name;
philosophyNode.textContent = newApplicant.philosophy;
skillNode.textContent = newApplicant.skill;
moralityNode.textContent = newApplicant.morality;
cityNode.textContent = newApplicant.city;
salaryNode.textContent = newApplicant.salary;