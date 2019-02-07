const applicationList = document.getElementById('applicant-list');

const jsonArrayString = window.localStorage.getItem('dope');
const applications = JSON.parse(jsonArrayString);
console.log('help', applications);

for(let i = 0; i < applications.length; i++) {
    const newRow = document.createElement('tr'); 
    const nameTD = document.createElement('td'); 

    nameTD.textContent = applications[i].name;
    applicationList.appendChild(newRow);
    newRow.appendChild(nameTD);
}