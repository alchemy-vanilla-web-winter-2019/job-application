const json = window.localStorage.getItem('allApplicants');
let allApplicants = [];

let applicant = null;

if(json) {
    allApplicants = JSON.parse(json);
} else {
    window.location = '/';
}

const searchPeram = new URLSearchParams(window.location.search);
const nameToFind = searchPeram.get('name');

console.log(searchPeram);
console.log(window.location.search);
console.log(nameToFind);


for(let i = 0; i < allApplicants.length; i++) {
    const currentApplicant = allApplicants[i];

    if(currentApplicant.name === nameToFind) {
        applicant = currentApplicant;
        break;
    }
}






const name = document.getElementById('name');
const loyalty = document.getElementById('loyalty');
const realm = document.getElementById('realm');
const computing = document.getElementById('computing');
const religion = document.getElementById('religion');
const story = document.getElementById('story');

name.textContent = applicant.name;
loyalty.textContent = applicant.loyalty;
realm.textContent = applicant.realm.join(', ');
computing.textContent = applicant.computingCompitence;
religion.textContent = applicant.religion.join(', ');
story.textContent = applicant.originStory;