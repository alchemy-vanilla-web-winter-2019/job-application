const applicationForm = document.getElementById('application-form'); //1
const nameNode = document.getElementById('name'); //3
const emailNode = document.getElementById('email'); //3
const phoneNode = document.getElementById('phone'); //3
const fullTimeNode = document.getElementById('full-time'); //5
const partTimeNode = document.getElementById('part-time'); //5
const positionsNode = document.getElementById('positions'); //7

applicationForm.addEventListener('submit', function(event) { //2
    event.preventDefault();

    // CHECKBOXES
    let genderChecked = []; //4a
    for(let i = 0; i < applicationForm.gender.length; i++) { //4b
        const gender = applicationForm.gender[i]; //4c
        if(gender.checked) { //4d
            genderChecked.push(applicationForm.gender.value); //4d
        }
    }

    // RADIO BUTTONS
    let schedule = null; //6a
    if(fullTimeNode.checked) { //6b
        schedule = fullTimeNode.value;
    }
    if(partTimeNode.checked) { //6b
        schedule = partTimeNode.value;
    }

    // OBJECT
    const applicantObject = {
        nameKey: nameNode.value,
        emailKey: emailNode.value,
        phoneKey: phoneNode.value,
        genderKey: genderChecked,
        scheduleKey: schedule.value,
        positionsKey: positionsNode.value
    };

    const jsonApplicant = window.localStorage.getItem('applicant');
    let applicants = [];
    if(jsonApplicant) {
        applicants = JSON.parse(jsonApplicant);
    }
    applicants.push(applicantObject);

    const serialized = JSON.stringify(applicants); //11
    window.localStorage.setItem('applicant', serialized); //12

    window.location = 'thanks.html'; //9
});
