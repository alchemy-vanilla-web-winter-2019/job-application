//--- global variables


//--- windows and localstorage

const jsonObject = window.localStorage.getItem('applicant');
const hydrateOjectApplicant = JSON.parse(jsonObject);

console.log('it worked', hydrateOjectApplicant);
//next - populate the object back into the applicant-detail.html after everything is submitted

//.name at the end comes from the key from apply.js