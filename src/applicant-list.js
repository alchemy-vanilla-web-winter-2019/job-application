const applicationList = document.getElementById('applicant-list');

const jsonArrayString = window.localStorage.getItem('dope');
const applications = JSON.parse(jsonArrayString);
console.log('Multi Applications Key', applications);

for(let i = 0; i < applications.length; i++) {
    const newRow = document.createElement('tr'); 
    const nameTD = document.createElement('td');
    const digitsTD = document.createElement('td'); 
    const emailTD = document.createElement('td'); 
    const talkbossTD = document.createElement('td'); 
    const payTD = document.createElement('td'); 

    nameTD.textContent = applications[i].name;
    digitsTD.textContent = applications[i].digits;
    emailTD.textContent = applications[i].email;
    talkbossTD.textContent = applications[i].talkboss.join(', ');
    payTD.textContent = applications[i].pay;

    applicationList.appendChild(newRow);
    newRow.appendChild(nameTD);
    newRow.appendChild(digitsTD);
    newRow.appendChild(emailTD);
    newRow.appendChild(talkbossTD);
    newRow.appendChild(payTD);
}