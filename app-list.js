const json = window.localStorage.getItem('allApplicants');

let allApplicants = [];

if(json) {
    allApplicants = JSON.parse(json);
}



const tbody = document.getElementById('tbody');
for(let i = 0; i < allApplicants.length; i++) {

    const applicants = allApplicants[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    const a = document.createElement('a');
    a.href = 'app-review.html?timesubmitted=' + encodeURIComponent(applicants.timesubmitted);
    a.textContent = applicants.name;
    nameCell.appendChild(a);
    tr.appendChild(nameCell);
    
    const ageCell = document.createElement('td');
    ageCell.textContent = applicants.age;
    tr.appendChild(ageCell);
    
    const positionCell = document.createElement('td');
    positionCell.textContent = applicants.position;
    tr.appendChild(positionCell);
    
    const availabilityCell = document.createElement('td');
    availabilityCell.textContent = applicants.availability;
    tr.appendChild(availabilityCell);
    
    const pizzaCell = document.createElement('td');
    pizzaCell.textContent = applicants.pizza;
    tr.appendChild(pizzaCell);
    
    const curlCell = document.createElement('td');
    curlCell.textContent = applicants.curl;
    tr.appendChild(curlCell);

    tbody.appendChild(tr);
}