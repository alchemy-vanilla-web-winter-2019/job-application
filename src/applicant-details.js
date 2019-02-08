const applicantJSON = window.localStorage.getItem('applicants');
const applicants = JSON.parse(applicantJSON); 

const nameNode = document.getElementById('name');
const cityNode = document.getElementById('city');
const phoneNumberNode = document.getElementById('phone-number');
const escapeReason = document.getElementsByName('escape-reason');

const applicant = applicants[applicants.length - 1];

nameNode.textContent = applicant.name;
cityNode.textContent = applicant.city;
phoneNumberNode.textContent = applicant.phone;
escapeReason.textContent = applicant.escapeArray;

// if(applicantJSON); {
    //     window.location = './index.html';
    // }
    
   
    


// if(applicant.realityCheck.length === 0) {
//     escapeReason.textContent = 'none';
// }



// else {
//     for(let index = 0; index < applicant.escapeArray.length - 1; index++) {escapeReason.textContent += applicant.realityCheck[index] + ', ';

//     }

//     escapeReason.textContent += applicant.realityCheck[applicant.realityCheck.length - 1];
    
    
// }
