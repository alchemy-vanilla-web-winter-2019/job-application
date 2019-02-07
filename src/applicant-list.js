insertApplicantInfo(getApplicantInfo());

function getApplicantInfo() {
    const getApplicantsJSON = window.localStorage.applicants;
    let applicantsObjectArray = [];
    if(getApplicantsJSON) {
        applicantsObjectArray = JSON.parse(getApplicantsJSON);
    }
    return applicantsObjectArray;
}
    
function insertApplicantInfo(applicantsObjectArray) {
    const tbodyElement = document.getElementById('applicants-table');
    for(let i = 0; i < applicantsObjectArray.length; i++) {
        const trElement = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.textContent = applicantsObjectArray[i].name;
        trElement.appendChild(nameCell);
        
        const cityCell = document.createElement('td');
        cityCell.textContent = applicantsObjectArray[i].location.city + ', ' + applicantsObjectArray[i].location.state;
        trElement.appendChild(cityCell);
        
        const steakCell = document.createElement('td');
        steakCell.textContent = applicantsObjectArray[i].steak;
        trElement.appendChild(steakCell);
        
        const saladCell = document.createElement('td');
        saladCell.textContent = applicantsObjectArray[i].salad.join(', ');
        trElement.appendChild(saladCell);
        
        const curlinessCell = document.createElement('td');
        curlinessCell.textContent = applicantsObjectArray[i].curliness;
        trElement.appendChild(curlinessCell);
        
        tbodyElement.appendChild(trElement);
    }
}