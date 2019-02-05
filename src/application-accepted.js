const nameNode = document.getElementById('name');
const philosophyNode = document.getElementById('philosophy-result');
const skillNode = document.getElementById('skill');
const jobTitleNode = document.getElementById('job-title');
const cityNode = document.getElementById('city');
const salaryNode = document.getElementById('salary');
const applicant = window.localStorage.getItem('applicant');
const newApplicant = JSON.parse(applicant);

let jobTitle = '';

console.log(newApplicant.skill);

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
