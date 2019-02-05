const getPackage = window.localStorage.getItem('job-applicant');
const wetPackage = JSON.parse(getPackage);
const returnFormNode = document.getElementById('return-form');
const returnComfortNode = document.getElementById('return-comfort');
const formItems = ['name', 'phone', 'comfort', 'burial'];
const formValue = [wetPackage.name, wetPackage.phone, wetPackage.comfort, wetPackage.burial];

for(let index = 0; index < 4; index++) {
    const form = document.getElementsByTagName('dd');
    form[index].textContent = formValue[index];
    console.log(wetPackage);
}
