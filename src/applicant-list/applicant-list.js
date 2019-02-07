const newApplicationsStringArray = window.localStorage.getItem('newApplications');
const newApplications = JSON.parse(newApplicationsStringArray);

const applicantsHeader = document.getElementById('applicants-header');
const applicationKeys = Object.keys(newApplications[0]);
const tableHeadings = [applicationKeys[0], applicationKeys[2], applicationKeys[3]];
const headingRow = document.createElement('tr');
applicantsHeader.appendChild(headingRow);

for(let i = 0; i < tableHeadings.length; i++) {
    const heading = document.createElement('th');
    heading.textContent = tableHeadings[i];
    headingRow.appendChild(heading);
}

const applicantsTable = document.getElementById('applicants-table');
const numberOfColumns = document.getElementsByTagName('th');

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