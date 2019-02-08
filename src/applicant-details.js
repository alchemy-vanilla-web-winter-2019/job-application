const getPackage = window.localStorage.getItem('job-applicant');
const applicantArray = JSON.parse(getPackage);
const detailsNode = document.getElementById('return-form');
const buttonNode = document.getElementById('return-home');

const searchParams = new URLSearchParams(window.location.search);
const appName = searchParams.get('name');
let applicant = null;
if(!getPackage) {
    window.location = './';
}

for(let index = 0; index < applicantArray.length; index++) {
    if(applicantArray[index].name === appName){
        applicant = applicantArray[index];
        break;
    }
}

const build = [
    {
        item: 'Name:',
        value: applicant.name
    },
    {
        item: 'Phone Number:',
        value: applicant.phone
    },
    {
        item: 'Is a Pyromaniac:',
        value: applicant.pyromaniac
    },
    {
        item: 'Prefers to Burn:',
        value: applicant.burnPreference
    },
    {
        item: 'Level of Comfort with Immolation:', 
        value: applicant.comfort
    },
    {
        item: 'Preferred Burial Location:',
        value: applicant.burial
    }
];

for(let index = 0; index < build.length; index++) {
    const td = document.createElement('td');
    td.textContent = build[index].item;
    const dd = document.createElement('dd');
    dd.textContent = build[index].value;
    detailsNode.appendChild(td);
    detailsNode.appendChild(dd);
}    

buttonNode.addEventListener('click', function() {
    window.location = './index.html';
    console.log('test');
});