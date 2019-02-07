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

function changeCurlinessDisplay(slider) {
    const sliderDisplay = document.getElementById('slider-display');
    sliderDisplay.textContent = slider.value;
}

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

function storeObjectArray(applicantObject) {
    let applicantsObjectArray = [];
    const getApplicantsJSON = window.localStorage.applicants;
    if(getApplicantsJSON) {
        applicantsObjectArray = JSON.parse(getApplicantsJSON);
    }
    applicantsObjectArray.push(applicantObject);
    window.localStorage.applicants = JSON.stringify(applicantsObjectArray);
    
    window.location = 'thanks.html';
}
