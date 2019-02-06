

// console.log(applications);

const applicationFormNode = document.getElementById('application-form');
const nameNode = document.getElementById('name');
const cityNode = document.getElementById('city');
const moralityNode = document.getElementById('morality');
const moralityScoreNode = document.getElementById('morality-score');

let strongestSkill = '';
let mainPhilosophy = '';
let salaryRequirement = '';
let morality = '3';

moralityNode.addEventListener('change', function() {
    morality = moralityNode.value;
    moralityScoreNode.innerHTML = morality;
});

applicationFormNode.addEventListener('submit', function() {
    event.preventDefault();

    let applications = [];

    const applicantJSON = window.localStorage.getItem('applicant');
    if(applicantJSON) {
        applications = JSON.parse(applicantJSON);
    }

    const skills = document.getElementsByName('skills');
    const philosophy = document.getElementsByName('philosophy');
    const salary = document.getElementsByName('salary');

    for(let index = 0; index < skills.length; index++) {
        if(skills[index].checked) {
            strongestSkill = skills[index].value;
        }
    }

    for(let index = 0; index < philosophy.length; index++) {
        if(philosophy[index].checked) {
            mainPhilosophy = philosophy[index].value;
        }
    }

    for(let index = 0; index < salary.length; index++) {
        if(salary[index].selected) {
            salaryRequirement = salary[index].value;

        }
    }

    const applicant = {
        name: nameNode.value,
        city: cityNode.value,
        skill: strongestSkill,
        philosophy: mainPhilosophy,
        morality: morality,
        salary: salaryRequirement
    };

    applications.push(applicant);

    const newApplicantJSON = JSON.stringify(applications);

    window.localStorage.setItem('applicant', newApplicantJSON);
    
    if(applicant.morality >= 3) {
        document.location = '/pages/application-denied.html';
    }

    else {
        document.location = '/pages/application-review.html';
    }

    console.log(applications, newApplicantJSON);
});

