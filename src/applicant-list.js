const applicantList = document.getElementById('applicant-list');
const jsonArray = window.localStorage.getItem('applicants');

let applicants = [];
if(jsonArray) {
    applicants = JSON.parse(jsonArray);
}

const keys = ['id', 'name', 'quest', 'color', 'talents', 'loyalty'];

for(let i = 0; i < applicants.length; i++) {
    const newRow = document.createElement('tr');
    applicantList.appendChild(newRow);

    for(let j = 0; j < keys.length; j++) {
        const newCell = document.createElement('td');
        const key = keys[j];
        const value = applicants[i][key];
        console.log(key, value);
        if(key === 'id') {
            const newAnchor = document.createElement('a');
            newAnchor.href = 'application-details.html?id=' + encodeURIComponent(value);
            newAnchor.textContent = value;
            newCell.appendChild(newAnchor);
        }
        else {
            if(value instanceof Array) {
                newCell.textContent = value.join(', ');            
            }
            else 
            {
                newCell.textContent = value;
            }
        }
        newRow.appendChild(newCell);
    }

}