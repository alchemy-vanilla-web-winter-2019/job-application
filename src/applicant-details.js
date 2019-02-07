const applicants = window.localStorage.getItem('applicant');
const applicantArray = JSON.parse(applicants);

let currentApplicant = null;

const nameNode = document.getElementById('name');
const philosophyNode = document.getElementById('philosophy');
const skillNode = document.getElementById('skill');
const moralityNode = document.getElementById('morality');
const cityNode = document.getElementById('city');
const salaryNode = document.getElementById('salary');

const searchParams = new URLSearchParams(window.location.search);
const searchName = searchParams.get('name');

for(let index = 0; index < applicantArray.length; index++) {
    if(applicantArray[index].name === searchName) {
        currentApplicant = applicantArray[index];
    }
}

nameNode.textContent = currentApplicant.name;
philosophyNode.textContent = currentApplicant.philosophy;
skillNode.textContent = currentApplicant.skill;
moralityNode.textContent = currentApplicant.morality;
cityNode.textContent = currentApplicant.city;
salaryNode.textContent = currentApplicant.salary;