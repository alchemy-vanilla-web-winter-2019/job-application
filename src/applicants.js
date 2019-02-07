const json = window.localStorage.getItem('applicants');

let applicants = [];
if(json) {
    applicants = JSON.parse(json);
} else {
    window.location = './';
}

const tbody = document.getElementById('applicants');

for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];
}
