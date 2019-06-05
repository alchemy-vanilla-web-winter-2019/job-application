const applicationList = document.getElementById('applicant-list');

const jsonArrayString = window.localStorage.getItem('dope'); //pulls object 'dope'
const applications = JSON.parse(jsonArrayString); //creates variable out of object
console.log('Multi Applications Key', applications);

let applicants = [];
if(jsonArrayString) {
    applicants = JSON.parse(jsonArrayString);
}

for(let i = 0; i < applicants.length; i++) {
    const newRow = document.createElement('tr'); 
    const nameTD = document.createElement('td');
    const digitsTD = document.createElement('td'); 
    const emailTD = document.createElement('td'); 
    const talkbossTD = document.createElement('td'); 
    const payTD = document.createElement('td'); 
    //-----------------------\\
    const nameAnchor = document.createElement('a');//today
    nameAnchor.href = 'applicant-details.html?name=' + encodeURIComponent(applicants[i].name);//today
    //-----------------------\\
    
    nameAnchor.textContent = applicants[i].name;//today
    digitsTD.textContent = applicants[i].digits;
    emailTD.textContent = applicants[i].email;
    talkbossTD.textContent = applicants[i].talkboss.join(', ');
    payTD.textContent = applicants[i].pay;
    
    applicationList.appendChild(newRow);
    nameTD.appendChild(nameAnchor);//today
    newRow.appendChild(nameTD);
    newRow.appendChild(digitsTD);
    newRow.appendChild(emailTD);
    newRow.appendChild(talkbossTD);
    newRow.appendChild(payTD);
}