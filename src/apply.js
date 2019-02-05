const applicationFormNode = document.getElementById('application-form');
const nameNode = document.getElementById('name');
const cityNode = document.getElementById('city');
// const computersNode = document.getElementById('computers');
// const artsNode = document.getElementById('arts');
// const musicNode = document.getElementById('music');
// const engineeringNode = document.getElementById('engineering');
// const domesticNode = document.getElementById('domestic');

let strongestSkill = '';
let mainPhilosophy = '';

// console.log(applicationFormNode);
// console.log(nameNode);

//get skills



applicationFormNode.addEventListener('submit', function() {
    event.preventDefault();

    const skills = document.getElementsByName('skills');
    const philosophy = document.getElementsByName('philosophy');

    for(let index = 0; index < skills.length; index++) {
        if(skills[index].checked) {
            strongestSkill = skills[index].value;
        }
    }

    for(let index = 0; index < philosophy.length; index++) {
        if(philosophy[index].checked) {
            mainPhilosophy = philosophy[index].value;
        }
    }




    const applicant = {
        name: nameNode.value,
        city: cityNode.value,
        skill: strongestSkill,
        philosophy: mainPhilosophy
    };
    
    console.log(applicant);
});
