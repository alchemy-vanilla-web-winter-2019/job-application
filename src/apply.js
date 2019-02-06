const appFormNode = document.getElementById('app-form');
const nameInputNode = document.getElementById('name-input');
const digitsInputNode = document.getElementById('digits-input');
const emailInputNode = document.getElementById('email-input');
const payInputNode = document.getElementById('pay');
const yesNoInputNode =  document.getElementById('yes-no');

appFormNode.addEventListener('submit', function(event) {
    event.preventDefault();
    
    //console.log(appFormNode.checkboxes);
    let checkBoxesArray = [];
    for(let i = 0; i < appFormNode.checkboxes.length; i++) {
        let selectedCheck = appFormNode.checkboxes[i];
        if(selectedCheck.checked) {
            checkBoxesArray.push(selectedCheck.value);
        }
    } //console.log('success', checkBoxesArray);

    let formSubmittal = {
        name: nameInputNode.value,
        digits: digitsInputNode.value,
        email: emailInputNode.value,
        talkboss: checkBoxesArray,
        pay: payInputNode,
        yesno: yesNoInputNode.value

    };
    console.log('I did it', formSubmittal);

    const setObject = JSON.stringify(formSubmittal);
    window.localStorage.setItem('applicant', setObject);
    window.location = 'thanks.html';
});