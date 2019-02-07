const review = document.getElementById('review');
const jsonObject = window.localStorage.getItem('applications');

let applicationList = [];
if(jsonObject) {
    applicationList = JSON.parse(jsonObject);
}

const searchParamList = new URLSearchParams(window.location.search);
const identifierToFind = parseInt(searchParamList.get('identifier'));
console.log(identifierToFind);

let selected = {};
for(let i = 0; i < applicationList.length; i++) {
    console.log(applicationList[i].identifier);
    if(applicationList[i].identifier === identifierToFind) {
        selected = applicationList[i];
        break;
    }
}


review.children.inputName.textContent = selected.name;
review.children.inputExperience.textContent = selected.experience;
review.children.inputWeapon.textContent = selected.weapon;
review.children.inputRoles.textContent = selected.roles.join(', ');
review.children.inputGoodness.textContent = selected.goodness;
review.children.inputLawfulness.textContent = selected.lawfulness;

