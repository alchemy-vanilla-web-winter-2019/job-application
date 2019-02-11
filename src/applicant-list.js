import getApplicantsInfo from './get-applicants-info.js';

insertApplicantInfo(getApplicantsInfo());
    
function insertApplicantInfo(applicantsObjectArray) {
    const tbodyElement = document.getElementById('applicants-table');
    for(let i = 0; i < applicantsObjectArray.length; i++) {
        const applicantObject = applicantsObjectArray[i];
        const trElement = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        const aElement = document.createElement('a');
        aElement.href = 'review.html?name=' + encodeURIComponent(applicantObject.name);
        aElement.textContent = applicantObject.name;
        nameCell.appendChild(aElement);
        trElement.appendChild(nameCell);
        
        const cityCell = document.createElement('td');
        cityCell.textContent = applicantObject.location.city + ', ' + applicantObject.location.state;
        trElement.appendChild(cityCell);
        
        const steakCell = document.createElement('td');
        steakCell.textContent = applicantObject.steak;
        trElement.appendChild(steakCell);
        
        const saladCell = document.createElement('td');
        saladCell.textContent = applicantObject.salad.join(', ');
        trElement.appendChild(saladCell);
        
        const curlinessCell = document.createElement('td');
        curlinessCell.textContent = applicantObject.curliness;
        trElement.appendChild(curlinessCell);
        
        tbodyElement.appendChild(trElement);
    }
}