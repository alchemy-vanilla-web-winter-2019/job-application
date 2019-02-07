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
      //whatever: appFormNode.("whatever the [name="from apply.html"]).value
      //whatever: appFormNode.digits.value  -->
      //faster way so you don't need to getElementById like lines 2-5

    };
    console.log('I did it', formSubmittal);

    let applications = [];
    const jsonArray = window.localStorage.getItem('dope');
    if(jsonArray) {
        applications = JSON.parse(jsonArray); 
    }
    applications.push(formSubmittal);
    const serializedArray = JSON.stringify(applications);
    localStorage.setItem('dope', serializedArray);
    window.location = 'thanks.html';
});