const formNode = document.getElementById('form-example');
const nameNode = document.getElementById('name');
const locationNode = document.getElementById('location');
const daysAvailableNode = document.getElementById('days-available');
const weekdayAvailabilityNode = document.getElementById('weekday-availability');
const weekendDayAvailabilityNode = document.getElementById('weekend-availability');
const timeAvailabilityNode = document.getElementById('time-availability');
const strengthRangeNode = document.getElementById('coding-strength');
const strengthNumberNode = document.getElementById('strength-number');
// const yesWeekendsNode = document.getElementById('yes-weekend');
// const noWeekendsNode = document.getElementById('no-weekend');
// const sectionTwoNode = document.getElementById('section-two');


strengthRangeNode.addEventListener('change', function() {
    strengthNumberNode.textContent = strengthRangeNode.value;
});

daysAvailableNode.addEventListener('change', function() {
    if(daysAvailableNode.value === 'weekdays') {
        weekdayAvailabilityNode.hidden = false;
        weekendDayAvailabilityNode.hidden = true;
        timeAvailabilityNode.hidden = false;
    } else if(daysAvailableNode.value === 'weekends') {
        weekendDayAvailabilityNode.hidden = false;
        weekdayAvailabilityNode.hidden = true;
        timeAvailabilityNode.hidden = false;
    } else if(daysAvailableNode.value === 'both') {
        weekendDayAvailabilityNode.hidden = false;
        weekdayAvailabilityNode.hidden = false;
        timeAvailabilityNode.hidden = false;
    } else {
        weekendDayAvailabilityNode.hidden = true;
        weekdayAvailabilityNode.hidden = true;
        timeAvailabilityNode.hidden = true;
    }
});

formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const applicant = {
        name: nameNode.value,
        location: locationNode.value,
        strength: strengthRangeNode.value,
        weekendAvailability: weekendDayAvailabilityNode.value,
        weekdayAvailability:  weekdayAvailabilityNode.value
    };
    console.log(applicant);
});