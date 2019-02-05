const name = document.getElementById('name');
const loyalty = document.getElementById('loyalty');
const origin = document.getElementById('origin');
const computing = document.getElementById('computing');
const religion = document.getElementById('religion');
const story = document.getElementById('story');

const json = window.localStorage.getItem('applicant');
const hydrateApplicant = JSON.parse(json);

name.textContent = hydrateApplicant.name;
loyalty.textContent = hydrateApplicant.loyalty;
origin.textContent = hydrateApplicant.placeOfOrigin.join(', ');
computing.textContent = hydrateApplicant.computingCompitence;
religion.textContent = hydrateApplicant.religion.join(', ');
story.textContent = hydrateApplicant.originStory;