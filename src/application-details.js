const applicantName = document.getElementById('name');
const position = document.getElementById('position');
const knitExperience = document.getElementById('knitting-experience');
const woolAllergy = document.getElementById('allergy');
const yarnsUsed = document.getElementById('yarn-brands');

const jsonString = window.localStorage.getItem('applicants');

let applicant = null;
let applicants = [];
if(jsonString) {
    applicants = JSON.parse(jsonString);
    
}

else {
    window.location = '/';
}

const searchParam = new URLSearchParams(window.location.search);

const nameToMatch = searchParam.get('name');

if(nameToMatch) {
    for(let i = 0; i < applicants.length; i++) {
        let currentApplicant = applicants[i];

        if(currentApplicant.name === nameToMatch) {
            applicant = currentApplicant;
            break;
        }
    }
}

else {
    applicant = applicants[applicants.length - 1];
}

applicantName.textContent = applicant.name;
position.textContent = applicant.position;
knitExperience.textContent = applicant.skillLevel;
woolAllergy.textContent = applicant.allergy.join(' ');
yarnsUsed.textContent = applicant.yarn.join(' ');
