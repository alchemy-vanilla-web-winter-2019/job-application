import getApplicantsInfo from './get-applicants-info.js';

const form = document.getElementById('form');
const slider = form.curliness;

slider.addEventListener('change', function(event) {
    event.preventDefault();
    changeCurlinessDisplay(slider);
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    storeObjectArray(makeObject(form));
});

// Changes the display for the slider
function changeCurlinessDisplay(slider) {
    const sliderDisplay = document.getElementById('slider-display');
    sliderDisplay.textContent = slider.value;
}

// Creates the applicant object
function makeObject(form) {
    const saladAll = form.salad;
    const saladPreference = [];
    for(let i = 0; i < saladAll.length; i++) {
        if(saladAll[i].checked) {
            saladPreference.push(saladAll[i].value);
        }
    }
    const applicant = {
        name: form.name.value,
        location: {
            city: form.city.value,
            state: form.state.value
        },
        steak: form.steak.value,
        salad: saladPreference,
        curliness: form.curliness.value
    };
    return applicant;
}

// Stores new applicant object into applicants array
function storeObjectArray(applicantObject) {
    const applicantsObjectArray = getApplicantsInfo();
    applicantsObjectArray.push(applicantObject);
    window.localStorage.applicants = JSON.stringify(applicantsObjectArray);
    
    window.location = 'thanks.html';
}
