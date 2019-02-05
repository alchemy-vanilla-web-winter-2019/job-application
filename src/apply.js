const userInputNode = document.getElementById('user-input');
const nameNode = document.getElementById('name');
const cityNode = document.getElementById('city');
const phoneNumberNode = document.getElementById('phone-number');
const yesEscapeNode = document.getElementById('yes-escape');
const noEscapeNode = document.getElementById('no-escape');
const boredomNode = document.getElementById('boredom');
const delusionalNode = document.getElementById('delusional');
const bowieNode = document.getElementById('bowie');
// const selfDescription = document.getElementById('self-description');


yesEscapeNode.addEventListener('change', function() {
    if(yesEscapeNode.checked) {
        const hidden = document.querySelectorAll('.escape-reason');
        for(let index = 0; index < hidden.length; index++) {
            hidden[index].classList.remove('hidden');
        }
        boredomNode.disabled = false;
        delusionalNode.disabled = false;
        bowieNode.disabled = false;
        
        
        
        
    }
});

noEscapeNode.addEventListener('change', function() {
    if(noEscapeNode.checked) {
        const hidden = document.querySelectorAll('.escape-reason');
        for(let index = 0; index < hidden.length; index++) {
            hidden[index].classList.add('hidden');
        }
        boredomNode.disabled = false;
        delusionalNode.disabled = false;
        bowieNode.disabled = false;

        boredomNode.disabled = true;
        delusionalNode.disabled = true;
        bowieNode.disabled = true;

        
        
        
        
        
    }
});







userInputNode.addEventListener('submit', function(event) {
    event.preventDefault();
    
// experiment with this code using value from check boxes insted of select

    // const description = document.getElementById('self-description[]');
    // const descriptionSelect = [];



    // for(let index = 0; index < description.length; index++) {
    //     if(description[index].checked) {
    //         descriptionSelect.push(description[index].value);
    //     }
    // }
    


    
    const applicant = {
        name: nameNode.value,
        city: cityNode.value,
        phone: phoneNumberNode.value,
        // describeSelf: selfDescription.value,
        
    
        
    };
   
    const serialize = JSON.stringify(applicant); 
    console.log(serialize);

    window.localStorage.setItem('lectric-eye', serialize);
    window.location = './details-applicant.html';
});