const applicantJSON = window.localStorage.getItem('applicants');
let applicants = [];
const tbody = document.getElementById('applicants');

if(applicantJSON) {
    applicants = JSON.parse(applicantJSON);
}

if(!applicantJSON) {
    window.location = '../index.html';
}

for(let index = 0; index < applicants.length; index++) {
    const applicant = applicants[index];
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    const link = document.createElement('a');
    link.href = 'application-details.html?name=' + encodeURIComponent(applicant.name);
    link.textContent = applicant.name;
    tr.appendChild(nameCell);
    nameCell.appendChild(link);


    const emailCell = document.createElement('td');
    emailCell.textContent = applicant.email;
    tr.appendChild(emailCell);
    
    tbody.appendChild(tr);
}
