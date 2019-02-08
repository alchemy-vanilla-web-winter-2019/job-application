let allApplicants = [];

const jsonString = window.localStorage.getItem('applicants');

if(jsonString) {
    allApplicants = JSON.parse(jsonString);  
}

else {
    window.location = './index.html';
}

const allApplicantsNode = document.getElementById('applicants');

for(let index = 0; index < allApplicants.length; index++) {
    const applicant = allApplicants[index];
    
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const cityCell = document.createElement('td');
    const phoneCell = document.createElement('td');
    const link = document.createElement('a');
    
    
    link.href = 'details-applicant.html?name=' + encodeURIComponent(applicant.name);
    phoneCell.textContent = applicant.phone;
    cityCell.textContent = applicant.city;
    link.textContent = applicant.name;
    
    nameCell.appendChild(link);
    row.appendChild(nameCell);
    row.appendChild(cityCell);
    row.appendChild(phoneCell);

    allApplicantsNode.appendChild(row);

}
