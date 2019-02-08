const applicantJSON = window.localStorage.getItem('applicant');
if(!applicantJSON) {
    document.location = '../index.html';
}

const applicants = JSON.parse(applicantJSON);

const applicantsNode = document.getElementById('applicants');

for(let index = 0; index < applicants.length; index++) {
    console.log('hey');
    const applicant = applicants[index];

    const row = document.createElement('tr');
    const name = document.createElement('td');
    const city = document.createElement('td');
    const skill = document.createElement('td');
    const philosophy = document.createElement('td');
    const morality = document.createElement('td');
    const salary = document.createElement('td');

    name.textContent = applicant.name;
    city.textContent = applicant.city;
    skill.textContent = applicant.skill;
    philosophy.textContent = applicant.philosophy;
    morality.textContent = applicant.morality;
    salary.textContent = applicant.salary;
    
    row.appendChild(name);
    row.appendChild(city);
    row.appendChild(skill);
    row.appendChild(philosophy);
    row.appendChild(morality);
    row.appendChild(salary);

    applicantsNode.appendChild(row);

}

