const name = document.getElementById('name');
const ssn = document.getElementById('ssn');
const read = document.getElementById('read');
const shorts = document.getElementById('shorts');
const favoriteOptions = document.getElementById('favorite-options');
const hateShortsAmmount = document.getElementById('hate-shorts');

const json = window.localStorage.getItem('applicant');
const hydrated = JSON.parse(json);

name.textContent = hydrated.name;
ssn.textContent = hydrated.ssn;
read.textContent = hydrated.read;
shorts.textContent = hydrated.shorts;
favoriteOptions.textContent = hydrated.favoriteOptions.join(', ');

hateShortsAmmount.textContent = hydrated.hateShortsAmmount;