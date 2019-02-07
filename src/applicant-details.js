const applicantJSON = window.localStorage.getItem('applicants');
const applicant = JSON.parse(applicantJSON);


const nameNode = document.getElementById('name');
const cityNode = document.getElementById('city');
const phoneNumberNode = document.getElementById('phone-number');
const escapeReason = document.getElementsByName('escape-reason');


nameNode.textContent = applicant.name;
cityNode.textContent = applicant.city;
phoneNumberNode.textContent = applicant.phone;
escapeReason.textContent = applicant.escapeArray;

// if(applicant.realityCheck.length === 0) {
//     escapeReason.textContent = 'none';
// }



// else {
//     for(let index = 0; index < applicant.escapeArray.length - 1; index++) {escapeReason.textContent += applicant.realityCheck[index] + ', ';

//     }

//     escapeReason.textContent += applicant.realityCheck[applicant.realityCheck.length - 1];
    
    
// }

// console.log(escapeReason);