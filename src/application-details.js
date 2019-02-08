const applicantJSON = window.localStorage.getItem('applicants');

let applicants = [];
let applicant = null;

const searchParams = new URLSearchParams(window.location.search);
const name = searchParams.get('name');

if(applicantJSON) {
    applicants = JSON.parse(applicantJSON);
}

for(let index = 0; index < applicants.length; index++) {
    let currentApplicant = applicants[index];
    if(name === currentApplicant.name) {
        applicant = currentApplicant;       
        break;
    }
}  

const nameNode = document.getElementById('name');
const statusNode = document.getElementById('status');
const employmentNode = document.getElementById('employment');
const salaryNode = document.getElementById('salary');
const habitListNode = document.getElementById('habits');
const emailNode = document.getElementById('email');
const headerNode = document.getElementById('details');

nameNode.textContent = applicant.name;
statusNode.textContent = applicant.status;
employmentNode.textContent = applicant.employment;
emailNode.textContent = applicant.email;
headerNode.textContent = 'Application Details for ' + applicant.name

if(applicant.habitList.length === 0) {
    habitListNode.textContent = 'none specified';
}
else {
    for(let i = 0; i < applicant.habitList.length; i++) {
        habitListNode.textContent += applicant.habitList[i] + '! ';
    }
}

if(employmentNode.textContent === 'employed') {
    salaryNode.textContent = applicant.salary;
}
else {
    salaryNode.textContent = 'broke';
}