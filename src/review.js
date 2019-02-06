const json = window.localStorage.getItem('allApplicants');

let applicant = null;
if(json) {
    const allApplicants = JSON.parse(json);
    applicant = allApplicants[allApplicants.length - 1];
} //else {
    //window.location = './';
//}

const name = document.getElementById('name');
const loyalty = document.getElementById('loyalty');
const origin = document.getElementById('origin');
const computing = document.getElementById('computing');
const religion = document.getElementById('religion');
const story = document.getElementById('story');

name.textContent = applicant.name;
loyalty.textContent = applicant.loyalty;
origin.textContent = applicant.placeOfOrigin.join(', ');
computing.textContent = applicant.computingCompitence;
religion.textContent = applicant.religion.join(', ');
story.textContent = applicant.originStory;