const nameNode = document.getElementById('name');
const philosophyNode = document.getElementById('philosophy-result');
const skillNode = document.getElementById('skill');
const jobTitleNode = document.getElementById('job-title');
const cityNode = document.getElementById('city');
const salaryNode = document.getElementById('salary');
const marketRateNode = document.getElementById('market-rate');
const applicants = window.localStorage.getItem('applicant');
const newApplicants = JSON.parse(applicants);
const newApplicant = newApplicants[newApplicants.length - 1];

let jobTitle = '';

console.log(newApplicant.skill);

const min = 3000;
const max = 5000;
const marketRate = Math.floor(Math.random() * (+max - +min) + min);

if(newApplicant.skill === 'computers') {
    jobTitle = 'Junior Data Entry Clerk';
}
else if(newApplicant.skill === 'art') {
    jobTitle = 'Apprentice Business Card Designer';
}
else if(newApplicant.skill === 'music') {
    jobTitle = 'Corporate Podcast Sound Engineer Intern';
}
else if(newApplicant.skill === 'engineering') {
    jobTitle = 'Support Laborer to the Regional General Contractor';
}
else if(newApplicant.skill === 'cooking') {
    jobTitle = 'Associate Cafeteria Assistant';
}

nameNode.textContent = newApplicant.name;
philosophyNode.textContent = newApplicant.philosophy;
skillNode.textContent = newApplicant.skill;
jobTitleNode.textContent = jobTitle;
cityNode.textContent = newApplicant.city;
salaryNode.textContent = newApplicant.salary;
marketRateNode.textContent = marketRate;
