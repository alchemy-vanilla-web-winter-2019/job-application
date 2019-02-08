// Pulls applicants' info from local storage
function getApplicantsInfo() {
    const getApplicantsJSON = window.localStorage.applicants;
    let applicantsObjectArray = [];
    if(getApplicantsJSON) {
        applicantsObjectArray = JSON.parse(getApplicantsJSON);
    }
    return applicantsObjectArray;
}
export default getApplicantsInfo;