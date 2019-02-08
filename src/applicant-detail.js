const name = document.getElementById('name'); //app-detail.html
const position = document.getElementById('position');//app-detail.html
const foods = document.getElementById('foods');//app-detail.html

const jsonString = window.localStorage.getItem('applicants');//get submitted applicant from local storage and store to variable jsonString


let applicantInfo = []; //empty array storing to variable applicant
 
if(jsonString) { //if there is an applicant in json-run code below
    const foodApplicant = JSON.parse(jsonString);//store json formatted data to variable foodApplicant
    applicantInfo = foodApplicant[foodApplicant.length - 1];//json array length - 1

}

else {
 //   window.location = '/';
}

name.textContent = applicantInfo.name; //plugging in name from applicant object on index.js
position.textContent = applicantInfo.position;
foods.textContent = applicantInfo.foodChoices.join(' ');


