const tbody = document.getElementById('applicants');
const jsonApplicants = window.localStorage.getItem('applicants');
let applicants = [];

if(jsonApplicants) {
    applicants = JSON.parse(jsonApplicants);
}
else {
    window.location = './index.html';
}

console.log(applicants);

for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];

    const tr = document.createElement('tr');
    const name = document.createElement('td');
    const city = document.createElement('td');
    const cuddleTypes = document.createElement('td');

    name.textContent = applicant.name;
    city.textContent = applicant.city;

    if(applicant.cuddles.length === 0) {
        cuddleTypes.textContent = 'none';
    }
    else {
        for(let i = 0; i < applicant.cuddles.length - 1; i++) {
            cuddleTypes.textContent += applicant.cuddles[i] + ', ';
        }
        cuddleTypes.textContent += applicant.cuddles[applicant.cuddles.length - 1];
    }

    tr.appendChild(name);
    tr.appendChild(city);
    tr.appendChild(cuddleTypes);
    tbody.appendChild(tr);
}