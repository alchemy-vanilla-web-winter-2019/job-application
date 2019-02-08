import deleteApplicant from './delete-applicant.js';

function makeApplicationsTable(tableID, arrayOfApplicants) {
    const applicantsTable = document.createElement('table');
    const applicantsHeader = document.createElement('thead');
    const applicantsBody = document.createElement('tbody');
    tableID.appendChild(applicantsTable);
    applicantsTable.appendChild(applicantsHeader);
    applicantsTable.appendChild(applicantsBody);

    if(arrayOfApplicants[0].none !== true) {
        const applicationKeys = Object.keys(arrayOfApplicants[0]);
        const tableHeadings = [applicationKeys[0], applicationKeys[3], applicationKeys[4], 'delete'];
        const headingRow = document.createElement('tr');
        applicantsHeader.appendChild(headingRow);
        for(let i = 0; i < tableHeadings.length; i++) {
            const heading = document.createElement('th');
            heading.textContent = tableHeadings[i];
            headingRow.appendChild(heading);
        }
        
        const numberOfColumns = document.getElementsByTagName('th');
        
        for(let i = 0; i < arrayOfApplicants.length; i++) {
            const newApplicantRow = document.createElement('tr');        
            if(i % 2 !== 0) {
                newApplicantRow.classList.add('even');
            }
            
            const headerArray = [arrayOfApplicants[i].name, arrayOfApplicants[i].clothes, arrayOfApplicants[i].skills.join(', ')];    
            
            for(let j = 0; j < numberOfColumns.length; j++) {
                const newTD = document.createElement('td');
                if(j === 0) {
                    const nameAnchor = document.createElement('a');                       
                    nameAnchor.href = 'applicant-detail.html?id=' + encodeURIComponent(arrayOfApplicants[i].identification);                
                    nameAnchor.textContent = headerArray[j];
                    nameAnchor.classList.add('link');
                    newTD.appendChild(nameAnchor);
                } else if(j === numberOfColumns.length - 1) {
                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'X';
                    deleteButton.type = 'submit';                
                    deleteButton.addEventListener('click', function() {
                        deleteApplicant(arrayOfApplicants[i]);
                        makeApplicationsTable(tableID, arrayOfApplicants);
                        location.reload();                        
                    });
                    newTD.appendChild(deleteButton);                
                } else {                
                    newTD.textContent = headerArray[j];
                }
        
                newApplicantRow.appendChild(newTD);
            }
            applicantsBody.appendChild(newApplicantRow);
        }
    }
}

export default makeApplicationsTable;