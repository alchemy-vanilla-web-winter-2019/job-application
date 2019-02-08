const name = document.getElementById('name'); //app-detail.html
const position = document.getElementById('position');//app-detail.html
const foods = document.getElementById('foods');//app-detail.html

const jsonString = window.localStorage.getItem('applicants');//get submitted applicant from local storage and store to variable jsonString


let applicant = null;
let applicants = []; //empty array storing to variable applicant
 
if(jsonString) { //if there is an applicant in json-run code below
    applicants = JSON.parse(jsonString);
    //const foodApplicant = JSON.parse(jsonString);//store json formatted data to variable foodApplicant
    //applicantInfo = foodApplicant[foodApplicant.length - 1];//json array length - 1

}
else {
 //   window.location = '/';
}

const searchParam = new URLSearchParams(window.location.search);
const nameToFind = searchParam.get('name');

if(nameToFind) {
    for(let index = 0; index < applicants.length; index++) {
        let currentApplicant = applicants[index];

        if(currentApplicant.name === nameToFind) {
            applicant = currentApplicant;
            break;
        }
    }
}

else {
    applicant = applicants[applicants.length - 1];
}

name.textContent = applicant.name; //plugging in name from applicant object on index.js
position.textContent = applicant.position;
foods.textContent = applicant.foodChoices.join(' ');


