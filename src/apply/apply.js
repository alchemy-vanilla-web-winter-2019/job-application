const guildApplication = document.getElementById('guild-application');


guildApplication.addEventListener('submit', function(event) {
    event.preventDefault();
    const identifier = Date.now();
    const inputRoles = [];

    for(let i = 0; i < guildApplication.roles.length; i++) {
        const role = guildApplication.roles[i];
        if(role.checked) {
            inputRoles.push(role.value);
        }
    }
    const application = {
        name: guildApplication.name.value,
        experience: guildApplication.experience.value,
        weapon: guildApplication.weapon.value,
        firsttheft: guildApplication.firsttheft.value,
        roles: inputRoles,
        lawfulness: guildApplication.lawfulness.value,
        goodness: guildApplication.goodness.value,
        identifier: identifier
        
    };
    const jsonArrayString = window.localStorage.getItem('applications');
    let applications = [];
    if(jsonArrayString) {
        applications = JSON.parse(jsonArrayString);
    }
    applications.push(application);
    const serialized = JSON.stringify(applications);
    window.localStorage.setItem('applications', serialized);

    window.location = 'thanks.html';
});



