// Gets JSON stringe from local storage
const json = window.localStorage.getItem('applicant');

// This does the same thing
//const json = window.localStorage.applicant;

// Converts JSON string back to object named applicant
const applicant = JSON.parse(json);

document.getElementById('name').textContent = applicant.name;
document.getElementById('city-state').textContent = applicant.address.city + ', ' + applicant.address.state;
document.getElementById('state').textContent = applicant.address.state;
document.getElementById('steak').textContent = applicant.steak;
document.getElementById('curliness').textContent = applicant.curliness;
document.getElementById('salad').textContent = applicant.salad.join(', ');