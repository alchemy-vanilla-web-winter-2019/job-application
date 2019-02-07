const form = document.getElementById('form');

const slider = document.getElementById('badness');
const badScale = document.getElementById('badScale');

slider.addEventListener('change', function(){
    badScale.textContent = slider.value;
});

form.addEventListener('submit', function(event){
    event.preventDefault();

    const name = form.elements.name.value;
    const city = form.elements.city.value;
    const state = form.elements.state.value;
    const prank = form.elements.prank.value;

    const weaponAll = form.elements.weapon;
    let weaponSelect = [];

    for(let i = 0; i < weaponAll.length; i++) {
        const weaponPref = weaponAll[i];
        if(weaponPref.checked) {
            // weaponSelect[i] = weaponPref.value;
            weaponSelect.push(weaponPref.value);
        }
    }

    const applicant = {
        name: name,
        city: city,
        state: state,
        prank: prank,
        weapon: weaponSelect,
        slider: slider.value
    };
    // console.log(applicant);

    let applicants = [];
    const jsonString = window.localStorage.getItem('applicants');

    if(jsonString) {
        applicants = JSON.parse(jsonString);
    }

    applicants.push(applicant);
    const serialize = JSON.stringify(applicants);
    window.localStorage.setItem('applicants', serialize);
    window.location = 'hello.html';
    
});
