const attributesNode = document.getElementById('attributes');

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

    nameTD.textContent = applicationsArray[i].name;
    weaponTD.textContent = applicationsArray[i].weapon;
    rolesTD.textContent = applicationsArray[i].roles.join(', ');
    lawfulnessTD.textContent = applicationsArray[i].lawfulness;

    newRow.appendChild(nameTD);
    newRow.appendChild(weaponTD);
    newRow.appendChild(rolesTD);
    newRow.appendChild(lawfulnessTD);
    attributesNode.appendChild(newRow);

}