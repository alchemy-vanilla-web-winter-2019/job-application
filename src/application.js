const sliderDisplay = document.getElementById('slider-display');
const slider = document.getElementsByName('curliness')[0];
slider.addEventListener('change', function(event) {
    event.preventDefault();
    sliderDisplay.textContent = slider.value;
});

const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = form.name.value;
    const city = form.city.value;
    const state = form.state.value;
    const steak = form.steak.value;
    const saladAll = form.salad;
    const saladChosen = [];
    for(let i = 0; i < saladAll.length; i++) {
        if(saladAll[i].checked) {
            saladChosen.push(saladAll[i].value);
        }
    }
    const curliness = form.curliness.value;
    
    // Creates object called applicant
    const applicant = {
        name: name,
        address: {
            city: city,
            state: state
        },
        steak: steak,
        salad: saladChosen,
        curliness: curliness
    };
    console.log(applicant);

    // Converts applicant object into JSON string
    const serialize = JSON.stringify(applicant);
    
    // localStorange can't store objects or arrays properly
    // window.localStorage.Name = name;
    // window.localStorage.address = JSON.stringify(applicant.address);
    // window.localStorage.steak = steak;
    // window.localStorage.salad = JSON.stringify(applicant.salad);
    // window.localStorage.curliness = curliness;
    
    // Stores the value of serialize under the key of applicant in localStorage
    window.localStorage.setItem('applicant', serialize);

    // This does the same thing
    // window.localStorage.applicant = serialize;

    // Changes page 
    window.location = 'thanks.html';
});
