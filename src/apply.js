const appFormNode = document.getElementById('app-form');
const nameInputNode = document.getElementById('name-input');
const digitsInputNode = document.getElementById('digits-input');
const emailInputNode = document.getElementById('email-input');

appFormNode.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let formSubmittal = {
        name: nameInputNode.value,
        digits: digitsInputNode.value,
        email: emailInputNode.value,
    };
    console.log('I did it', formSubmittal);
});