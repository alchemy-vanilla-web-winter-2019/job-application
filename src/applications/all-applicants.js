const json = window.localStorage.getItem('allApplicants');

let allApplicants = null;

if(json) {
    allApplicants = JSON.parse(json);
} else {
    allApplicants = [];
}

const tbody = document.getElementById('all-applicants');

for(let index = 0; index < allApplicants.length; index++) {
    const applicant = allApplicants[index];

    const tr = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    // firstNameCell.textContent = applicant.firstName;
    const a = document.createElement('a');
    a.href = 'review.html?name=' + encodeURIComponent(applicant.firstName);
    a.textContent = applicant.firstName;
    firstNameCell.appendChild(a);
    tr.appendChild(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = applicant.lastName;
    tr.appendChild(lastNameCell);
    
    const emailCell = document.createElement('td');
    emailCell.textContent = applicant.email;
    tr.appendChild(emailCell);
    
    const streetCell = document.createElement('td');
    streetCell.textContent = applicant.street;
    tr.appendChild(streetCell);
    
    const cityCell = document.createElement('td');
    cityCell.textContent = applicant.city;
    tr.appendChild(cityCell);

    const countryCell = document.createElement('td');
    countryCell.textContent = applicant.country;
    tr.appendChild(countryCell);

    const killsCell = document.createElement('td');
    killsCell.textContent = applicant.kills;
    tr.appendChild(killsCell);

    const obedienceCell = document.createElement('td');
    obedienceCell.textContent = applicant.obedience;
    tr.appendChild(obedienceCell);

    const skillCell = document.createElement('td');
    skillCell.textContent = applicant.skill;
    tr.appendChild(skillCell);
    
    tbody.appendChild(tr);
}