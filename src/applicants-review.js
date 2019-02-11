const existingApplicants = window.localStorage.getItem('applicants');
const applicantsNode = document.getElementById('applicants');

let applicants = null;
if(existingApplicants) {
    applicants = JSON.parse(existingApplicants);
}
else {
    applicants = [];
    window.location = './index.html';
}

for(let index = 0; index < applicants.length; index++) {
    const applicant = applicants[index];

    const row = document.createElement('tr');
    const firstName = document.createElement('td');
    const link = document.createElement('a');
    link.href = 'applicant-details.html?name=' + encodeURIComponent(applicant.firstName);
    link.textContent = applicant.firstName;
    
    const lastName = document.createElement('td');
    lastName.textContent = applicant.lastName;

    firstName.appendChild(link);
    row.appendChild(firstName);
    row.appendChild(lastName);

    applicantsNode.appendChild(row);
}