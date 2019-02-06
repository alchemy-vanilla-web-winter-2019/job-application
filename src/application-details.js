const jsonObject = window.localStorage.getItem('application');
const hydratedJson = JSON.parse(jsonObject);
console.log(hydratedJson);