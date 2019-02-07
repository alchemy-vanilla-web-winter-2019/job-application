const applicantsTable = document.getElementById('applicants-table');
const numberOfColumns = document.getElementsByClassName('column');

const newApplicationsStringArray = window.localStorage.getItem('newApplications');
const newApplications = JSON.parse(newApplicationsStringArray);

for(let i = 0; i < newApplications.length; i++) {
    const newApplicantRow = document.createElement('tr');
    const headerArray = [newApplications[i].name, newApplications[i].clothes, newApplications[i].skills.join(', ')];    
    
    for(let j = 0; j < numberOfColumns.length; j++) {
        const newTD = document.createElement('td');
        newTD.textContent = headerArray[j];
        
        newApplicantRow.appendChild(newTD);
    }
    applicantsTable.appendChild(newApplicantRow);
}