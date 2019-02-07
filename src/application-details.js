const idEl = document.getElementById('id');
const nameEl = document.getElementById('name');
const questEl = document.getElementById('quest');
const colorEl = document.getElementById('color');
const talentsEl = document.getElementById('talents');
const loyaltyEl = document.getElementById('loyalty');



const jsonObject = window.localStorage.getItem('applicants');
const applicants = JSON.parse(jsonObject);

const searchParams = new URLSearchParams(window.location.search);
const idToFind = searchParams.get('id').toString();

let applicant = {};
for(let i = 0; i < applicants.length; i++) {
    if(idToFind === applicants[i].id) {
        applicant = applicants[i];
        break;
    }
}
idEl.textContent = applicant.id;
nameEl.textContent = applicant.name;
questEl.textContent = applicant.quest;
colorEl.textContent = applicant.color;
talentsEl.textContent = applicant.talents.join(', ');
loyaltyEl.textContent = applicant.loyalty;