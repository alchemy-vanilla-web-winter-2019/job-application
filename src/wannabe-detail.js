const heroName = document.getElementById('hero-name');
const heroAlias = document.getElementById('hero-alias');
const heroProfession = document.getElementById('hero-profession');
const heroCombat = document.getElementById('hero-combat');
const heroReason = document.getElementById('hero-reason');

const jsonObject = window.localStorage.getItem('applications');

const hydratedWannabe = JSON.parse(jsonObject);

const index = hydratedWannabe.length - 1;
console.log(hydratedWannabe);

heroName.textContent = hydratedWannabe[index].name;
heroAlias.textContent = hydratedWannabe[index].alias;
heroProfession.textContent = hydratedWannabe[index].profession;
heroCombat.textContent = hydratedWannabe[index].combat;
heroReason.textContent = hydratedWannabe[index].joinReason;
