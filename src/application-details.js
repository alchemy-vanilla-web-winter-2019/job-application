const applicantJSON = window.localStorage.getItem('applicant');
const applicant = JSON.parse(applicantJSON);
const nameNode = document.getElementById('name');
const statusNode = document.getElementById('status');
const employmentNode = document.getElementById('employment');
const salaryNode = document.getElementById('salary');
const habitListNode = document.getElementById('habits');

nameNode.textContent = applicant.name;
statusNode.textContent = applicant.status;
employmentNode.textContent = applicant.status;
salaryNode.textContent = applicant.salary;
habitListNode.textContent = applicant.habitList;

