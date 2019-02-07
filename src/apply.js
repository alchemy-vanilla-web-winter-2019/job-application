const formNode = document.getElementById('application');
const nameNode = document.getElementById('name');
const cityNode = document.getElementById('city');
const yesExperience = document.getElementById('yes-experience');
const noExperience = document.getElementById('no-experience');
const yearsExperience = document.getElementById('years-experience');
const yearsExperienceQuestion = document.getElementById('years');
const yesCertified = document.getElementById('yes-cert');
const noCertified = document.getElementById('no-cert');
const numberNode = document.getElementById('number');

let applicants = [];
const jsonApplicants = window.localStorage.getItem('applicants');
if(jsonApplicants) {
    applicants = JSON.parse(jsonApplicants);
}


yesExperience.addEventListener('change', function() {
    if(yesExperience.checked) {
        yearsExperienceQuestion.classList.remove('hidden');
        yearsExperience.disabled = false;
        yearsExperience.required = true;
        yearsExperience.value = 1;
    }    
});

noExperience.addEventListener('change', function() {
    if(noExperience.checked) {
        yearsExperienceQuestion.classList.add('hidden');
        yearsExperience.value = 0;
        yearsExperience.disabled = true;
        yearsExperience.required = false;
    }
});

formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    let isCertified = null;
    if(yesCertified.checked) {
        isCertified = true;
    }
    else if(noCertified.checked) {
        isCertified = false;
    }

    const cuddleTypesNode = document.getElementsByName('types[]');
   
    let cuddleTypes = [];
    for(let i = 0; i < cuddleTypesNode.length; i++) {
        if(cuddleTypesNode[i].checked) {
            cuddleTypes.push(cuddleTypesNode[i].value);
        }
    }

    const applicant = {
        name: nameNode.value,
        city: cityNode.value,
        experience: yearsExperience.value, 
        professional: isCertified,
        cuddles: cuddleTypes,
        faveNumber: numberNode.value,
        id: applicants.length
    };

    applicants.push(applicant);
    const applicantsJSON = JSON.stringify(applicants);
    window.localStorage.setItem('applicants', applicantsJSON);
    window.location = './application-detail.html?id=' + encodeURIComponent(applicant.id);
});

