const applicants = window.localStorage.getItem('applicant');
const newApplicants = JSON.parse(applicants);

const newApplicant = newApplicants[newApplicants.length - 1];

const nameNode = document.getElementById('name');
const philosophyNode = document.getElementById('philosophy');
const skillNode = document.getElementById('skill');
const moralityNode = document.getElementById('morality');
const cityNode = document.getElementById('city');
const salaryNode = document.getElementById('salary');

nameNode.textContent = newApplicant.name;
philosophyNode.textContent = newApplicant.philosophy;
skillNode.textContent = newApplicant.skill;
moralityNode.textContent = newApplicant.morality;
cityNode.textContent = newApplicant.city;
salaryNode.textContent = newApplicant.salary;

const moralityTestNode = document.getElementById('morality-test');

moralityTestNode.addEventListener('click', function() {    
    if(newApplicant.morality >= 3) {
        document.location = '/pages/application-denied.html';
    }
    
    else {
        document.location = '/pages/application-accepted.html';
    }
});



