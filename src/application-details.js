const applicantJSON = window.localStorage.getItem('applicant');
const applicant = JSON.parse(applicantJSON);
const nameNode = document.getElementById('name');
const statusNode = document.getElementById('status');
const employmentNode = document.getElementById('employment');
const salaryNode = document.getElementById('salary');
const habitListNode = document.getElementById('habits');
const emailNode = document.getElementById('email');

nameNode.textContent = applicant.name;
statusNode.textContent = applicant.status;
employmentNode.textContent = applicant.employment;
emailNode.textContent = applicant.email;

if(applicant.habitList.length === 0) {
    habitListNode.textContent = 'none specified';
}
else {
    for(let i = 0; i < applicant.habitList.length; i++) {
        habitListNode.textContent += applicant.habitList[i] + '! ';
    }

}

if(employmentNode.value === undefined) {
    salaryNode.textContent = 'broke';
}
else {
    salaryNode.textContent = applicant.salary;
}