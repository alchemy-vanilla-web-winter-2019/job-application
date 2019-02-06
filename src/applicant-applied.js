const name = document.getElementById('name');
const city = document.getElementById('city');
const state = document.getElementById('state');
const pranks = document.getElementById('prank');
const weapon = document.getElementById('weapon');
const slider = document.getElementById('slider');


const json = window.localStorage.getItem('applicant');
const hydratedName = JSON.parse(json);

name.textContent = hydratedName.name;
city.textContent = hydratedName.city;
state.textContent = hydratedName.state;
pranks.textContent = hydratedName.prank;
weapon.textContent = hydratedName.weapon.join(', ');
slider.textContent = hydratedName.slider;