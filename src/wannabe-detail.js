const heroName = document.getElementById('hero-name');
const heroAlias = document.getElementById('hero-alias');
const heroProfession = document.getElementById('hero-profession');
const heroCombat = document.getElementById('hero-combat');
const heroReason = document.getElementById('hero-reason');

//I have the nodes in hand. 
// I need to get the JSON object to this page. 

const jsonObject = window.localStorage.getItem('applicant');
const hydratedWannabe = JSON.parse(jsonObject);

console.log('hydrated', hydratedWannabe);

heroName.textContent = hydratedWannabe.name;
heroAlias.textContent = hydratedWannabe.alias;
heroProfession.textContent = hydratedWannabe.profession;
heroCombat.textContent = hydratedWannabe.combat;
heroReason.textContent = hydratedWannabe.joinReason;
