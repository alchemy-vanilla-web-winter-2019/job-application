const jsonString = window.localStorage.getItem('applicants');

let applicants = [];
if(jsonString) {
    applicants = JSON.parse(jsonString);
}

const tbody = document.getElementById('applicant-details');

for(let index = 0; index < applicants.length; index++) {
    const applicant = applicants[index];

    const tr = document.createElement('tr');
    tbody.appendChild(tr);
    

    const tdName = document.createElement('td');
    const link = document.createElement('a');
    tr.appendChild(tdName);
    tdName.appendChild(link);
    link.textContent = applicant.name;
    link.href = 'application-details.html?name=' + encodeURIComponent(applicant.name);


    const tdPosition = document.createElement('td');
    tr.appendChild(tdPosition);
    tdPosition.textContent = applicant.position;

    const tdExperience = document.createElement('td');
    tr.appendChild(tdExperience);
    tdExperience.textContent = applicant.skillLevel;

    const tdAllergy = document.createElement('td');
    tr.appendChild(tdAllergy);
    tdAllergy.textContent = applicant.allergy.join(' ');

    const tdBrands = document.createElement('td');
    tr.appendChild(tdBrands);
    tdBrands.textContent = applicant.yarn.join(' ');

}