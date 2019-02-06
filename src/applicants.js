const tbody = document.getElementById('tbody');
const applicantJSON = window.localStorage.getItem('applicant');
let applicants = [];

if(applicantJSON) {
    applicants = JSON.parse(applicantJSON);
}

if(!applicantJSON) {
    window.location = '../index.html';
}

for(let index = 0; index < applicants.length; index++) {
    const tr = document.getElementById('tr');
    const applicant = applicants[index];

    const nameCell = document.createElement('td');
    nameCell.textContent = applicant.name;
    tr.appendChild(nameCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = applicant.email;
    tr.appendChild(emailCell);

    tbody.appendChild(tr);
}
