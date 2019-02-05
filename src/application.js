const application = document.getElementById('application');
const heroName = document.getElementById('hero-name');
const alias = document.getElementById('alias');
const profession = document.getElementsByName('profession');
const combatNodeList = document.getElementsByName('combat');

// console.log('combatNodeList', combatNodeList);

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
            // console.log('style checked', style);
            combatStyles.push(style.value);
        }
        console.log('combatStyles array', combatStyles);
        // console.log('style', style);
    }

console.log('applicant', applicant);

});