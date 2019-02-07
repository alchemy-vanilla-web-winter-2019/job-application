const jsonString = window.localStorage.getItem('applicants');
const applicants = JSON.parse(jsonString);

const tbody = document.getElementById('all-applicants-info');

for(let index = 0; index < applicants.length; index++) {
    const applicant = applicants[index];

    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const tdName = document.createElement('td');
    tr.appendChild(tdName);
    tdName.textContent = applicant.name;

    const tdSpaceship = document.createElement('td');
    tr.appendChild(tdSpaceship);
    tdSpaceship.textContent = applicant.spaceship;

    const tdClaustro = document.createElement('td');
    tr.appendChild(tdClaustro);
    tdClaustro.textContent = applicant.claustrophobic;

    const tdSpacegear = document.createElement('td');
    tr.appendChild(tdSpacegear);
    tdSpacegear.textContent = applicant.spacegear.join(' ');

}