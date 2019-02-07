const appForm = document.getElementById('table-list');

const jsonParty = window.localStorage.getItem('applicant');
const hydratedParty = JSON.parse(jsonParty);

console.log('hydrated party', hydratedParty);

//now I have the data in a way I can use. Now to get the name into the table first