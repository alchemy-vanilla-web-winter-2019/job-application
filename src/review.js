import getApplicantsInfo from './get-applicants-info.js';

let applicant = findApplicant(getApplicantsInfo());

document.getElementById('name').textContent = applicant.name;
document.getElementById('city-state').textContent = applicant.location.city + ', ' + applicant.location.state;
document.getElementById('steak').textContent = applicant.steak;
document.getElementById('curliness').textContent = applicant.curliness;
document.getElementById('salad').textContent = applicant.salad.join(', ');

function findApplicant(applicantsObjectArray) {
    const searchParam = new URLSearchParams(window.location.search);
    const findName = searchParam.get('name');
    let applicant = {};
    for(let i = 0; i < applicantsObjectArray.length; i++) {
        const currentApplicant = applicantsObjectArray[i];
        if(currentApplicant.name === findName) {
            applicant = currentApplicant;
            break;
        }  
    }
    return applicant;
}