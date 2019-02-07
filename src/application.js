const application = document.getElementById('application');
const heroName = document.getElementById('hero-name');
const alias = document.getElementById('alias');
const combatNodeList = document.getElementsByName('combat');
const joinReason = document.getElementById('join-reason');

application.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const combatStyles = [];
    
    const applicant = {
        name: heroName.value,
        alias: alias.value,
        profession: application.profession.value,
        combat: combatStyles,
        joinReason: joinReason.value
    };
    
    for(let i = 0; i < combatNodeList.length; i++) {
        const style = combatNodeList[i];
        if(style.checked) {
            combatStyles.push(style.value);
        }
    }

    let applications = [];
    const jsonApplications = window.localStorage.getItem('applications');

    if(jsonApplications) {
        applications = JSON.parse(jsonApplications);
    }
    applications.push(applicant);

    const serialized = JSON.stringify(applications);
    window.localStorage.setItem('applications', serialized);

    window.location = 'thanks.html';
});


