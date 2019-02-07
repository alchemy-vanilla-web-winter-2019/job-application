const tbody = document.getElementById('applicants');
const jsonApplicants = window.localStorage.getItem('applicants');
let applicants = [];
let quiet = 0, spooning = 0, fire = 0, chatty = 0;

if(jsonApplicants) {
    applicants = JSON.parse(jsonApplicants);
}
else {
    window.location = './index.html';
}

console.log(applicants);

for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];

    const tr = document.createElement('tr');
    const name = document.createElement('td');
    const city = document.createElement('td');
    const cuddleTypes = document.createElement('td');
    const favoriteNumber = document.createElement('td');

    name.textContent = applicant.name;
    city.textContent = applicant.city;
    favoriteNumber.textContent = applicant.faveNumber;

    if(applicant.cuddles.length === 0) {
        cuddleTypes.textContent = 'none';
    }
    else {
        for(let i = 0; i < applicant.cuddles.length - 1; i++) {
            const cuddle = applicant.cuddles[i];
            cuddleTypes.textContent += cuddle + ', ';
            if(cuddle === 'quiet'){
                quiet++;
            }
            if(cuddle === 'spooning'){
                spooning++;
            }
            if(cuddle === 'chatty'){
                chatty++;
            }
            if(cuddle === 'fire'){
                fire++;
            }
        }
        const cuddle = applicant.cuddles[applicant.cuddles.length - 1];
        cuddleTypes.textContent += cuddle;
        if(cuddle === 'quiet'){
            quiet++;
        }
        if(cuddle === 'spooning'){
            spooning++;
        }
        if(cuddle === 'chatty'){
            chatty++;
        }
        if(cuddle === 'fire'){
            fire++;
        }
    }
    tr.appendChild(name);
    tr.appendChild(city);
    tr.appendChild(cuddleTypes);
    tr.appendChild(favoriteNumber);
    tbody.appendChild(tr);
}

//create row to display sum of favorite numbers

const cuddleTally = document.getElementById('tally-styles');
const tallyRow = document.createElement('tr');
const spoonCell = document.createElement('td');
const fireCell = document.createElement('td');
const quietCell = document.createElement('td');
const chattyCell = document.createElement('td');

spoonCell.textContent = spooning;
fireCell.textContent = fire;
quietCell.textContent = quiet;
chattyCell.textContent = chatty;

tallyRow.appendChild(spoonCell);
tallyRow.appendChild(fireCell);
tallyRow.appendChild(quietCell);
tallyRow.appendChild(chattyCell);

cuddleTally.appendChild(tallyRow);