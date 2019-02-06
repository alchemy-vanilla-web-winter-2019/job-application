const formNode = document.getElementById('main-form');
const nameNode = document.getElementById('name');
const phoneNode = document.getElementById('phone');
const comfortNode = document.getElementById('comfort');
const comfortFieldNode = document.getElementById('comfort-field');
const burialNode = document.getElementById('burial');
comfortNode.addEventListener('change', function(){
    let messageSelector;
    let select = comfortNode.value;
    switch(select) {
        case '1': 
            messageSelector = 'I have a strong aversion to being incinerated.';
            break;
        case '2': 
            messageSelector = 'I am mildly averse to being burnt to a crisp.';
            break;
        case '3': 
            messageSelector = 'I am neither pleased nor displeased by my calories being released as thermal energy.';
            break;
        case '4': 
            messageSelector = 'I find the notion of becoming a ruined pile of ash acceptable.';
            break;
        case '5': 
            messageSelector = 'SACRIFICE ME TO THE LORD OF LIGHT, FOR THE NIGHT IS DARK AND FULL OF TERRORS!!!';
            break;
    }
    comfortFieldNode.textContent = messageSelector;
});

formNode.addEventListener('submit', function(event) {
    event.preventDefault();
    const applicant = {
        name: nameNode.value,
        phone: phoneNode.value,
        comfort: comfortNode.value,
        burial: burialNode.value
    };
    const serializeApplication = JSON.stringify(applicant);
    window.localStorage.setItem('job-applicant', serializeApplication);
    window.location = 'applicant-details.html';
});