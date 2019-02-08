const foodForm = document.getElementById('food-form');
const name = document.getElementById('name');
const position = document.getElementById('position');

foodForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const foodChoices = [];

    for(let index = 0; index < foodForm.foods.length; index++) {
        const foodType = foodForm.foods[index];
        if(foodType.checked) {
            foodChoices.push(foodType.value);
        }
    }
    
    const applicantInfo = { //creating object and assigning to applicantInfo
        name: name.value,
        position: position.value,
        foodChoices: foodChoices
    };

    let applicants = [];
    const jsonString = window.localStorage.getItem('applicants');
    if(jsonString) {
        applicants = JSON.parse(jsonString);
    }

    applicants.push(applicantInfo);
    window.location = 'thanks.html';

    const serialize = JSON.stringify(applicants);
    window.localStorage.setItem('applicants', serialize);
});