const yarnForm = document.getElementById('yarn-application');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const jobPosition = document.getElementById('position');
const knittingSkills = document.getElementById('knitting-skills');
const knittingSkillsSpan = document.getElementById('skills-range');

knittingSkills.addEventListener('change', function(event) {
    event.preventDefault();
    if(knittingSkills.value <= 1) {
        knittingSkillsSpan.textContent = 'Not a knitter, eh?';
    }
    else if(knittingSkills.value >= 11) {
        knittingSkillsSpan.textContent = 'Wow! Turn that knitting up to 11!';
    }
    else {
        knittingSkillsSpan.textContent = knittingSkills.value;
    }
    
});

yarnForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const allergyAnswer = [];
    for(let j = 0; j < yarnForm.allergy.length; j++) {
        const allergyLevel = yarnForm.allergy[j];
        if(allergyLevel.checked) {
            allergyAnswer[j] = allergyLevel.value;
        }
    }

    const yarnNames = [];
    for(let i = 0; i < yarnForm.yarn.length; i++) {
        const yarnName = yarnForm.yarn[i];
        if(yarnName.checked) {
            yarnNames[i] = yarnName.value;
        }
    }

    const applicant = {
        name: firstName.value + lastName.value,
        position: jobPosition.value,
        skillLevel: knittingSkills.value,
        allergy: allergyAnswer,
        yarn: yarnNames

    };
    console.log(applicant);
});

