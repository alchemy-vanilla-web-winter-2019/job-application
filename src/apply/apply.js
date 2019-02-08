const applicationFormNode = document.getElementById('application-form');
const snuckText = document.getElementById('snuck-text');
const sunckCountNode = document.getElementById('snuck-count');

function updateCounter(event) {
    const target = event.target;
    const count = target.value.length;
    const countMsg = count + ' characters';
    sunckCountNode.innerHTML = countMsg;
}

snuckText.addEventListener('focus', updateCounter);
snuckText.addEventListener('input', updateCounter);

applicationFormNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const skillsArray = [];
    for(let i = 0; i < applicationFormNode.skills.length; i++) {
        if(applicationFormNode.skills[i].checked) {
            skillsArray.push(applicationFormNode.skills[i].value);
        }
    }
    if(!skillsArray[0]) {
        skillsArray[0] = 'none';
    }

    let identificationNumber = 0;

    const newApplication = {
        identification: identificationNumber,
        name: applicationFormNode.name.value,        
        assassination: applicationFormNode.assassination.value,
        clothes: applicationFormNode.clothes.value,
        skills: skillsArray,
        snuck: applicationFormNode.snuck.value
    };

    let newApplications = [];
    const newApplicationsString = window.localStorage.getItem('newApplications');
    if(newApplicationsString) {
        newApplications = JSON.parse(newApplicationsString);
    }
    
    let deletedApplications = [];
    const deletedApplicationsString = window.localStorage.getItem('deletedApplications');
    if(deletedApplicationsString) {
        deletedApplications = JSON.parse(newApplicationsString);
    }

    for(let i = 0; i < newApplications.length; i++) {
        const newApplicationsID = newApplications[i].identification;
        if(deletedApplications[0]) {            
            const deletedApplicationID = deletedApplications[i].identification;
            do{
                newApplication.identification = Math.floor((Math.random() * 100000));
            } while(deletedApplicationID === newApplication.identification);
        }
        do{
            newApplication.identification = Math.floor((Math.random() * 100000));
        } while(newApplicationsID === newApplication.identification);
    }    
    newApplications.push(newApplication);

    const serializedArray = JSON.stringify(newApplications);
    window.localStorage.setItem('newApplications', serializedArray);
    
    window.location = './thank-you.html';
});