const existingApplicants = window.localStorage.getItem('applicants');
const firstNameNode = document.getElementById('first-name');
const lastNameNode = document.getElementById('last-name');
const zipCodeNode = document.getElementById('zip-code');
const emailNode = document.getElementById('email');
const lengthTimeNode = document.getElementById('length');
const hoursNode = document.getElementById('hours');
const genreNode = document.getElementById('genre');

let applicants = null;
let applicant = null;


if(existingApplicants) {
    applicants = JSON.parse(existingApplicants);
}
else {
    applicants = [];
    window.location = './index.html';
}

const searchParams = new URLSearchParams(window.location.search);
const name = searchParams.get('name');

console.log(name);

for(let index = 0; index < applicants.length; index++) {
    const currentApplicant = applicants[index];
    if(currentApplicant.firstName === name) {
        applicant = currentApplicant;
        break;
    }
}

// console.log(applicant);


firstNameNode.textContent = applicant.firstName;
lastNameNode.textContent = applicant.lastName;
zipCodeNode.textContent = applicant.zipCode;
lengthTimeNode.textContent = applicant.lengthTime;
emailNode.textContent = applicant.email;
hoursNode.textContent = applicant.hours;

if(applicant.genres.length === 0) {
    genreNode.textContent = 'none';
}
else {
    for(let index = 0; index < applicant.genres.length - 1; index++) {
        genreNode.textContent += applicant.genres[index] + ', ';
    }
    genreNode.textContent += applicant.genres[applicant.genres.length - 1];
}