let allApplicants = [];

const jsonString = window.localStorage.getItem('lectric-eye');
// console.log(jsonString)
const allApplicantsNode = document.getElementById('applicants');
// console.log( allApplicantsNode);

if(jsonString) {
    allApplicants = JSON.parse(jsonString);
    console.log(allApplicants);
}

else {
    window.location = './index.html';
}

for(let index = 0; index < allApplicants.length; index++) {
    const applicant = allApplicants[index];
    
    // const tr = document.createElement('tr');
    
    // const nameCell = document.createElement('td');
    // nameCell.textContent = applicant.name;
    // tr.appendChild(nameCell);
}
