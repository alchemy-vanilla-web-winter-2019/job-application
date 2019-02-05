const applicationFormNode = document.getElementById('application-form');
const nameNode = document.getElementById('name');
// const cityNode = document.getElementById('city');
// const computersNode = document.getElementById('computers');
// const artsNode = document.getElementById('arts');
// const musicNode = document.getElementById('music');
// const engineeringNode = document.getElementById('engineering');
// const domesticNode = document.getElementById('domestic');

let strongestSkill = "";

// console.log(applicationFormNode);
// console.log(nameNode);

//get skills



applicationFormNode.addEventListener('submit', function() {
    event.preventDefault();

    const skills = document.getElementsByName('skills');


    for(let index = 0; index < skills.length; index++) {
        if(skills[index].checked) {
            strongestSkill = skills[index].value;
        }
    }



    const applicant = {
        name: nameNode.value,
        skill: strongestSkill
    };
    
    console.log(applicant);
});
