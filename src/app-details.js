const name = document.getElementById('name');
const position = document.getElementById('position');
const popcorn = document.getElementById('popcorn');
const romcom = document.getElementById('romcom');
const films = document.getElementById('films');

const json = window.localStorage.getItem('applicant');
const filmApplicant = JSON.parse(json);

name.textContent = filmApplicant.name;
position.textContent = filmApplicant.position;
popcorn.textContent = filmApplicant.popcorn;
romcom.textContent = filmApplicant.romCom.join(' ');
films.textContent = filmApplicant.films.join(' ');