const formNode = document.getElementById('detail-form');
const nameNode = document.getElementById('name');
const marriedNode = document.getElementById('married');
const singleNode = document.getElementById('single');
const statusNode = document.getElementsByName('status');
const employmentNode = document.getElementsByName('employment');
const yesEmployedNode = document.getElementById('yes');
const noEmployedNode = document.getElementById('no');
const salaryNode = document.getElementById('salary');
const emailNode = document.getElementById('email');

marriedNode.addEventListener('change', function() {
    if(marriedNode.checked) {
        statusNode.value = 'married';
    }
});

singleNode.addEventListener('change', function() {
    if(singleNode.checked) {
        statusNode.value = 'single';
    }
});

yesEmployedNode.addEventListener('change', function() {
    if(yesEmployedNode.checked) {
        salaryNode.disabled = false;
        employmentNode.value = 'employed';
        salaryNode.classList.remove('hidden');
    }
});

noEmployedNode.addEventListener('change', function() {
    if(noEmployedNode.checked) {
        salaryNode.disabled = true;
        employmentNode.value = 'not employed';
        salaryNode.classList.add('hidden');
    }
});

formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const habits = document.getElementsByName('habits[]');

    const habitsSelected = [];

    for(let index = 0; index < habits.length; index++) {
        if(habits[index].checked) {
            habitsSelected.push(habits[index].value);
        }
    }
    const applicant = {
        name: nameNode.value,
        status: statusNode.value,
        employment: employmentNode.value,
        salary: salaryNode.value,
        habitList: habitsSelected,
        email: emailNode.value
    };

    const jsonApplicant = JSON.stringify(applicant);

    window.localStorage.setItem('applicant', jsonApplicant);

    window.location = './applicant-details.html';
});
