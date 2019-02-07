const json = window.localStorage.getItem('applicants');
//double check applicant v applicantS
let applicant = null;

if(json) {
    applicant = JSON.parse(json);
} else {
    applicant = [];
}

const tbody = document.getElementById('applicants');

for(let i = 0; i < applicant.length; i++){
    const applicantSelect = applicant[i];
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = applicantSelect.name;
    tr.appendChild(nameCell);

    const cityCell = document.createElement('td');
    cityCell.textContent = applicantSelect.city;
    tr.appendChild(cityCell);

    const stateCell = document.createElement('td');
    stateCell.textContent = applicantSelect.state;
    tr.appendChild(stateCell);

    const prankCell = document.createElement('td');
    prankCell.textContent = applicantSelect.prank;
    tr.appendChild(prankCell);
    
    const weaponCell = document.createElement('td');
    weaponCell.textContent = applicantSelect.weapon.join(', ');
    tr.appendChild(weaponCell);
    
    const badnessCell = document.createElement('td');
    badnessCell.textContent = applicantSelect.slider;
    tr.appendChild(badnessCell);

    tbody.appendChild(tr);
}