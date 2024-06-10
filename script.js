const iris = document.querySelector('#iris_left');
const white = document.querySelector('#eye_white_left');

document.addEventListener("mousemove", function(event){

    mouseX = (event.clientX / window.innerWidth);
    mouseY = (event.clientY / window.innerHeight);

    iris.style.top = `${mouseY * 100}%`;
    iris.style.left = `${mouseX * 100}%`;
})
