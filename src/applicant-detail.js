const name = document.getElementById('name');
const position = document.getElementById('position');
const foods = document.getElementById('foods');

const json = window.localStorage.getItem('applicant');
cost foodApplicant = JSON.parse(json);

name.textContent = foodApplicant.name;
position.textContent = foodApplicant.position;
foods.textContent = foodApplicant.foodChoices.join(' ');


