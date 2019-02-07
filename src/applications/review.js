const json = window.localStorage.getItem('allApplicants');
let hydratedApplication = [];
if(json){
    const allApplicants = JSON.parse(json);
    hydratedApplication = allApplicants[allApplicants.length - 1];
}
let allApplicants = [];

const searchParam = new URLSearchParams(window.localStorage.search);
const firstNameToFind = searchParam.get('first name');

for(let index = 0; index < allApplicants.length; index++) {
    const currentApplicant = allApplicants[index];

    if(currentApplicant.firstName === firstNameToFind) {
        hydratedApplication = currentApplicant;
        break;
    }
}


const first = document.getElementById('first');
const last = document.getElementById('last');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const street = document.getElementById('street');
const city = document.getElementById('city');
const country = document.getElementById('country');
const kills = document.getElementById('kills');
const obedience = document.getElementById('obedience');
const skill = document.getElementById('skill');

first.textContent = hydratedApplication.firstName;
last.textContent = hydratedApplication.lastName;
phone.textContent = hydratedApplication.phone;
email.textContent = hydratedApplication.email; 
street.textContent = hydratedApplication.street;
city.textContent = hydratedApplication.city;
country.textContent = hydratedApplication.country;
kills.textContent = hydratedApplication.kills;
obedience.textContent = hydratedApplication.obedience;
skill.textContent = hydratedApplication.skill.join(', ');

