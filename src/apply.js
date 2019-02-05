const appFormNode = document.getElementById('app-form');

appFormNode.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('clicked');
});