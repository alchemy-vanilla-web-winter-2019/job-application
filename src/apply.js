const faireApplication = document.getElementById('faire-application');

faireApplication.addEventListener('submit', function(event) {
    event.preventDefault();

    const talentNames = [];
    for(let i = 0; i < faireApplication.talent.length; i++) {
        const name = faireApplication.talent[i];
        if(name.checked) {
            talentNames.push(name.value);
        }
    }

    const application = {
        name: faireApplication.name.value,
        quest: faireApplication.quest.value,
        color: faireApplication.color.value,
        talents: talentNames
    };

    const serialized = JSON.stringify(application);
    window.localStorage.setItem('application', serialized);
    window.location = 'thanks.html';

});