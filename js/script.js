let currentImageIndex = 0;
const images = document.getElementsByClassName("img-slide");
const max = images.length;

function nextImage() {

    images[currentImageIndex].classList.remove("selected");

    currentImageIndex++

    if(currentImageIndex >= max) {
        currentImageIndex = 0;
        }

    images[currentImageIndex].classList.add("selected")
}

function start() {
    setInterval(() => {
        nextImage();     
    }, 3000);
}

window.addEventListener("load", start);