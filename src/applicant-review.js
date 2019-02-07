const json = window.localStorage.getItem('allApplicants');

let allApplicants = [];
if(json) {
    allApplicants = JSON.parse(json);
}

// make elements written in the html
const tbody = document.getElementById('applicant-review');

for(let i = 0; i < allApplicants.length; i++) {
    const applicant = allApplicants[i];

    const tr = document.createElement('tr');

    // render cells
    const nameCell = document.createElement('td');
    nameCell.textContent = applicant.name;
    tr.appendChild(nameCell);

    const ssnCell = document.createElement('td');
    ssnCell.textContent = applicant.ssn;
    tr.appendChild(ssnCell);

    const readCell = document.createElement('td');
    readCell.textContent = applicant.read;
    tr.appendChild(readCell);

    const shortsCell = document.createElement('td');
    shortsCell.textContent = applicant.shorts;
    tr.appendChild(shortsCell);

    const favoriteOptionsCell = document.createElement('td');
    favoriteOptionsCell.textContent = applicant.favoriteOptions.join(', ');
    tr.appendChild(favoriteOptionsCell);

    const hateShortsCell = document.createElement('td');
    hateShortsCell.textContent = applicant.hateShortsAmmount;
    tr.appendChild(hateShortsCell);

    tbody.appendChild(tr);
}