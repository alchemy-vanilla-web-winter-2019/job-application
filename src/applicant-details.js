const getPackage = window.localStorage.getItem('job-applicant');
const applicantArray = JSON.parse(getPackage);
const lastApp = applicantArray.length - 1;
const buttonNode = document.getElementById('return-home');
const formValue = [
    applicantArray[lastApp].name, 
    applicantArray[lastApp].phone, 
    applicantArray[lastApp].comfort, 
    applicantArray[lastApp].burial
];

for(let index = 0; index < 4; index++) {
    const form = document.getElementsByTagName('dd');
    form[index].textContent = formValue[index];
}

buttonNode.addEventListener('click', function() {
    window.location = './index.html';
});