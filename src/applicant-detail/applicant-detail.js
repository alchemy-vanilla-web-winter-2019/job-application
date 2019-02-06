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

const uppercaseFirstLetter = applicantParsed.name.charAt(0).toUpperCase();
const capitalizedName = uppercaseFirstLetter + applicantParsed.name.slice(1);
snuckTitleNode.innerHTML = `Last time ${capitalizedName} snuck up on someone:`;
