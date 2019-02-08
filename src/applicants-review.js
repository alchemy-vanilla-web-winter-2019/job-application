let applicants = [];

const jsonApplicants = window.localStorage.getItem('applicants');

if(jsonApplicants) {
    applicants = JSON.parse(jsonApplicants);
}
else {
    window.location = './index.html';
}

const applicantsNode = document.getElementById('applicants');

for(let index = 0; index < applicants.length; index++) {
    const applicant = applicants[index];

    const row = document.createElement('tr');
    const firstName = document.createElement('td');
    const link = document.createElement('a');
    link.href = 'applicant-details.html' + encodeURIComponent('name');
    link.textContent = applicant.firstName;
    
    const lastName = document.createElement('td');
    lastName.textContent = applicant.lastName;

    firstName.appendChild(link);
    row.appendChild(firstName);
    row.appendChild(lastName);

    applicantsNode.appendChild(row);
}