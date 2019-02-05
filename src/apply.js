const applicationFormNode = document.getElementById('application-form');
const nameNode = document.getElementById('name');

console.log(applicationFormNode);
console.log(nameNode);

applicationFormNode.addEventListener('submit', function() {
    event.preventDefault();
    const applicant = {
        name: nameNode.value
    };
    
    console.log(applicant);
});
