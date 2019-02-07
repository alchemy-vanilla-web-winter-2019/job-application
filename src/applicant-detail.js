const json = window.localStorage.getItem('allApplicants');

// const hydrated = JSON.parse(json);

let hydrated = null;
if(json) {
    const allApplicants = JSON.parse(json);
    hydrated = allApplicants[allApplicants.length - 1];
} else {
    window.location = '/';
}

const name = document.getElementById('name');
const ssn = document.getElementById('ssn');
const read = document.getElementById('read-answer');
const shorts = document.getElementById('shorts');
const favoriteOptions = document.getElementById('favorite-options');
const hateShortsAmmount = document.getElementById('hate-shorts');

name.textContent = hydrated.name;
ssn.textContent = hydrated.ssn;
read.textContent = hydrated.read;
shorts.textContent = hydrated.shorts;
favoriteOptions.textContent = hydrated.favoriteOptions.join(', ');

hateShortsAmmount.textContent = hydrated.hateShortsAmmount;