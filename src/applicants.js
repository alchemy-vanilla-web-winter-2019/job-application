let allApplicants = [];

const jsonString = window.localStorage.getItem('applicants');
const allApplicantsNode = document.getElementById('applicants');

if(jsonString) {
    allApplicants = JSON.parse(jsonString);
   
}

else {
    window.location = './index.html';
}

for(let index = 0; index < allApplicants.length; index++) {
    const applicant = allApplicants[index];
    
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const cityCell = document.createElement('td');
    const phoneCell = document.createElement('td');
console.log(phoneCell);
    nameCell.textContent = applicant.name;
    phoneCell.textContent = applicant.phone;
    cityCell.textContent = applicant.city;
    row.appendChild(nameCell);

    allApplicantsNode.appendChild(row);
}
