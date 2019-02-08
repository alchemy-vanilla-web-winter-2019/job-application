let applicants = [];
const name = document.getElementById('name');
const location = document.getElementById('location');
const codingStrength = document.getElementById('coding-strength');
const timeAvailability = document.getElementById('time-availability');

const jsonObject = window.localStorage.getItem('applicants');
if(jsonObject) {
    applicants = JSON.parse(jsonObject);
} else {
    window.location = './apply.html';
}

// taking the applicant array and getting out the most recent applicant
const applicant = applicants[applicants.length - 1]; 

name.textContent = applicant.name;
location.textContent = applicant.location;
codingStrength.textContent = applicant.strength;
timeAvailability.textContent = applicant.timeAvailable;
