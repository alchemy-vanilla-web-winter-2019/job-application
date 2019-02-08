const applicantList = document.getElementById('applicant-list');


function deleteClicked(deleteIndex) {
    let applicants = [];

    const jsonArray = window.localStorage.getItem('applicants');
    if(jsonArray) {
        applicants = JSON.parse(jsonArray);
    }
    applicants.splice(deleteIndex, 1);
    const serialized = JSON.stringify(applicants);
    window.localStorage.setItem('applicants', serialized);
    while (applicantList.firstChild) {
        applicantList.removeChild(applicantList.firstChild);
    }
    buildTable();
}

function buildTable() {
    const jsonArray = window.localStorage.getItem('applicants');

    let applicants = [];
    if(jsonArray) {
        applicants = JSON.parse(jsonArray);
    }

    const keys = ['id', 'name', 'quest', 'color', 'talents', 'loyalty'];
    
    for(let i = 0; i < applicants.length; i++) {
        const newRow = document.createElement('tr');
        applicantList.appendChild(newRow);
    
        for(let j = 0; j < keys.length; j++) {
            const newCell = document.createElement('td');
            const key = keys[j];
            const value = applicants[i][key];
            console.log(key, value);
            if(key === 'id') {
                const newAnchor = document.createElement('a');
                newAnchor.href = 'application-details.html?id=' + encodeURIComponent(value);
                newAnchor.textContent = value;
                newCell.appendChild(newAnchor);
            }
            else {
                if(value instanceof Array) {
                    newCell.textContent = value.join(', ');            
                }
                else 
                {
                    newCell.textContent = value;
                }
            }
            newRow.appendChild(newCell);
        }
        const deleteCell = document.createElement('td');
        newRow.appendChild(deleteCell);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteCell.appendChild(deleteButton);
        deleteButton.addEventListener('click', function () {
            deleteClicked(i);
        });
    }
}

buildTable();