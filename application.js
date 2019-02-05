const form = document.getElementById('form');
const curlyRange = document.getElementById('curly-answer');
const curl = document.getElementById('curl');

addEventListener('change', function(){
    curl.textContent = curlyRange.value;

});

addEventListener('submit', function(){
    event.preventDefault();

    const name = form.elements.name.value;
    const age = form.elements.age.value;
    const position = form.elements.position.value;
    const availability = form.elements.availability.value;

    const pizza = form.elements.pizza;
    const pizzaPreference = []

    for(let i = 0; i < pizza.length; i++){
        const choices = pizza[i];
        if(choices.checked){
            pizzaPreference.push(choices.value);
        }
    }
    
    const appSubmission = {
        name: name,
        age: age,
        position: position,
        availability: availability,
        curl: curlyRange.value,
        pizza: pizzaPreference

    };
    
    console.log(appSubmission);

});