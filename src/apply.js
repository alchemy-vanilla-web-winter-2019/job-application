const applicationFormNode = document.getElementById('application-form');
const nameNode = document.getElementById('name');
const cityNode = document.getElementById('city');
const computersNode = document.getElementById('computers');
const artsNode = document.getElementById('arts');
const musicNode = document.getElementById('music');
const engineeringNode = document.getElementById('engineering');
const domesticNode = document.getElementById('domestic');

const strongestSkill = [];

// console.log(applicationFormNode);
// console.log(nameNode);

//get skills



applicationFormNode.addEventListener('submit', function() {
    event.preventDefault();

    const skills = document.getElementsByName('skills');


    for(let index = 0; index < skills.length; index++) {
        if(skills[index].checked) {
            console.log(skills[index].value);
        }
    }

    // console.log(skills);


    const applicant = {
        name: nameNode.value
        // skill: 
    };
    
    console.log(applicant);
});
