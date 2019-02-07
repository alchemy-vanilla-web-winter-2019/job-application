//get the table
const tableList = document.getElementById('table-list');
//get the data
const jsonApplications = window.localStorage.getItem('applications');

//parse the data
const hydratedApps = JSON.parse(jsonApplications);

console.log('hydratedApps', hydratedApps);

//loop through array to append data to dom
for(let i = 0; i < hydratedApps.length; i++) {
    //start with the row
    const newRow = document.createElement('tr');
    const nameTD = document.createElement('td');
    const aliasTD = document.createElement('td');
    const professionTD = document.createElement('td');
    const combatTD = document.createElement('td');
    const joinReasonTD = document.createElement('td');

    nameTD.textContent = hydratedApps[i].name;
    aliasTD.textContent = hydratedApps[i].alias;
    professionTD.textContent = hydratedApps[i].profession;
    combatTD.textContent = hydratedApps[i].combat.join(', ');
    joinReasonTD.textContent = hydratedApps[i].joinReason;

    tableList.appendChild(newRow);
    newRow.appendChild(nameTD);
    newRow.appendChild(aliasTD);
    newRow.appendChild(professionTD);
    newRow.appendChild(combatTD);
    newRow.appendChild(joinReasonTD);
}