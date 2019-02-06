const json = window.localStorage.getItem('allApplicants');

let allApplicants = [];

if(json) {
    allApplicants = JSON.parse(json);
}

const tbody = document.getElementById('tbody');

for(let i = 0; i < allApplicants.length; i++) {
    const applicant = allApplicants[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = applicant.name;
    tr.appendChild(nameCell);
    
    const realmCell = document.createElement('td');
    realmCell.textContent = applicant.realm;
    tr.appendChild(realmCell);
    
    const loyaltyCell = document.createElement('td');
    loyaltyCell.textContent = applicant.loyalty;
    tr.appendChild(loyaltyCell);
    
    tbody.appendChild(tr);
}
