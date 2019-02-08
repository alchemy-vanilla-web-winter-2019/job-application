const json = window.localStorage.getItem('applicants');

let applicants = null;

if(json) {
    applicants = JSON.parse(json);
} else {
    applicants = [];
}

const tbody = document.getElementById('applicants');

for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];

    const row = document.createElement('tr');
    const link = document.createElement('a');
    link.href = 'applicant-detail.html?name=' + applicant.name;
    link.textContent = applicant.name;
 
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');
    const strengthCell = document.createElement('td');
    const howLongCell = document.createElement('td');

    // nameCell.textContent = applicant.name;
    locationCell.textContent = applicant.location;
    strengthCell.textContent = applicant.strength;
    howLongCell.textContent = applicant.timeAvailable;
    nameCell.appendChild(link);
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    row.appendChild(strengthCell);
    row.appendChild(howLongCell);

    tbody.appendChild(row);

}