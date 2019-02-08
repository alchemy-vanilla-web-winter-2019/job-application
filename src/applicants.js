const retrieveJson = window.localStorage.getItem('job-applicant');
const applicantData = JSON.parse(retrieveJson);
const tableNode = document.getElementById('table');
const buttonNode = document.getElementById('return-home');

for(let i = 0; i < applicantData.length; i++) {
    const applicants = applicantData[i];
    const newRow = document.createElement('tr');

    const nameEntry = document.createElement('td');
    nameEntry.textContent = applicants.name;
    newRow.appendChild(nameEntry);

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

