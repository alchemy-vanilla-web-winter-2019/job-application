const json = window.localStorage.getItem('applicants');
// double check that this isn't applicant
let applicant = null;

if(json) {
    const allApplicants = JSON.parse(json);
    applicant = allApplicants[allApplicants.length - 1];
} else {
    window.location = '/';
}


const name = document.getElementById('name');
const city = document.getElementById('city');
const state = document.getElementById('state');
const pranks = document.getElementById('prank');
const weapon = document.getElementById('weapon');
const slider = document.getElementById('slider');


// const hydratedName = JSON.parse(json);

name.textContent = applicant.name;
city.textContent = applicant.city;
state.textContent = applicant.state;
pranks.textContent = applicant.prank;
weapon.textContent = applicant.weapon.join(', ');
slider.textContent = applicant.slider;