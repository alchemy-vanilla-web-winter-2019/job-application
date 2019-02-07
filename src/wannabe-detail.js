const heroName = document.getElementById('hero-name');
const heroAlias = document.getElementById('hero-alias');
const heroProfession = document.getElementById('hero-profession');
const heroCombat = document.getElementById('hero-combat');
const heroReason = document.getElementById('hero-reason');

const jsonObject = window.localStorage.getItem('applicant');

const hydratedWannabe = JSON.parse(jsonObject);

heroName.textContent = hydratedWannabe.name;
heroAlias.textContent = hydratedWannabe.alias;
heroProfession.textContent = hydratedWannabe.profession;
heroCombat.textContent = hydratedWannabe.combat.join(', ');
heroReason.textContent = hydratedWannabe.joinReason;
