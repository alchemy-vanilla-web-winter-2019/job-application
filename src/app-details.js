const name = document.getElementById('name');
const position = document.getElementById('position');
const popcorn = document.getElementById('popcorn');
const romcom = document.getElementById('romcom');
const films = document.getElementById('films');

const json = window.localStorage.getItem('applicant');

let applicant = [];
if(json) {
    const applicants = JSON.parse(json);
    applicant = applicants[applicants.length - 1];
}
else {
    window.location = '/';
}

name.textContent = applicant.name;
position.textContent = applicant.position;
popcorn.textContent = applicant.popcorn;
romcom.textContent = applicant.romCom.join(' ');
films.textContent = applicant.films.join(' ');