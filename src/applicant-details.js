const appName = document.getElementById('name');
const digits = document.getElementById('digits');
const email = document.getElementById('email');
const bossLevels = document.getElementById('boss-levels');
const pay = document.getElementById('pay');

const jsonObject = window.localStorage.getItem('dope');
const applicants = JSON.parse(jsonObject);

console.log('it worked', applicants);

const searchParam = new URLSearchParams(window.location.search);//today
const nameToFind = searchParam.get('name');//today

let applicant = null; //today, line 15-22
if(nameToFind) {
    for(let i = 0; i < applicants.length; i++) {
        if(applicants[i].name === nameToFind) {
            applicant = applicants[i];
            break;
        }
    }

}

appName.textContent = applicant.name;
digits.textContent = applicant.digits;
email.textContent = applicant.email;
bossLevels.textContent = applicant.talkboss.join(', ');
pay.textContent = applicant.pay;