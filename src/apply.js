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

    const escapeReason = document.getElementsByName('escape-reason'); 
    const escapeArray = [];
    
    for(let index = 0; index < escapeReason.length; index++) {
        if(escapeReason[index].checked) {
            escapeArray.push(escapeReason[index].value);
        }
    }
    // console.log(escapeArray);
     


    
    const applicant = {
        name: nameNode.value,
        city: cityNode.value,
        phone: phoneNumberNode.value,
        realityCheck: escapeArray,
        // describeSelf: selfDescription.value,
        
    
        
    };
   
    const serialize = JSON.stringify(applicant); 
    // console.log(applicant);

    window.localStorage.setItem('lectric-eye', serialize);
    window.location = './details-applicant.html';
});