const applicantJSON = window.localStorage.getItem('applicant');
if(!applicantJSON)

let applicant = JSON.parse(applicantJSON);


console.log(applicant);