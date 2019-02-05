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
});
