const json = window.localStorage.getItem('applicants');

let applicants = null;

if(json) {
    applicants = JSON.parse(json);
} else {
    applicants = [];
}

const tbody = document.getElementById('applicants');


for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];

    const nameRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = applicant.name;
    nameRow.appendChild(nameCell);
    

    tbody.appendChild(nameRow);
}
