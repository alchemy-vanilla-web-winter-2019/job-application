const userInputNode = document.getElementById('user-input');
const nameNode = document.getElementById('name');
const cityNode = document.getElementById('city');
const phoneNumberNode = document.getElementById('phone-number');
// const yesRealityNode = document.getElementById('yes-reality');
// const noRealityNode = document.getElementById('no-reality');
// const selfDescription = document.getElementById('self-description');



userInputNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const applicant = {
        name: nameNode.value,
        city: cityNode.value,
        phone: phoneNumberNode.value,
        // escapeReason: escapeSelect,
        
        
    };
    console.log(applicant);
});