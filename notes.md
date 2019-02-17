// MY PROCESS:
// file - apply.js
    // 1 globals - grab form by id
    // 2 add event listener and preventDefault
        // a. check to make sure that apply.js is hooked up and preventDefault is working
    // 3 globals - grab value of nameNode element 
    // 3a console.log
    // 3b repeat for email and phone
    // 4 create for loop for check boxes
        // a. empty array to push checked into (outside of for loop)
        // b. exit condition in for loop needs to drill down into what you need to grab (gender.length)
        // c. variable to hold index of gender being looped 
        // d. conditional - if statement - if gender.checked then push gender to empty array
        // e. console.log
    // 5 globals - grab nodes for radio buttons
    // 6 need conditional for radio buttons within event listener
        // a. let schedule = null;
        // b. conditional for each button - if node.checked then schedule = node.value 
    // 7 globals - grab node for pull-down
    // 8 create applicant object inside event listener
    // 9 redirect to thanks.html on submit (of application)
// file - applicant-detail.html
    // 10 create table to display applicants
// file - apply.js
    // 11 assign stringified object to variable
    // 12 "set" object into local storage
// file - applicant-detail.js - Need to get items out of local storage (strings), 
// turn back into JS object and display details on applicant-detail.html
    // 13 grab nodes from applicant-detail.html descriptive list (name, email, phone, schedule, position)
// file - applicant-detail.js - Need to get items out of local storage (strings), 
// turn back into JS object and display details on applicant-detail.html
    // 13 grab nodes from applicant-detail.html descriptive list (name, email, phone, schedule, position)
    // 14 get out of local storage and assign to variable (jsonObject)
    // 15 parse object, set to variable (hydrated_____)