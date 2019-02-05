const application = document.getElementById('application');
const heroName = document.getElementById('hero-name');
const alias = document.getElementById('alias');
const profession = document.getElementsByName('profession');
const combatNodeList = document.getElementsByName('combat').checked;

console.log('combatNodeList', combatNodeList);

const applicant = {};

application.addEventListener('submit', function(event) {
    event.preventDefault();

    applicant.name = heroName.value;
    applicant.alias = alias.value;
    applicant.profession = application.profession.value;

    // const combatStyles = [];

    // for(let i = 0; i < combatNodeList.length; i++) {
    //     const style = combatNodeList[i];
    //     if(style.checked) {
    //         console.log('for loop', style[i]);
            // combatStyles.push(style.value);
        // }
        // console.log(style);
    // }

console.log(applicant);

});