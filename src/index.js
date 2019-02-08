const spaceForm = document.getElementById('application');
const userName = document.getElementById('name');
const spaceship = document.getElementById('spaceship');
const claustrophobic = document.getElementById('claustrophobic');
const claustrophobicDisplay = document.getElementById('slider-display');


claustrophobic.addEventListener('change', function() {
    claustrophobicDisplay.textContent = claustrophobic.value;

});

const chosenGear = [];

spaceForm.addEventListener('submit', function(event) {
    event.preventDefault();
    for(let index = 0; index < spaceForm.spacegear.length; index++) {
        const gear = spaceForm.spacegear[index];
        if(gear.checked) {
            chosenGear.push(gear.value);
        }
    }
    const applicant = {
        name: userName.value,
        spaceship: spaceship.value, 
        claustrophobic: claustrophobic.value,
        spacegear: chosenGear
    };

    let applicants = [];
    let jsonString = window.localStorage.getItem('applicants');
    if(jsonString) {
        applicants = JSON.parse(jsonString);
    }

    applicants.push(applicant);


    const serialize = JSON.stringify(applicants);
    window.localStorage.setItem('applicants', serialize);
    window.location = 'thanks.html';
});



