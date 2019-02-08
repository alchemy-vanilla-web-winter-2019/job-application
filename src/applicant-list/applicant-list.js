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
    const tableHeadings = [applicationKeys[0], applicationKeys[3], applicationKeys[4], 'delete'];
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
        let rowClass = newApplications[i].name + newApplications[i].duplicate;
        rowClass = rowClass.split(' ').join('');
        newApplicantRow.classList.add(rowClass);
        if(i % 2 !== 0) {
            newApplicantRow.classList.add('even');
        }
        
        const headerArray = [newApplications[i].name, newApplications[i].clothes, newApplications[i].skills.join(', ')];    
        
        for(let j = 0; j < numberOfColumns.length; j++) {
            const newTD = document.createElement('td');
            if(j === 0) {
                const nameAnchor = document.createElement('a');                       
                nameAnchor.href = 'applicant-detail.html?name=' + encodeURIComponent(headerArray[j]);
                const duplicateSearchString = encodeURIComponent(headerArray[j]) + encodeURIComponent(newApplications[i].duplicate);
                nameAnchor.href = 'applicant-detail.html?name=' + duplicateSearchString;            
                nameAnchor.textContent = headerArray[j];
                nameAnchor.classList.add('link');
                newTD.appendChild(nameAnchor);
            } else if(j === numberOfColumns.length - 1) {
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'X';
                deleteButton.type = 'submit';
                let buttonClass = newApplications[i].name + newApplications[i].duplicate;
                buttonClass = buttonClass.split(' ').join('');
                deleteButton.classList.add(buttonClass);
                deleteButton.addEventListener('click', function() {
                    console.log('click');
                });
                newTD.appendChild(deleteButton);
                console.log(buttonClass);
            } else {                
                newTD.textContent = headerArray[j];
            }
    
            newApplicantRow.appendChild(newTD);
        }
        applicantsBody.appendChild(newApplicantRow);
    }
}

