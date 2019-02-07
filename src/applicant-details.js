const getPackage = window.localStorage.getItem('job-applicant');
const applicantArray = JSON.parse(getPackage);
const detailsNode = document.getElementById('return-form');
const buttonNode = document.getElementById('return-home');

const build = [
    {
        item: 'Name:',
        value: 'name'
    },
    {
        item: 'Phone Number:',
        value: 'phone'
    },
    {
        item: 'Level of Comfort with Immolation', 
        value: 'comfort'
    },
    {
        item: 'Preferred Burial Place',
        value: 'burial'
    }
 
   
];

for(let index = 0; index < build.length; index++) {
    const applicant = applicantArray[index];
    const applicant
    const td = document.createElement('td');
    const dd = document.createElement('dd');
    td.textContent = build[index];
    dd.textContent = applicant[1]
    console.log('td', td);
    console.log('dd', dd);
}

buttonNode.addEventListener('click', function() {
    window.location = './index.html';
});