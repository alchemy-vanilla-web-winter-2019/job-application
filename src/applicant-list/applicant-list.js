import makeApplicationsTable from '../functions/make-applications-table.js';

const newApplicationsStringArray = window.localStorage.getItem('newApplications');
let newApplications = [];
if(newApplicationsStringArray) {
    newApplications = JSON.parse(newApplicationsStringArray);
} else {
    const noApplications = { none: true };
    newApplications.push(noApplications);
}

const tableSection = document.getElementById('table-section');
makeApplicationsTable(tableSection, newApplications);