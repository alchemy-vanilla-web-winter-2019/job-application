const formNode = document.getElementById('form');
const firstNameNode = document.getElementById('first-name');
const lastNameNode = document.getElementById('last-name');
const zipCodeNode = document.getElementById('zip-code');
const emailNode = document.getElementById('email');
const yesNode = document.getElementById('yes-netflix');
const noNode = document.getElementById('no-netflix');
const lengthTimeNode = document.getElementById('length-time');
const hoursNode = document.getElementById('hours');
const lengthNode = document.querySelectorAll('.length');

let applicants = [];

const existingApplicantJSON = window.localStorage('applicants');
if(existingApplicantJSON) {
    applicants = JSON.parse(existingApplicantJSON);
}

yesNode.addEventListener('change', function() {
    if(yesNode.checked) {
        for(let index = 0; index < lengthNode.length; index++) {
            lengthNode[index].classList.remove('hidden');
        }
        lengthTimeNode.disabled = false;
        lengthTimeNode.classList.remove('hidden');
    }
});

noNode.addEventListener('change', function() {
    if(noNode.checked) {
        for(let index = 0; index < lengthNode.length; index++) {
            lengthNode[index].classList.add('hidden');
        }
        lengthTimeNode.disabled = true;
        lengthTimeNode.classList.add('hidden');
    }
});

formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const genres = document.getElementsByName('genre[]');
    const genreSelections = [];
    for(let index = 0; index < genres.length; index++) {
        if(genres[index].checked) {
            genreSelections.push(genres[index].value);
        }
    }

    const applicant = {
        firstName: firstNameNode.value,
        lastName: lastNameNode.value,
        zipCode: zipCodeNode.value,
        email: emailNode.value,
        lengthTime: lengthTimeNode.value,
        hours: hoursNode.value,
        genres: genreSelections
    };

    applicants.push(applicant);

    const applicantsJSON = JSON.stringify(applicants);
    window.localStorage.setItem('applicants', applicantsJSON);
    window.location = './applicant-details.html';
});