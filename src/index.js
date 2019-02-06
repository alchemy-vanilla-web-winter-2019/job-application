const foodForm = document.getElementById('food-form');
const name = document.getElementById('name');
const position = document.getElementById('position');

foodForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const foodChoices = [];

    for(let index = 0; index < foodForm.foods.length; index++) {
        const foodType = foodForm.foods[index];
        if(foodType.checked) {
            foodChoices[index] = foodType.value;
        }
    }
    
    const applicantInfo = {
        name: name.value,
        position: position.value,
        foodChoices: foodChoices
    };

    window.location = 'thanks.html';

    const serialize = JSON.stringify(applicantInfo);
    window.localStorage.setItem('applicant', serialize);
});