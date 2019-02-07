const applicantsTable = document.getElementById('applicants-table');
const numberOfColumns = document.getElementsByClassName('column');

const newApplicationsStringArray = window.localStorage.getItem('newApplications');
const newApplications = JSON.parse(newApplicationsStringArray);

//if skills is empty

for(let i = 0; i < newApplications.length; i++) {
    const newApplicantRow = document.createElement('tr');
    if(i % 2 !== 0) {
        newApplicantRow.classList.add('even');
    }
    
    const headerArray = [newApplications[i].name, newApplications[i].clothes, newApplications[i].skills.join(', ')];    
    
    for(let j = 0; j < numberOfColumns.length; j++) {
        const newTD = document.createElement('td');
        newTD.textContent = headerArray[j];
        
        newApplicantRow.appendChild(newTD);
    }
    applicantsTable.appendChild(newApplicantRow);
}