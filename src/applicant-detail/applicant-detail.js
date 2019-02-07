const nameNode = document.getElementById('name');
const assassinationNode = document.getElementById('assassination');
const clothesNode = document.getElementById('clothes');
const skillsNode = document.getElementById('skills');
const snuckNode = document.getElementById('snuck');

const snuckTitleNode = document.getElementById('snuck-title');

const newApplicationsStringArray = window.localStorage.getItem('newApplications');
let newApplications = [];
if(newApplicationsStringArray) {
    newApplications = JSON.parse(newApplicationsStringArray);
} 


const searchParams = new URLSearchParams(window.location.search);
const nameToFind = searchParams.get('name');
console.log(nameToFind);
console.log(newApplications);

let applicant = {};
for(let i = 0; i < newApplications.length; i ++) {
    if(nameToFind === newApplications[i].name) {
        applicant = newApplications[i];
        break;
    }
}

nameNode.textContent = applicant.name;
assassinationNode.textContent = applicant.assassination;
clothesNode.textContent = applicant.clothes;
skillsNode.textContent = applicant.skills.join(', ');
snuckNode.textContent = applicant.snuck;

const uppercaseFirstLetter = applicant.name.charAt(0).toUpperCase();
const capitalizedName = uppercaseFirstLetter + applicant.name.slice(1);
snuckTitleNode.innerHTML = `Last time ${capitalizedName} snuck up on someone:`;
