const faireApplication = document.getElementById('faire-application');
const loyaltySlider = document.getElementById('loyalty-slider');
const loyaltyDisplay = document.getElementById('loyalty-display');

loyaltyDisplay.textContent = loyaltySlider.value;

loyaltySlider.addEventListener('input', function() {
    loyaltyDisplay.textContent = loyaltySlider.value;
});

faireApplication.addEventListener('submit', function(event) {
    event.preventDefault();

    const talentNames = [];
    for(let i = 0; i < faireApplication.talent.length; i++) {
        const name = faireApplication.talent[i];
        if(name.checked) {
            talentNames.push(name.value);
        }
    }
    
    let applicants = [];

    const jsonArray = window.localStorage.getItem('applicants');
    if(jsonArray) {
        applicants = JSON.parse(jsonArray);
    }

    const applicant = {
        id : Date.now().toString(),
        name: faireApplication.name.value,
        quest: faireApplication.quest.value,
        color: faireApplication.color.value,
        talents: talentNames,
        loyalty: faireApplication.loyalty.value
    };

    applicants.push(applicant);

    const serialized = JSON.stringify(applicants);
    window.localStorage.setItem('applicants', serialized);
    window.location = 'thanks.html';

});