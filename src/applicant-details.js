const applicantJSON = window.localStorage.getItem('applicant');
const applicant = JSON.parse(applicantJSON);

const firstNameNode = document.getElementById('first-name');
const lastNameNode = document.getElementById('last-name');
const zipCodeNode = document.getElementById('zip-code');
const emailNode = document.getElementById('email');
const lengthTimeNode = document.getElementById('length');
const hoursNode = document.getElementById('hours');
const genreNode = document.getElementById('genre');


firstNameNode.textContent = applicant.firstName;
lastNameNode.textContent = applicant.lastName;
zipCodeNode.textContent = applicant.zipCode;
lengthTimeNode.textContent = applicant.lengthTime;
emailNode.textContent = applicant.email;
hoursNode.textContent = applicant.hours;

// if(lengthTimeNode.value === undefined) {
//     lengthTimeNode.textContent = 'not applicable';
// }
// else {
//     lengthTimeNode.textContent = applicant.lengthTime;
// }

if(applicant.genres.length === 0) {
    genreNode.textContent = 'none';
}
else {
    for(let index = 0; index < applicant.genres.length - 1; index++) {
        genreNode.textContent += applicant.genres[index] + ', ';
    }
    genreNode.textContent += applicant.genres[applicant.genres.length - 1];
}