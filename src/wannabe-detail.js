const heroName = document.getElementById('hero-name');
const heroAlias = document.getElementById('hero-alias');
const heroProfession = document.getElementById('hero-profession');
const heroCombat = document.getElementById('hero-combat');
const heroReason = document.getElementById('hero-reason');

// const hydratedWannabe = JSON.parse(jsonObject); //would remove this item

// console.log('hydratedWannabe', hydratedWannabe);

let applicants = [];
const jsonWannabe = window.localStorage.getItem('applications');

if(jsonWannabe) {
    applicants = JSON.parse(jsonWannabe);  //entire array is here
} else {
    window.location = '/';
}

// console.log('applicants', applicants);
const searchParam = new URLSearchParams(window.location.search);
const nameToFind = searchParam.get('name');
// console.log('nameToFind', nameToFind);

let applicant = null; 

for(let i = 0; i < applicants.length; i++) {
    if(nameToFind === applicants[i].name) {
        applicant = applicants[i];
        break;
    }
}
console.log('applicant', applicant);

heroName.textContent = applicant.name;
heroAlias.textContent = applicant.alias;
heroProfession.textContent = applicant.profession;
heroCombat.textContent = applicant.combat;
heroReason.textContent = applicant.joinReason;


