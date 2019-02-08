const applicants = window.localStorage.getItem('applicant');
const newApplicants = JSON.parse(applicants);

let newApplicant = [];

const nameReviewNode = document.getElementById('name-review');
const philosophyReviewNode = document.getElementById('philosophy-review');
const skillReviewNode = document.getElementById('skill-review');
const moralityReviewNode = document.getElementById('morality-review');
const cityReviewNode = document.getElementById('city-review');
const salaryReviewNode = document.getElementById('salary-review');

const searchParams = new URLSearchParams(window.location.search);
const name = searchParams.get('name');

for(let index = 0; index < newApplicants.length; index++) {
    const currentApplicant = newApplicants[index];
    if(currentApplicant.name === name) {
        newApplicant = currentApplicant;
    }
}

console.log(newApplicants);

nameReviewNode.textContent = newApplicant.name;
philosophyReviewNode.textContent = newApplicant.philosophy;
skillReviewNode.textContent = newApplicant.skill;
moralityReviewNode.textContent = newApplicant.morality;
cityReviewNode.textContent = newApplicant.city;
salaryReviewNode.textContent = newApplicant.salary;

const moralityTestNode = document.getElementById('morality-test');

const editNode = document.getElementById('edit');
const formNode = document.getElementById('form-area');

moralityTestNode.addEventListener('click', function() {    
    if(newApplicant.morality >= 3) {
        document.location = '/pages/application-denied.html';
    }
    
    else {
        document.location = '/pages/application-accepted.html';
    }
});

editNode.addEventListener('click', function() {
    formNode.style.display = 'block';
});

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

    // let applications = [];

    // const applicantJSON = window.localStorage.getItem('applicant');
    // if(applicantJSON) {
    //     applications = JSON.parse(applicantJSON);
    // }

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

    for(let index = 0; index < newApplicants.length; index++) {
        // const currentApplicant = newApplicants[index];
        if(newApplicants[index].name === name) {
            newApplicants[index] = {
                name: nameNode.value,
                city: cityNode.value,
                skill: strongestSkill,
                philosophy: mainPhilosophy,
                morality: morality,
                salary: salaryRequirement
            };

            newApplicant = newApplicants[index];
        }
    }



    const newApplicantJSON = JSON.stringify(newApplicants);

    window.localStorage.setItem('applicant', newApplicantJSON);

    
    

    const urlSlug = '/pages/application-review.html?name=' + newApplicant.name;
    document.location = urlSlug;
});



