const dtfirstName = document.createElement('dt');
const dtlocation = document.createElement('dt');

// const applicant = applicants[applicants.length - 1];


const firstName = document.getElementById('first-name');

let applicants = null;


if (json) {
    applicants = JSON.parse(json);
} else {
    window.location = './';
}