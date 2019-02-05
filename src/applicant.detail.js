const json = window.localStorage.getItem('applicant');
const applicant = JSON.parse(json);

const name = document.getElementById('name');
const city = document.getElementById('city');
const experience = document.getElementById('experience');
const certified = document.getElementById('certified');
const type = document.getElementById('type');

console.log(applicant);

name.textContent = applicant.name;
city.textContent = applicant.city;
if(applicant.experience === '0') {
    experience.textContent = 'none';
}
else {
    experience.textContent = applicant.experience + ' years';
}
if(applicant.certified) {
    certified.textContent = 'yes';
}
else {
    certified.textContent = 'no';
}
if(applicant.cuddles.length === 0) {
    type.textContent = 'none specified';
}
else {
    for(let i = 0; i < applicant.cuddles.length - 1; i++) {
        type.textContent += applicant.cuddles[i] + ', ';
    }
    type.textContent += applicant.cuddles[applicant.cuddles.length - 1];
}