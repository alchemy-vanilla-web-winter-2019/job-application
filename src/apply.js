const formNode = document.getElementById('detail-form');
const nameNode = document.getElementById('name');
const marriedNode = document.getElementById('married');
const singleNode = document.getElementById('single');
const statusNode = document.getElementsByName('status');
const employmentNode = document.getElementsByName('employment');
const yesEmployedNode = document.getElementById('yes');
const noEmployedNode = document.getElementById('no');
const salaryNode = document.getElementById('salary');

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
        employmentNode.value = "employed";
    }
});

noEmployedNode.addEventListener('change', function() {
    if(noEmployedNode.checked) {
        salaryNode.disabled = true;
        employmentNode.value = 'not employed';
    }
});


formNode.addEventListener('submit', function(event) {
    event.preventDefault();
    const habits = document.getElementsByName('habits[]')
    console.log(habits);
    const applicant = {
        name: nameNode.value,
        status: statusNode.value,
        employment: employmentNode.value
    
    };
console.log(applicant);
});
