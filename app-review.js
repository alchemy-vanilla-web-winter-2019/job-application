const jsonString = window.localStorage.getItem('allApplicants');

let allApplicants = [];

let hydratedSubmit = [];
if(jsonString){
    allApplicants = JSON.parse(jsonString);
}

const searchParams = new URLSearchParams(window.location.search);
const nameToFind = searchParams.get('timesubmitted');

for(let i = 0; i < allApplicants.length; i++) {
    const currentApplicant = allApplicants[i];

    // eslint-disable-next-line eqeqeq
    if(currentApplicant.timesubmitted == nameToFind){
        hydratedSubmit = currentApplicant;
        break;
    }
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