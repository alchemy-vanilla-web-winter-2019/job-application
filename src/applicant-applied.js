const json = window.localStorage.getItem('applicants');
// double check that this isn't applicant
let applicant = null;
let allApplicants = [];

if(json) {
    allApplicants = JSON.parse(json);
} else {
    window.location = '/';
}

const searchParams = new URLSearchParams(window.location.search);
const nameToFind = searchParams.get('timeStamp');

for(let i = 0; i < allApplicants.length; i++) {
    const nameSelect = allApplicants[i];

    if(nameSelect.timeStamp == nameToFind) {
        applicant = nameSelect;
        break;
    }
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