const applicationFormNode = document.getElementById('application-form');
const nameNode = document.getElementById('name');
const cityNode = document.getElementById('city');
const moralityNode = document.getElementById('morality');
const moralityScoreNode = document.getElementById('morality-score');
const preSumbitNode = document.getElementById('pre-submit');
const resultsNode = document.getElementById('results');

resultsNode.style.display = 'none';

let strongestSkill = '';
let mainPhilosophy = '';
let salaryRequirement = '';
let morality = '3';

let jobTitle = '';


moralityNode.addEventListener('change', function() {
    morality = moralityNode.value;
    moralityScoreNode.innerHTML = morality;
});

applicationFormNode.addEventListener('submit', function() {
    event.preventDefault();

    const skills = document.getElementsByName('skills');
    const philosophy = document.getElementsByName('philosophy');
    const salary = document.getElementsByName('salary');

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

    //morality



    for(let index = 0; index < salary.length; index++) {
        if(salary[index].selected) {
            salaryRequirement = salary[index].value;

        }
    }

    const applicant = {
        name: nameNode.value,
        city: cityNode.value,
        skill: strongestSkill,
        philosophy: mainPhilosophy,
        morality: morality,
        salary: salaryRequirement
    };

    console.log(applicant.philosophy);

    if(applicant.skill === 'computers') {
        jobTitle = 'Junior Data Entry Clerk';
    }
    else if(applicant.skill === 'arts') {
        jobTitle = 'Apprentice Business Card Designer';
    }
    else if(applicant.skill === 'music') {
        jobTitle = 'Assistant to the Regional Corporate Podcast Lead Sound Engineer';
    }
    else if(applicant.skill === 'engineering') {
        jobTitle = 'General Contractor\'s Support Laborer';
    }
    else if(applicant.skill === 'domestic') {
        jobTitle = 'Associate Cafeteria Assistant';
    }

    
    if(applicant.morality >= 3) {
        console.log('sorry you are too moral');
        const rejection = '<p>Thank you for your application, ' + applicant.name + '!</p>' + '<p>Unfortunately, based on your morality score, you seem like a very selfless person who would be willing to risk their own safety to ensure the safety of others. At The Good Company, we expect our employees to make their own personal safety their number one priority. Therefore, we will not be able to offer you employment at this time. Please try to increase your sense of self-preservation and apply again at a later date.</p>';

        resultsNode.innerHTML = rejection;
        resultsNode.style.display = 'block';
    }

    else {
        const jobOffer = '<p>Thank you for your application, ' + applicant.name + '!</p>' + '<p>You sound like a very ' + applicant.philosophy + ' person with a flair for ' + applicant.skill + '. That’s why we think you’d be perfect for the job of:</p>' + '<h2>' + jobTitle + '</h2> <p>We understand you’d prefer the salary of ' + applicant.salary + ', but the free market rate for this position is currently $11,423.90, without benefits. We are looking forward to your eager acceptance of this generous offer. Salary negotiations will not be entertained.</p> <p>We can’t wait to work with you! Click “‘Accept’ to officially accept the position and start your new life at The Good Company.</p>';

        resultsNode.innerHTML = jobOffer;
        resultsNode.style.display = 'block';
    }
});

    // if(philosophy === '')

    // preSumbitNode.style.display = 'none';

    // resultsNode.style.display = 'block';
    
    // console.log(preSumbitNode, resultsNode);
