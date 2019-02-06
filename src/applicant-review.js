const json = window.localStorage.getItem('allApplicants');

let allApplicants = [];
if(json) {
    allApplicants = JSON.parse(json);
}

// let allApplicants = null;
// if(json) {
//     allApplicants = JSON.parse(json);
// } else {
//     allApplicants = [];
// }

const tbody = document.getElementById('tbody');

// make elements written in the html
for(let i = 0; i < allApplicants.length; i++) {
    const applicant = allApplicants[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = applicant.name;
    tr.appendChild(nameCell);

    tbody.appendChild(tr);
}