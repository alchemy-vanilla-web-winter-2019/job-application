function deleteApplicant(object) {
    const newApplicationsStringArray = window.localStorage.getItem('newApplications');
    let newApplications = [];
    if(newApplicationsStringArray) {
        newApplications = JSON.parse(newApplicationsStringArray);
    }
    
    const deletedApplicationsStringArray = window.localStorage.getItem('deletedApplications'); 
    let deletedApplications = [];
    if(deletedApplicationsStringArray) {
        deletedApplications = JSON.parse(deletedApplicationsStringArray);
    }
    
    for(let i = 0; i < newApplications.length; i++) {
        const nameMatch = newApplications[i].name === object.name;
        const dupMatch = newApplications[i].duplicate === object.duplicate;
        if(nameMatch && dupMatch) {
            const deletedApplication = newApplications[i];
            deletedApplications.push(deletedApplication);
            newApplications.splice(i, 1);            
            break;
        }
    }
//     const serializedArray = JSON.stringify(newApplications);
//     window.localStorage.setItem('newApplications', serializedArray);
}

export default deleteApplicant;