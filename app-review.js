const name = document.getElementById('name');
const age = document.getElementById('age');
const position = document.getElementById('position');
const availability = document.getElementById('availability');
const curl = document.getElementById('curl');
const pizza = document.getElementById('pizza');

const json = window.localStorage.getItem('appSubmission');
const hydratedSubmit = JSON.parse(json);


name.textContent = hydratedSubmit.name;
age.textContent = hydratedSubmit.age;
position.textContent = hydratedSubmit.position;
availability.textContent = hydratedSubmit.availability;
curl.textContent = hydratedSubmit.curl;
pizza.textContent = hydratedSubmit.pizza.join(', ');