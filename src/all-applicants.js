const json = window.localStorage.getItem('allApplicants');

let allApplicants = null;
if(json) {
    allApplicants = JSON.parse(json);
} else {
    allApplicants = [];
}

const tbody = document.getElementById('allApplicants');

for(let i = 0; i < allApplicants.length; i++) {
    const applicant = allApplicants[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = applicant.name;
    tr.appendChild(nameCell);

    const placeOfOriginCell = document.createElement('td');
    placeOfOriginCell.textContent = applicant.placeOfOrigin;
    tr.appendChild(placeOfOriginCell);
    
    const loyaltyCell = document.createElement('td');
    loyaltyCell.textContent = applicant.loyalty;
    tr.appendChild(loyaltyCell);


    tbody.appendChild(tr);
}



