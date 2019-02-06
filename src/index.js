const jobApp = document.getElementById('job-app');
const appName = document.getElementById('name');
const jobPosition = document.getElementById('positions');
const popcorn = document.getElementById('popcorn');
const popcornSpan = document.getElementById('popcorn-span'); 

popcorn.addEventListener('change', function() {
    event.preventDefault();
    popcornSpan.textContent = popcorn.value; 

});

jobApp.addEventListener('submit', function(event) {
    event.preventDefault();

    const romComClick = [];
    for(let index = 0; index < jobApp.romcom.length; index++) {
        const romComAnswer = jobApp.romcom[index];
        if(romComAnswer.checked) {
            romComClick[index] = romComAnswer.value;
        }
    }

    const filmNames = [];
    for(let index = 0; index < jobApp.films.length; index++) {
        const filmName = jobApp.films[index];
        if(filmName.checked) {
            filmNames[index] = filmName.value;
        }
    }

    const applicant = {
        name: appName.value,
        position: jobPosition.value,
        popcorn: popcorn.value,
        romCom: romComClick.value,
        filmNames: filmNames.value
    };
    
    window.location = "thanks.html";

    const serialize = JSON.stringify(applicant);
    window.localStorage.setItem('applicant', serialize);



});