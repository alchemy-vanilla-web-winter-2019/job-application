const review = document.getElementById('review');
const jsonObject = window.localStorage.getItem('applicant');
const hydratedJson = JSON.parse(jsonObject);


review.children.inputName.textContent = hydratedJson.name;
review.children.inputExperience.textContent = hydratedJson.experience;
review.children.inputWeapon.textContent = hydratedJson.weapon;
review.children.inputRoles.textContent = hydratedJson.roles.join(', ');
review.children.inputGoodness.textContent = hydratedJson.goodness;
review.children.inputLawfulness.textContent = hydratedJson.lawfulness;

