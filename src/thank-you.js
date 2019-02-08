const applicantJSON = window.localStorage.getItem('applicants');
const headerNode = document.getElementById('thank-you');

let applicants = [];

if(applicantJSON) {
    applicants = JSON.parse(applicantJSON);
}

const applicant = applicants[applicants.length - 1];

headerNode.textContent = 'Thank you, ' + applicant.name + '!';



