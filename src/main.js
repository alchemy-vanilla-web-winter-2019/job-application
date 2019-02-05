const form = document.getElementById('form');

const mathProwess = document.getElementById('math-prowess');
const mathProwessLevel = document.getElementById('how-well-do-you-code');

mathProwess.addEventListener('change', function(event) {
    event.preventDefault();
    mathProwessLevel.textContent = mathProwess.value;
});


form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const callSign = form.elements.name.value;
    const loyalty = form.elements.loyalty.value;
    const homeWorld = form.elements.homeWorld.value;
    const homeCity = form.elements.homeCity.value;

    
    
    const ensignApplication = {
        name: callSign,
        loyalty: loyalty,
        placeOfOrigin: [homeWorld, homeCity],
        computingCompitence: mathProwess.value
    };
    console.log(ensignApplication);
});

