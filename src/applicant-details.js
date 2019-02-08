const existingApplicantJSON = window.localStorage.getItem('applicants');
const nameNode = document.getElementById('name');
const cityNode = document.getElementById('city');
const phoneNumberNode = document.getElementById('phone-number');
const escapeReason = document.getElementsByName('escape-reason');
let applicant = null;
let applicants = null; 
if(existingApplicantJSON) {
    applicants = JSON.parse(existingApplicantJSON);  
}

else {
    applicants = [];
}

const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

for(let index = 0; index < applicants.length; index++) {
    const currentApplicant = applicants[index]; 
    if(currentApplicant.name === name) {
        applicant = currentApplicant;
        break;
    }
}

nameNode.textContent = applicant.name;
cityNode.textContent = applicant.city;
phoneNumberNode.textContent = applicant.phone;
escapeReason.textContent = applicant.escapeArray;
