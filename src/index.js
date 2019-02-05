const jobApp = document.getElementById('job-app');
const appName = document.getElementById('name');
const positions = document.getElementById('positions');
const popcorn = document.getElementById('popcorn');
const popcornSpan = document.getElementById('popcorn-span');


jobApp.addEventListener('submit', function(event) {
    event.preventDefault();

    const filmNames = [];
    for(let index = 0; index < jobApp.films.length; index++){
        const name = jobApp.films[index];
        if(name.checked) {
            filmNames[index] = name.value;
        }
    }
});
