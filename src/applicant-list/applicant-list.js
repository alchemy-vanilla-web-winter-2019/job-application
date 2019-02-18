const applicantListNode = document.getElementById('applicant-list');

const jsonArrayString = window.localStorage.getItem('applicant');
const applicantArray = JSON.parse(jsonArrayString);

for(let i = 0; i < applicantArray.length; i++) {
    const newRow = document.createElement('tr');
    const nameTD = document.createElement('td');
    const emailTD = document.createElement('td');
    const phoneTD = document.createElement('td');
    const scheduleTD = document.createElement('td');
    const positionTD = document.createElement('td');
    const nameAnchor = document.createElement('a');
    
    nameAnchor.href = 'applicant-detail.html?name=' + encodeURIComponent(applicantArray[i].nameKey);
    nameAnchor.textContent = applicantArray[i].nameKey;
    emailTD.textContent = applicantArray[i].emailKey;
    phoneTD.textContent = applicantArray[i].phoneKey;
    // scheduleTD.textContent = applicantArray[i].scheduleKey.join(', ');
    positionTD.textContent = applicantArray[i].positionsKey;
    
    nameTD.appendChild(nameAnchor);
    newRow.appendChild(nameTD);
    newRow.appendChild(emailTD);
    newRow.appendChild(phoneTD);
    newRow.appendChild(scheduleTD);
    newRow.appendChild(positionTD);
    applicantListNode.appendChild(newRow);    
}
