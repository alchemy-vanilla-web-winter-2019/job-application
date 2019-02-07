const form = document.getElementById('form');
const selectedObedience = document.getElementById('obedience-answer');
const obedience = document.getElementById('obd-span');

addEventListener('change', function() { 
    obedience.textContent = selectedObedience.value;
});

form.addEventListener('submit', function() {
    event.preventDefault();
    
    const firstName = form.elements.first.value;
    const lastName = form.elements.last.value;
    const phone = form.elements.phone.value;
    const email = form.elements.email.value;
    const street = form.elements.street.value;
    const city = form.elements.city.value;
    const country = form.elements.country.value;
    const kills = form.elements.kills.value;

    const skills = form.elements.skills;
    const skillPreferences = [];
 
    for(let i = 0; i < skills.length; i++){
        const choices = skills[i];
        if(choices.checked) {
            skillPreferences.push(choices.value);
        }
    }
    
    const applicant = {
        firstName:firstName,
        lastName:lastName,
        phone: phone,
        email: email,
        street: street,
        city: city,
        country: country,
        kills: kills,
        obedience: selectedObedience.value,
        skill: skillPreferences

    };
    
    let allApplicants = [];
    const jsonString = window.localStorage.getItem('allApplicants');
    if(jsonString) {
        allApplicants = JSON.parse(jsonString);
    }

    allApplicants.push(applicant);
    const serialize = JSON.stringify(applicant); 
    window.localStorage.setItem('allApplicants', serialize); 
    // window.location = 'thank-you.html';
});

