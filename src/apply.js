const formNode = document.getElementById('main-form');
const nameNode = document.getElementById('name');
const phoneNode = document.getElementById('phone');
const yesNode = document.getElementById('yes');
const noNode = document.getElementById('no');
let isPyromaniac = null;
const checkboxNode = document.getElementById('checkboxes');
const comfortNode = document.getElementById('comfort');
const comfortFieldNode = document.getElementById('comfort-field');
const burialNode = document.getElementById('burial');
const checkboxes = document.getElementsByClassName('checkbox');

yesNode.addEventListener('change', function() {
    let hiddenNodeList = checkboxNode.querySelectorAll('.hidden.checklabel');
    for(let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].disabled = false;
    }
    for(let j = 0; j < hiddenNodeList.length; j++) {
        hiddenNodeList[j].classList.remove('hidden');
    }
});

noNode.addEventListener('change', function() {
    let hiddenNodeList = checkboxNode.querySelectorAll('.checklabel');
    for(let index = 0; index < checkboxes.length; index++) {
        checkboxes[index].disabled = true;
    }
    for(let j = 0; j < hiddenNodeList.length; j++) {
        hiddenNodeList[j].classList.add('hidden');
    }
});

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
let applicationsSubmitted = [];
let burnPrefArray =[];
formNode.addEventListener('submit', function(event) {
    event.preventDefault();
    if(yesNode.checked === true){
        isPyromaniac = 'Yes';
        for(let i = 0; i < checkboxes.length; i++) {
            let preferenceItem = checkboxes[i];
            if(preferenceItem.checked === true) { 
                let formatItem = ' ' + preferenceItem.value;
                burnPrefArray.push(formatItem);
            }
        }
        if(burnPrefArray.length === 0) {
            burnPrefArray.push('none');
        }
    }
    if(noNode.checked === true) {
        isPyromaniac = 'No';
        burnPrefArray.push('Does Not Apply');
    }
    
    const applicant = {
        name: nameNode.value,
        phone: phoneNode.value,
        comfort: comfortNode.value + ' of 5',
        burial: burialNode.value,
        pyromaniac: isPyromaniac,
        burnPreference: burnPrefArray
    };

    const jsonString = window.localStorage.getItem('job-applicant');
    const checkArray = JSON.parse(jsonString);
    if(!checkArray) {
        applicationsSubmitted.push(applicant);
    }
    else {
        applicationsSubmitted = checkArray;
        applicationsSubmitted.push(applicant);
    }
    const serializeApplication = JSON.stringify(applicationsSubmitted);
    window.localStorage.setItem('job-applicant', serializeApplication);
    window.location = 'applicant-details.html?name=' + encodeURIComponent(applicant.name);
});

