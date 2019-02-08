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
        if(newApplications[i].identification === object.identification) {
            const deletedApplication = newApplications[i];
            deletedApplications.push(deletedApplication);
            newApplications.splice(i, 1);
            console.log('deleted', deletedApplication, 'applications', newApplications);            
            break;
        }
    }
    const serializedArray = JSON.stringify(newApplications);
    window.localStorage.setItem('newApplications', serializedArray);

    const serializedDeletedArray = JSON.stringify(deletedApplications);
    window.localStorage.setItem('deletedApplications', serializedDeletedArray);
}

export default deleteApplicant;