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
    } console.log('checkbox success', checkBoxesArray);

    //object is formSubmittal
    let formSubmittal = {
        name: nameInputNode.value,
        digits: digitsInputNode.value,
        email: emailInputNode.value,
        talkboss: checkBoxesArray,
        pay: payInputNode.value,
      //whatever key: appFormNode.("whatever the [name="from apply.html"]).value
      //digits: appFormNode.digits.value  -->
      //faster way so you don't need to getElementById like lines 2-5
    };
    console.log('Form Submit sucess', formSubmittal);

    const jsonArray = window.localStorage.getItem('dope');
    let applications = [];
    if(jsonArray) {
        applications = JSON.parse(jsonArray); 
    }
    else {
        applications = [];
    }
    applications.push(formSubmittal);
    const serializedArray = JSON.stringify(applications);
    localStorage.setItem('dope', serializedArray);
    window.location = 'thanks.html';
});