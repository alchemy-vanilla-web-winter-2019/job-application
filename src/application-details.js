const nameEl = document.getElementById('name');
const questEl = document.getElementById('quest');
const colorEl = document.getElementById('color');
const talentsEl = document.getElementById('talents');
const loyaltyEl = document.getElementById('loyalty');



const jsonObject = window.localStorage.getItem('application');
const hydratedJson = JSON.parse(jsonObject);
console.log(hydratedJson);

nameEl.textContent = hydratedJson.name;
questEl.textContent = hydratedJson.quest;
colorEl.textContent = hydratedJson.color;
talentsEl.textContent = hydratedJson.talents.join(', ');
loyaltyEl.textContent = hydratedJson.loyalty;