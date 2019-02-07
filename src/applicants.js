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


for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];

    const tr = document.createElement('tr');
    const name = document.createElement('td');
    const city = document.createElement('td');
    const cuddleTypes = document.createElement('td');
    const favoriteNumber = document.createElement('td');
    favoriteNumber.classList.add('num');
    const link = document.createElement('a');
    link.href = 'application-detail.html?id=' + encodeURIComponent(applicant.id);
    link.textContent = applicant.name;
    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');

    deleteButton.textContent = 'X';
    deleteButton.value = applicant.id;

    deleteButton.addEventListener('click', function() {
        let removeIdx = null;
        for(let i = 0; i < applicants.length; i++) {
            const currApplicant = applicants[i];
            if(Number(currApplicant.id) === Number(deleteButton.value)) {
                removeIdx = i;
                break;
            }
        }
        applicants.splice(removeIdx, 1);
        const applicantsJSON = JSON.stringify(applicants);
        window.localStorage.setItem('applicants', applicantsJSON);
        window.location = 'applicants.html';
    });


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

    name.appendChild(link);
    tr.appendChild(name);
    tr.appendChild(city);
    tr.appendChild(cuddleTypes);
    tr.appendChild(favoriteNumber);
    deleteCell.appendChild(deleteButton);
    tr.appendChild(deleteCell);
    tbody.appendChild(tr);
}

let favoriteSum = 0;
//create row to display sum of favorite numbers
const numCells = document.querySelectorAll('.num');
for(let i = 0; i < numCells.length; i++) {
    const number = Number(numCells[i].textContent);
    favoriteSum += number;
}

const sumRow = document.createElement('tr');
const sumLabel = document.createElement('th');
sumLabel.textContent = 'Favorite Number sum';
sumLabel.colSpan = 3;
const sum = document.createElement('td');
sum.textContent = favoriteSum;
sumRow.appendChild(sumLabel);
sumRow.appendChild(sum);
tbody.appendChild(sumRow);

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

window.localStorage.setItem('last-visited', 'applicant-list');