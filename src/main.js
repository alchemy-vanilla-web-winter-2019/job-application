const form = document.getElementById('form');

const mathProwess = document.getElementById('math-prowess');
const mathProwessLevel = document.getElementById('how-well-do-you-code');

const story = document.getElementById('origin-story');

mathProwess.addEventListener('change', function(event) {
    event.preventDefault();
    mathProwessLevel.textContent = mathProwess.value;
});


form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const callSign = form.elements.name.value;
    const loyalty = form.elements.loyalty.value;
    const homeWorld = form.elements.homeWorld.value;
    const homeCity = form.elements.homeCity.value;

    const religion = form.elements.religions;
    const followerOf = [];
    for(let i = 0; i < religion.length; i++) {
        const choosenReligion = religion[i];
        if(choosenReligion.checked) {
            followerOf.push(choosenReligion.value);
        }
    }
    
    const applicant = {
        name: callSign,
        loyalty: loyalty,
        placeOfOrigin: [homeWorld, homeCity],
        computingCompitence: mathProwess.value,
        religion: followerOf,
        originStory: story.value
    };

    let allApplicants = [];
    const jsonString = window.localStorage.getItem('allApplicants');
    if(jsonString) {
        allApplicants = JSON.parse(jsonString);
    }

    allApplicants.push(applicant);
    const serialize = JSON.stringify(allApplicants);
    window.localStorage.setItem('allApplicants', serialize);

    // window.location = './thank-you.html';
});



