const applyNode = document.getElementById('apply');
const reviewNode = document.getElementById('review');

applyNode.addEventListener('click', function(){
    window.location = './apply.html';
});
reviewNode.addEventListener('click', function(){
    window.location = './applicants.html';
});