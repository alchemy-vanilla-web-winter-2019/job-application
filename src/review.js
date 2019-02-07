const getApplicantsJSON = window.localStorage.applicants;

let lastApplicant = {};
if(getApplicantsJSON) {
    const applicantsObjectArray = JSON.parse(getApplicantsJSON);
    lastApplicant = applicantsObjectArray[applicantsObjectArray.length - 1];
} else {
    window.location = '/';
}

document.getElementById('name').textContent = lastApplicant.name;
document.getElementById('city-state').textContent = lastApplicant.location.city + ', ' + lastApplicant.location.state;
document.getElementById('steak').textContent = lastApplicant.steak;
document.getElementById('curliness').textContent = lastApplicant.curliness;
document.getElementById('salad').textContent = lastApplicant.salad.join(', ');