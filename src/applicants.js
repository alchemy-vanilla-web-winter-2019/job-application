const tbody = document.getElementById('applicants');
const jsonApplicants = window.localStorage.getItem('applicants');
let applicants = [];

if(jsonApplicants) {
    applicants = JSON.parse(jsonApplicants);
}
else {
    window.location = './index.html';
}

for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];

    const tr = document.createElement('tr');
    const name = document.createElement('td');
    const city = document.createElement('td');

    name.textContent = applicant.name;
    city.textContent = applicant.city;

    tr.appendChild(name);
    tr.appendChild(city);
    tbody.appendChild(tr);
}