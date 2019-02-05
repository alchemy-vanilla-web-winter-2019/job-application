const formNode = document.getElementById('form');
const firstNameNode = document.getElementById('first-name');
const lastNameNode = document.getElementById('last-name');
const zipCodeNode = document.getElementById('zip-code');
const emailNode = document.getElementById('email');





formNode.addEventListener('submit', function(event) {
    event.defaultPrevented();

    const applicant = {
        firstName: firstNameNode.value,
        lastName: lastNameNode.value,
        zipCode: zipCodeNode.value,
        email: emailNode.value

    };
    console.log(applicant);

});