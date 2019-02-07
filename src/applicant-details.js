const getPackage = window.localStorage.getItem('job-applicant');
const applicantArray = JSON.parse(getPackage);
const detailsNode = document.getElementById('return-form');
const buttonNode = document.getElementById('return-home');

const build = [
    {
        item: 'Name:',
        value: applicant[index].name
    },
    {
        item: 'Phone Number:',
        value: applicant[index].phone
    },
    {
        item: 'Level of Comfort with Immolation', 
        value: applicant[index].comfort
    },
    {
        item: 'Preferred Burial Place',
        value: applicant.burial
    }
];

for(let index = 0; index < 4; index++) {
    const td = document.createElement('td');
    const applicant = applicantArray[index];
    td.id = build[index].value; 
    detailsNode.appendChild(td);

    const ddName = createElement(dd);
    dd.textContent= applicant[index].name;

}    




buttonNode.addEventListener('click', function() {
    window.location = './index.html';
});