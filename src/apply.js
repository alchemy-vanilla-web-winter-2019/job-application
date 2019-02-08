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
const cuddleTypesNode = document.getElementsByName('types[]');

let applicants = [];
const jsonApplicants = window.localStorage.getItem('applicants');
if(jsonApplicants) {
    applicants = JSON.parse(jsonApplicants);
}

const len = applicants.length;
let applicantId = null;

const urlParams = new URLSearchParams(window.location.search);
let updateIdx = urlParams.get('updateIndex');
if(updateIdx) {
    updateIdx = Number(updateIdx);
    console.log('update applicant at index', updateIdx);
    //get applicant to update
    const updateApplicant = applicants[updateIdx];
    console.log(updateApplicant);

    //prepopulate fields
    nameNode.value = updateApplicant.name;
    cityNode.value = updateApplicant.city;
    numberNode.value = updateApplicant.faveNumber;
    if(updateApplicant.professional) {
        yesCertified.checked = true;
    }
    else {
        noCertified.checked = true;
    }
    if(updateApplicant.experience === '0') {
        noExperience.checked = true;
        yearsExperienceQuestion.classList.add('hidden');
        yearsExperience.value = 0;
        yearsExperience.disabled = true;
        yearsExperience.required = false;
    }
    else {
        yesExperience.checked = true;
        yearsExperience.value = updateApplicant.experience;
    }
    for(let i = 0; i < updateApplicant.cuddles.length; i++){
        const cuddle = updateApplicant.cuddles[i];
        console.log(cuddle);
        for(let k = 0; k < cuddleTypesNode.length; k++) {
            const cuddleBox = cuddleTypesNode[k];
            if(cuddleBox.value === cuddle) {
                cuddleBox.checked = true;
            }
        }
    }
    
    applicantId = updateApplicant.id;
}
else {
    let previousId = 0;
    if(len > 0) {
        previousId = applicants[len - 1].id;
    }
    applicantId = previousId + 1;
    console.log('new applicant');
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
        id: applicantId
    };

    
    if(!updateIdx) {
        applicants.push(applicant);
    }
    else {
        applicants[updateIdx] = applicant;
    }

    const applicantsJSON = JSON.stringify(applicants);
    window.localStorage.setItem('applicants', applicantsJSON);
    window.localStorage.setItem('last-visited', 'application');
    window.location = './application-detail.html?id=' + encodeURIComponent(applicant.id);
});
