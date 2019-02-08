const attributesNode = document.getElementById('attributes');
const jsonObject = window.localStorage.getItem('applications');

let applicationList = [];
if(jsonObject) {
    applicationList = JSON.parse(jsonObject);
}

function removeApplicant(identifier) {
    let removed = [];
    let stored = [];
    const jsonObject = window.localStorage.getItem('deleted-applications');
    if(jsonObject) {
        removed = JSON.parse(jsonObject);
    }

    for(let i = 0; i < applicationList.length; i++) {
        if(applicationList[i].identifier === identifier) {
           //push to 'deleted-applicants' 
            removed.push(applicationList[i]);
        } else {
            stored.push(applicationList[i]);
        }
    }
    const storedSerialize = JSON.stringify(stored);
    const removedSerialize = JSON.stringify(removed);
    window.localStorage.setItem('applications', storedSerialize);
    window.localStorage.setItem('deleted-applications', removedSerialize);
}

let applicationsArray = [];
const jsonArrayString = window.localStorage.getItem('applications');
if(jsonArrayString) {
    applicationsArray = JSON.parse(jsonArrayString);
}

for(let i = 0; i < applicationsArray.length; i++) {
    const newRow = document.createElement('tr');
    const nameTD = document.createElement('td');
    const weaponTD = document.createElement('td');
    const rolesTD = document.createElement('td');
    const lawfulnessTD = document.createElement('td');
    const nameAnchor = document.createElement('a');
    const removeTD = document.createElement('td');
    const removeButton = document.createElement('button');

    nameAnchor.href = 'application-details.html?identifier=' + encodeURIComponent(applicationsArray[i].identifier);
    nameAnchor.textContent = applicationsArray[i].name;
    weaponTD.textContent = applicationsArray[i].weapon;
    rolesTD.textContent = applicationsArray[i].roles.join(', ');
    lawfulnessTD.textContent = applicationsArray[i].lawfulness;
    removeButton.textContent = 'Remove';

    nameTD.appendChild(nameAnchor);
    newRow.appendChild(nameTD);
    newRow.appendChild(weaponTD);
    newRow.appendChild(rolesTD);
    newRow.appendChild(lawfulnessTD);
    removeTD.appendChild(removeButton);
    newRow.appendChild(removeTD);
    attributesNode.appendChild(newRow);

    removeButton.addEventListener('click', function() {
        removeApplicant(applicationsArray[i].identifier);
        window.location = 'applicant-list.html';
    });

}