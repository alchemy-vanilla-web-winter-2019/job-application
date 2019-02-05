const application = document.getElementById('application');
const heroName = document.getElementById('hero-name');
const alias = document.getElementById('alias');
const profession = document.getElementsByName('profession');


const applicant = {};

application.addEventListener('submit', function(event) {
    event.preventDefault();

    applicant.name = heroName.value;
    applicant.alias = alias.value;
    applicant.profession = profession;

console.log(applicant);

});