const applicantsTable = document.getElementById('applicants-table');
const numberOfColumns = document.getElementsByClassName('column');

const newApplicationsStringArray = window.localStorage.getItem('newApplications');
const newApplications = JSON.parse(newApplicationsStringArray);

for(let i = 0; i < newApplications.length; i++) {
    const applicant = newApplications[i];

    const newApplicantRow = document.createElement('tr');

    for(let j = 0; j < numberOfColumns.length; j++) {
        const newTD = document.createElement('td');
        const applicantAttribute = numberOfColumns[j]
        newTD.textContent = 
    }

    // const nameTD = document.createElement('td');
    // const clothingTD = document.createElement('td');
    // const skillsTD = document.createElement('td');

    // nameTD.textContent = applicant.name;
    // clothingTD.textContent = applicant.clothes;
    // skillsTD.textContent = applicant.skills.join(', ');

    // newApplicantRow.appendChild(nameTD);
    // newApplicantRow.appendChild(clothingTD);
    // newApplicantRow.appendChild(skillsTD);
    
    applicantsTable.appendChild(newApplicantRow);
}