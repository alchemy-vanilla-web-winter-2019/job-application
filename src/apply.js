const formNode = document.getElementById('form-details');
const nameNode = document.getElementById('name');
const yesNode = document.getElementById('yes');
const noNode = document.getElementById('no');
const statusNode = document.getElementsByName('status');
const 



formNode.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const applicant = {
        name: nameNode.value,
        status: statusNode.value,
    };
});

console.log(applicant);