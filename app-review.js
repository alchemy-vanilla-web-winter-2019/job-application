const jsonString = window.localStorage.getItem('allApplicants');

let hydratedSubmit = [];
if(jsonString){
    const allApplicants = JSON.parse(jsonString);
    hydratedSubmit = allApplicants[allApplicants.length - 1];
}

const name = document.getElementById('name');
const age = document.getElementById('age');
const position = document.getElementById('position');
const availability = document.getElementById('availability');
const curl = document.getElementById('curl');
const pizza = document.getElementById('pizza');



name.textContent = hydratedSubmit.name;
age.textContent = hydratedSubmit.age;
position.textContent = hydratedSubmit.position;
availability.textContent = hydratedSubmit.availability;
curl.textContent = hydratedSubmit.curl;
pizza.textContent = hydratedSubmit.pizza.join(', ');