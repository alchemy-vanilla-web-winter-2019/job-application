const existingApplicantJSON = window.localStorage.getItem('applicants');
const nameNode = document.getElementById('name');
const cityNode = document.getElementById('city');
const phoneNumberNode = document.getElementById('phone-number');
const escapeReason = document.getElementsByName('escape-reason');
let applicant = null;
// let applicant = applicants[applicants.length - 1];
let applicants = null; 

if(existingApplicantJSON) {
    applicants = JSON.parse(existingApplicantJSON); 
       
}

else {
    applicants = [];
}


const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

for(let index = 0; index < applicants.length; index++) {
    const currentApplicant = applicants[index]; 
    if(currentApplicant.name === name) {
        applicant = currentApplicant;
        break;
    }
}

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
