const applicant = applicants[applicants.length - 1];

let applicants = null;
if (json) {
    applicants = JSON.parse(json);
} else {
    window.location = './';
}

const firstName = document.getElementById('first-name');


