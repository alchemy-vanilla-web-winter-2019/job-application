const getPackage = window.localStorage.getItem('job-applicant');
const wetPackage = JSON.parse(getPackage);
const formValue = [wetPackage.name, wetPackage.phone, wetPackage.comfort, wetPackage.burial];

for(let index = 0; index < 4; index++) {
    const form = document.getElementsByTagName('dd');
    form[index].textContent = formValue[index];
}
