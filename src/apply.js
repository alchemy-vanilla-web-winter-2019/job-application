const applicationFormNode = document.getElementById('application-form');
const nameNode = document.getElementById('name');
const cityNode = document.getElementById('city');
const moralityNode = document.getElementById('morality');
const moralityScoreNode = document.getElementById('morality-score');
const preSumbitNode = document.getElementById('pre-submit');
const resultsNode = document.getElementById('results');

resultsNode.style.display = 'none';

let strongestSkill = '';
let mainPhilosophy = '';
let salaryRequirement = '';
let morality = '3';

let jobTitle = '';


moralityNode.addEventListener('change', function() {
    morality = moralityNode.value;
    moralityScoreNode.innerHTML = morality;
});

applicationFormNode.addEventListener('submit', function() {
    event.preventDefault();

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

    if(applicant.skill === 'computers') {
        jobTitle = 'Junior Data Entry Clerk';
    }
    else if(applicant.skill === 'art') {
        jobTitle = 'Apprentice Business Card Designer';
    }
    else if(applicant.skill === 'music') {
        jobTitle = 'Corporate Podcast Sound Engineer Intern';
    }
    else if(applicant.skill === 'engineering') {
        jobTitle = 'Support Laborer to the Regional General Contractor';
    }
    else if(applicant.skill === 'cooking') {
        jobTitle = 'Associate Cafeteria Assistant';
    }

    const applicantJSON = JSON.stringify(applicant);

    window.localStorage.setItem('applicant', applicantJSON);

    console.log(applicantJSON);

    
    if(applicant.morality >= 3) {
        document.location = '/pages/application-denied.html';
    }

    else {
        document.location = '/pages/application-review.html';
    }
});