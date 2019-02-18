const nameDetailNode = document.getElementById('name');
const emailDetailNode = document.getElementById('email');
const phoneDetailNode = document.getElementById('phone');
// const scheduleDetailNode = document.getElementById('schedule');
const positionDetailNode = document.getElementById('position');

const jsonApplicant = window.localStorage.getItem('applicant');

let applicantList = [];
if(jsonApplicant) {
    applicantList = JSON.parse(jsonApplicant);
}

const searchParamsList = new URLSearchParams(window.location.search);
const nameToFind = searchParamsList.get('name');

let applicantSelected = [];
for(let i = 0; i < applicantList.length; i++) {
    if(applicantList[i].name === nameToFind) {
        applicantSelected = applicantList[i];
        break;
    }
}

nameDetailNode.textContent = applicantSelected.name;
emailDetailNode.textContent = applicantSelected.email;
phoneDetailNode.textContent = applicantSelected.phone;
// scheduleDetailNode.textContent = applicantSelected.schedule.join(', ');
positionDetailNode.textContent = applicantSelected.position;
