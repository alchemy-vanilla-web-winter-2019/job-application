const applicantList = document.getElementById('applicant-list');
const jsonArray = window.localStorage.getItem('applicants');
let applicants = [];
if(jsonArray) {
    applicants = JSON.parse(jsonArray);
}
console.log(applicants);
for(let i = 0; i < applicants.length; i++) {
    const newRow = document.createElement('tr');
    applicantList.appendChild(newRow);

    const nameCell = document.createElement('td');
    const questCell = document.createElement('td');
    const colorCell = document.createElement('td');
    const talentsCell = document.createElement('td');
    const loyaltyCell = document.createElement('td');

    nameCell.textContent = applicants[i].name;
    questCell.textContent = applicants[i].quest;
    colorCell.textContent = applicants[i].color;
    talentsCell.textContent = applicants[i].talents.join(', ');
    loyaltyCell.textContent = applicants[i].loyalty;

    newRow.appendChild(nameCell);
    newRow.appendChild(questCell);
    newRow.appendChild(colorCell);
    newRow.appendChild(talentsCell);
    newRow.appendChild(loyaltyCell);


}