const applicantJSON = window.localStorage.getItem('applicants');
let applicants = [];
const tbody = document.getElementById('applicants');

if(applicantJSON) {
    applicants = JSON.parse(applicantJSON);
}

//console.log(applicants);

if(!applicantJSON) {
    window.location = '../index.html';
}

for(let index = 0; index < applicants.length; index++) {
    const applicant = applicants[index];
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = applicant.name;
    tr.appendChild(nameCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = applicant.email;
    tr.appendChild(emailCell);

    console.log(tbody.textContent);
    tbody.appendChild(tr);
}
