const applicationForm = document.getElementById('application-form');
const nameNode = document.getElementById('name');
const emailNode = document.getElementById('email');
const phoneNode = document.getElementById('phone');
const genderNode = document.getElementById('gender');

applicationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const submitForm = {
        name: nameNode.value,
        email: emailNode.value,
        phone: phoneNode.value,
        gender: genderNode.value
    };

    // eslint-disable-next-line no-console
    console.log('hi', submitForm);
});
