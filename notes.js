userInputNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const escapeReason = document.getElementsByName('escape-reason');
    // console.log(escapeReason);
    
    const escapeArray = [];

    for(let index = 0; index < escapeReason.length; index++) {
        //console.log(escapeReason[index].value);

        if(escapeReason[index].checked) {
            escapeArray.push(escapeReason[index].value);
        }
    }
    // console.log(escapeArray); //outside loop wonit run 3 times
    
// experiment with this code using value from check boxes insted of select

    // const description = document.getElementById('self-description[]');
    // const descriptionSelect = [];



    // for(let index = 0; index < description.length; index++) {
    //     if(description[index].checked) {
    //         descriptionSelect.push(description[index].value);
    //     }
    // }