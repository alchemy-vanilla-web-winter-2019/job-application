const name = document.getElementById('name');
const claustrophobic = document.getElementById('claustrophobic-level');
const spaceGear = document.getElementById('spacegear');
const spaceship = document.getElementById('spaceship');

const jsonString = window.localStorage.getItem('applicants');

const applicants = JSON.parse(jsonString);
const lastApplicant = applicants[applicants.length - 1];

// let lastApplicant = null;
// if(jsonString) {
//     const applicants = JSON.parse(jsonString);
//     lastApplicant = applicants[applicants.length - 1];
// }
// else {
//     window.location = './';
// }





name.textContent = lastApplicant.name;
claustrophobic.textContent = lastApplicant.claustrophobic;
spaceGear.textContent = lastApplicant.spacegear.join(' ');
spaceship.textContent = lastApplicant.spaceship;