const nameNode = document.getElementById('name');
const assassinationNode = document.getElementById('assassination');
const clothesNode = document.getElementById('clothes');
const skillsNode = document.getElementById('skills');
const snuckNode = document.getElementById('snuck');

const snuckTitleNode = document.getElementById('snuck-title');

const applicantSerialized = window.localStorage.getItem('newApplication');
const applicantParsed = JSON.parse(applicantSerialized);

nameNode.textContent = applicantParsed.name;
assassinationNode.textContent = applicantParsed.assassination;
clothesNode.textContent = applicantParsed.clothes;
skillsNode.textContent = applicantParsed.skills.join(', ');
snuckNode.textContent = applicantParsed.snuck;

snuckTitleNode.innerHTML = `Last time ${applicantParsed.name} snuck up on someone`;
