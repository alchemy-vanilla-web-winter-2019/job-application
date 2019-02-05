const formNode = document.getElementById('form');
const firstNameNode = document.getElementById('first-name');
const lastNameNode = document.getElementById('last-name');
const zipCodeNode = document.getElementById('zip-code');
const emailNode = document.getElementById('email');
const yesNode = document.getElementById('yes-netflix');
const noNode = document.getElementById('no-netflix');
const lengthTimeNode = document.getElementById('length-time');
const hoursNode = document.getElementById('hours');


yesNode.addEventListener('change', function() {
    if(yesNode.checked) {
        // const hidden = document.getElementsByClassName('length');
        // hidden.classList.remove('hidden');
        lengthTimeNode.disabled = false;
        lengthTimeNode.checked = true;
        
    }
});

noNode.addEventListener('change', function() {
    if(noNode.checked) {
        // const hidden = document.getElementsByClassName('length');
        // hidden.classList.add('hidden');
        lengthTimeNode.disabled = true;
        lengthTimeNode.checked = false;
        lengthTimeNode.classList.add('hidden');
    }
});

formNode.addEventListener('submit', function(event) {
    event.defaultPrevented();

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
    // console.log(applicant);

});