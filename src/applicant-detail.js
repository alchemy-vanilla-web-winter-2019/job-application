const json = window.localStorage.getItem('allApplicants');
let allApplicants = [];

let hydrated = [];
if(json) {
    allApplicants = JSON.parse(json);
} else {
    window.location = '/';
}

const searchParams = new URLSearchParams(window.location.search);
const valueToFind = searchParams.get('name');

// create for loop to find info for selected element then update text content
for(let i = 0; i < allApplicants.length; i++) {
    const currentApplicant = allApplicants[i];

    if(currentApplicant.name === valueToFind) {
        hydrated = currentApplicant;
        break;
    }
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