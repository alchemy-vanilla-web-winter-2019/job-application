const json = window.localStorage.getItem('allApplicants');
let allApplicants = [];
let hydratedApplication = null;
if(json) {
    allApplicants = JSON.parse(json);
} else {
    window.location = '/';
}
console.log(allApplicants);

const searchParam = new URLSearchParams(window.location.search);
const firstNameToFind = searchParam.get('name');
console.log(firstNameToFind);

for(let index = 0; index < allApplicants.length; index++) {
    const currentApplicant = allApplicants[index];

    if(currentApplicant.firstName === firstNameToFind) {
        hydratedApplication = currentApplicant;
        break;
    }
}
console.log(hydratedApplication);

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const street = document.getElementById('street');
const city = document.getElementById('city');
const country = document.getElementById('country');
const kills = document.getElementById('kills');
const obedience = document.getElementById('obedience');
const skill = document.getElementById('skill');

firstName.textContent = hydratedApplication.firstName;
lastName.textContent = hydratedApplication.lastName;
phone.textContent = hydratedApplication.phone;
email.textContent = hydratedApplication.email; 
street.textContent = hydratedApplication.street;
city.textContent = hydratedApplication.city;
country.textContent = hydratedApplication.country;
kills.textContent = hydratedApplication.kills;
obedience.textContent = hydratedApplication.obedience;
skill.textContent = hydratedApplication.skill;

