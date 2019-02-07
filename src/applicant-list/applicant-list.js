const newApplicationsStringArray = window.localStorage.getItem('newApplications');
let newApplications = [];
if(newApplicationsStringArray) {
    newApplications = JSON.parse(newApplicationsStringArray);
} else {
    const noApplications = { none: true };
    newApplications.push(noApplications);
}

const tableSection = document.getElementById('table-section');
const applicantsTable = document.createElement('table');
const applicantsHeader = document.createElement('thead');
const applicantsBody = document.createElement('tbody');
tableSection.appendChild(applicantsTable);
applicantsTable.appendChild(applicantsHeader);
applicantsTable.appendChild(applicantsBody);

if(newApplications[0].none !== true) {
    const applicationKeys = Object.keys(newApplications[0]);
    const tableHeadings = [applicationKeys[0], applicationKeys[2], applicationKeys[3]];
    const headingRow = document.createElement('tr');
    applicantsHeader.appendChild(headingRow);
    for(let i = 0; i < tableHeadings.length; i++) {
        const heading = document.createElement('th');
        heading.textContent = tableHeadings[i];
        headingRow.appendChild(heading);
    }
    
    const numberOfColumns = document.getElementsByTagName('th');
    
    for(let i = 0; i < newApplications.length; i++) {
        const newApplicantRow = document.createElement('tr');
        if(i % 2 !== 0) {
            newApplicantRow.classList.add('even');
        }
        
        const headerArray = [newApplications[i].name, newApplications[i].clothes, newApplications[i].skills.join(', ')];    
        
        for(let j = 0; j < numberOfColumns.length; j++) {
            const newTD = document.createElement('td');
            if(j === 0) {
                const nameAnchor = document.createElement('a');
                nameAnchor.href = 'applicant-detail.html?name=' + encodeURIComponent(headerArray[j]);
                nameAnchor.textContent = headerArray[j];
                nameAnchor.classList.add('link');
                newTD.appendChild(nameAnchor);
            } else {
                newTD.textContent = headerArray[j];
            }
    
            newApplicantRow.appendChild(newTD);
        }
        applicantsBody.appendChild(newApplicantRow);
    }
}