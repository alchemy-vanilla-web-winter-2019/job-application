
const personalInfo = document.getElementById('personal-info');
const applicantName = document.getElementById('name');
const nickName = document.getElementById('nickname');
const communicationPreference = document.getElementById('communication');
const dachsund = document.getElementById('dachsund');
const volumeLevel = document.getElementById('volume');
const volumeDisplay = document.getElementById('volume-display');


volumeLevel.addEventListener('change', function() {
    volumeDisplay.textContent = volumeLevel.value;
});


personalInfo.addEventListener('submit', function(event) {
    event.preventDefault();
    const pizzaToppings = [];
    
    for(let i = 0; i < personalInfo.topping.length; i++) {
        const name = personalInfo.topping[i];
        if(name.checked){
            pizzaToppings.push(name.value);
        }    
    }
    
    const namePreference = personalInfo.elements.names.value;

    const applicant = {
        applicantName: applicantName.value,
        nickName: nickName.value,
        namePreference: namePreference,
        pizzaToppings: pizzaToppings,
        communicationPreference: communicationPreference.value,
        dachsund: dachsund.value,
        volumeLevel: volumeLevel.value,
      
    };

    let applicants = [];
    const jsonString = window.localStorage.getItem('applicants');
    if(jsonString){
        applicants = JSON.parse(jsonString);
    }
    
    applicants.push(applicant);
    applicant.number = String(applicants.length);
    

    const serialize = JSON.stringify(applicants);
    window.localStorage.setItem('applicants', serialize);
    
    window.location = 'thanks.html';
});
