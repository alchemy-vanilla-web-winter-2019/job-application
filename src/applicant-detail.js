const name = document.getElementById('name');
const claustrophobic = document.getElementById('claustrophobic-level');
const spaceGear = document.getElementById('spacegear');
const spaceship = document.getElementById('spaceship');

const jsonString = window.localStorage.getItem('applicants');


let lastApplicant = null;
let applicants = [];

if(jsonString) {
    applicants = JSON.parse(jsonString);
}
else {
    window.location = './';
}

const searchParams = new URLSearchParams(window.location.search);
const nameToFind = searchParams.get('name');

if(nameToFind) {
  //needed applicants to be = [] instead of just a var because we need length
    for(let index = 0; index < applicants.length; index++) {
        let currentApplicant = applicants[index];
        if(currentApplicant.name === nameToFind) {
            lastApplicant = currentApplicant;
            break; //otherwise once we find the name we want, we will keep looping  
        }
    }
}
else {
    lastApplicant = applicants[applicants.length - 1];
}


name.textContent = lastApplicant.name;
claustrophobic.textContent = lastApplicant.claustrophobic;
spaceGear.textContent = lastApplicant.spacegear.join(' ');
spaceship.textContent = lastApplicant.spaceship;