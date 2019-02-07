const review = document.getElementById('review');
const jsonObject = window.localStorage.getItem('applications');
const hydratedJson = JSON.parse(jsonObject);
const lastApplication = hydratedJson[hydratedJson.length -1];

review.children.inputName.textContent = lastApplication.name;
review.children.inputExperience.textContent = lastApplication.experience;
review.children.inputWeapon.textContent = lastApplication.weapon;
review.children.inputRoles.textContent = lastApplication.roles.join(', ');
review.children.inputGoodness.textContent = lastApplication.goodness;
review.children.inputLawfulness.textContent = lastApplication.lawfulness;

