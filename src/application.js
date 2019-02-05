const application = document.getElementById('application');
const heroName = document.getElementById('hero-name');
const alias = document.getElementById('alias');
const profession = document.getElementsByName('profession');    //this lints as not used, but it's used in applicant.profession in eventListener
const combatNodeList = document.getElementsByName('combat');


const applicant = {};

application.addEventListener('submit', function(event) {
    event.preventDefault();
    const combatStyles = [];

    applicant.name = heroName.value;
    applicant.alias = alias.value;
    applicant.profession = application.profession.value;
    applicant.combat = combatStyles;

    for(let i = 0; i < combatNodeList.length; i++) {
        const style = combatNodeList[i];
        if(style.checked) {
            combatStyles.push(style.value);
        }
        console.log('combatStyles array', combatStyles);
    }
    console.log('applicant', applicant);
});
