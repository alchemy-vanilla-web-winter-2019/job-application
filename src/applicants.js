const jsonString = window.localStorage.getItem('taste-applicants');

let tasteApplicants = [];//variable tasteApplicants are an empty array

if(jsonString) { //if jsonString has any data, run code below
    tasteApplicants = JSON.parse(jsonString);//tasteApplicants are data parsed from jsonString
}

const tbody = document.getElementById('taste-applicants');//grabbing taste-applicants node and assigning tbody variable

for(let index = 0; index < tasteApplicants.length; index++) { //loop through applicants array
    const foodApplicant = tasteApplicants[index]; //variable foodApplicant equals last applicant in the array loop

    const tr = document.createElement('tr');//create table row (tr) element
    tbody.appendChild(tr); //insert tr into the tbody

    const tdName = document.createElement('td');//create element td to assigning it to tdName
    tdName.textContent = foodApplicant.name;//grab food applicants name to apply to tdName cell
    tr.appendChild(tdName);//insert tdName to tr (table row)

    const tdPosition = document.createElement('td'); //creating element td and assigning it to tdPosition
    tdPosition.textContent = foodApplicant.position; //grab food applicants position and assign to tdPosition variable
    tr.appendChild(tdPosition); //insert tdPosition into tr cell

    const tdFoods = document.createElement('td'); //create element td and assign to tdFoods variable
    tdFoods.textContent = foodApplicant.foods.join(' '); //grab applicants food choices, join them together and apply to tdFoods variable
    tr.appendChild(tdFoods); //insert tdFoods into tr cell
}


