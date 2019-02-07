const appFormNode = document.getElementById('app-form');
const nameInputNode = document.getElementById('name-input');
const digitsInputNode = document.getElementById('digits-input');
const emailInputNode = document.getElementById('email-input');
const payInputNode = document.getElementById('pay');
console.log('200k', payInputNode);

appFormNode.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let checkBoxesArray = [];
    for(let i = 0; i < appFormNode.checkboxes.length; i++) {
        if(appFormNode.checkboxes[i].checked) {
            checkBoxesArray.push(appFormNode.checkboxes[i].value);
        }   
    } //console.log('success', checkBoxesArray);

    let formSubmittal = {
        name: nameInputNode.value,
        digits: digitsInputNode.value,
        email: emailInputNode.value,
        talkboss: checkBoxesArray,
        pay: payInputNode.value,
      //whatever: appFormNode.("whatever name="from apply.html").value
      //whatever: appFormNode.name.value  -->
      //faster way so you don't need getElementById like lines 2-5

    };
    console.log('I did it', formSubmittal);

    const setObject = JSON.stringify(formSubmittal);
    window.localStorage.setItem('applicant', setObject);
    window.location = 'thanks.html';
});