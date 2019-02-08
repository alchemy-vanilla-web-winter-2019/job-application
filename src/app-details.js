const name = document.getElementById('name');
const position = document.getElementById('position');
const popcorn = document.getElementById('popcorn');
const romcom = document.getElementById('romcom');
const films = document.getElementById('films');

const json = window.localStorage.getItem('applicants');

let applicant = null;
let applicants = [];

if(json) {
    applicants = JSON.parse(json);
    applicant = applicants[applicants.length - 1];
}
else {
    window.location = '/';
}

const searchParam = new URLSearchParams(window.location.search);
const nameToFind = searchParam.get('name');

if(nameToFind) {
    for(let index = 0; index < applicants.length; index++) {
        let currentApplicant = applicants[index];

        if(currentApplicant.name === nameToFind) {
            applicant = currentApplicant;
            break;
        }
    }
}
else {
    applicant = applicants[applicants.length - 1];
}



name.textContent = applicant.name;
position.textContent = applicant.position; 
popcorn.textContent = applicant.popcorn;
romcom.textContent = applicant.romCom.join(' ');
films.textContent = applicant.films.join(' ');
