const applicantName = document.getElementById('name');
const position = document.getElementById('position');
const knitExperience = document.getElementById('knitting-experience');
const woolAllergy = document.getElementById('allergy');
const yarnsUsed = document.getElementById('yarn-brands');

const jsonString = window.localStorage.getItem('applicants');

let applicant = [];
if(jsonString) {
    const applicants = JSON.parse(jsonString);
    applicant = applicants[applicants.length - 1];
}

else {
    window.location = '/';
}



applicantName.textContent = applicant.name;
position.textContent = applicant.position;
knitExperience.textContent = applicant.skillLevel;
woolAllergy.textContent = applicant.allergy.join(' ');
yarnsUsed.textContent = applicant.yarn.join(' ');
