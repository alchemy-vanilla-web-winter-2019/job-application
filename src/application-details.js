const nameEl = document.getElementById('name');
const questEl = document.getElementById('quest');
const colorEl = document.getElementById('color');
const talentsEl = document.getElementById('talents');
const loyaltyEl = document.getElementById('loyalty');



const jsonObject = window.localStorage.getItem('applicants');
const applicants = JSON.parse(jsonObject);
console.log(applicants);

const searchParam = new URLSearchParams(window.location.search);
const nameToFind = searchParam.get('name');

let applicant = {};
for(let i = 0; i < applicants.length; i++) {
    if (nameToFind === applicants[i].name) {
        applicant = applicants[i];
        break;
    }
}

nameEl.textContent = applicant.name;
questEl.textContent = applicant.quest;
colorEl.textContent = applicant.color;
talentsEl.textContent = applicant.talents.join(', ');
loyaltyEl.textContent = applicant.loyalty;