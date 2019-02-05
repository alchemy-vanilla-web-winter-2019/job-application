const application = document.getElementById('application');
const heroName = document.getElementById('hero-name');
const alias = document.getElementById('alias');
const combatNodeList = document.getElementsByName('combat');
const joinReason = document.getElementById('join-reason');


const applicant = {};

application.addEventListener('submit', function(event) {
    event.preventDefault();
    const combatStyles = [];

    applicant.name = heroName.value;
    applicant.alias = alias.value;
    applicant.profession = application.profession.value;
    applicant.combat = combatStyles;
    applicant.joinReason = joinReason.value;


    for(let i = 0; i < combatNodeList.length; i++) {
        const style = combatNodeList[i];
        if(style.checked) {
            combatStyles.push(style.value);
        }
        console.log('combatStyles array', combatStyles);
    }
    console.log('applicant', applicant);
});
