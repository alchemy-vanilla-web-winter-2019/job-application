const retrieveJson = window.localStorage.getItem('job-applicant');
const applicantData = JSON.parse(retrieveJson);
const tableNode = document.getElementById('table');
const buttonNode = document.getElementById('return-home');
let applicantArray = [];

if(applicantData) {
    applicantArray = applicantData;
}

for(let i = 0; i < applicantArray.length; i++) {
    const applicants = applicantArray[i];

    const newRow = document.createElement('tr');
    
    const nameEntry = document.createElement('td');
    newRow.appendChild(nameEntry);

    const link = document.createElement('a');
    link.href = 'applicant-details.html?name=' + encodeURIComponent(applicants.name);
    link.textContent = applicants.name
    link.target = '_blank';
    nameEntry.appendChild(link);
    
    const seperatorEntry = document.createElement('td');
    seperatorEntry.textContent = '|';
    newRow.appendChild(seperatorEntry);
    
    const phoneEntry = document.createElement('td');
    phoneEntry.textContent = applicants.phone;
    newRow.appendChild(phoneEntry);

    tableNode.appendChild(newRow);
}

buttonNode.addEventListener('click', function() {
    window.location = './index.html';
});

