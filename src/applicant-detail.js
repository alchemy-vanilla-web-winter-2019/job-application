const name = document.getElementById('name');
const claustrophobic = document.getElementById('claustrophobic-level');
const spaceGear = document.getElementById('spacegear');
const spaceship = document.getElementById('spaceship');

const json = window.localStorage.getItem('user data');
const hydration = JSON.parse(json);

name.textContent = hydration.name;
claustrophobic.textContent = hydration.claustrophobic;
spaceGear.textContent = hydration.spacegear.join(' ');
spaceship.textContent = hydration.spaceship;