const nameNode = document.getElementById('name');
const assassinationNode = document.getElementById('assassination');
const clothesNode = document.getElementById('clothes');
const skillsNode = document.getElementById('skills');
const snuckNode = document.getElementById('snuck');

const applicantSerialized = window.localStorage.getItem('newApplication');
const applicantParsed = JSON.parse(applicantSerialized);
console.log(applicantParsed);

nameNode.textContent = applicantParsed.name;
assassinationNode.textContent = applicantParsed.assassination;
clothesNode.textContent = applicantParsed.clothes;
skillsNode.textContent = applicantParsed.skills.join(', ');
snuckNode.textContent = applicantParsed.snuck;
