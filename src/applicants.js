const jsonString = window.localStorage.getItem('applicant');

let applicants = [];

if(jsonString) {
    applicants = JSON.parse(jsonString);
}

const tbody = document.getElementById('movie-applicants');

for(let index = 0; index < applicants.length; index++) {
    const movieApplicant = applicants[index];

    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const tdName = document.createElement('td');
    tdName.textContent = movieApplicant.name;
    tr.appendChild(tdName);

    const tdPosition = document.createElement('td');
    tdPosition.textContent = movieApplicant.position;
    tr.appendChild(tdPosition);

    const tdPopcorn = document.createElement('td');
    tdPopcorn.textContent = movieApplicant.popcorn;
    tr.appendChild(tdPopcorn);

    const tdRomCom = document.createElement('td');
    tdRomCom.textContent = movieApplicant.romcom;
    tr.appendChild(tdRomCom);

    const tdFilms = document.createElement('td');
    tdFilms.textContent = movieApplicant.films;
    tr.appendChild(tdFilms);

}