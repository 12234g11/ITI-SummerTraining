let images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpeg",
  "img4.jpg",
  "img5.jpeg",
  "img6.jpg"
];

let currentIndex = 0;
let intervalId = null;

const imageElement = document.getElementById("image");

function showImage(index) {
  imageElement.src = images[index];
}

function nextImage() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showImage(currentIndex);
  }
}

function previousImage() {
  if (currentIndex > 0) {
    currentIndex--;
    showImage(currentIndex);
  }
}

function startSlideshow() {
  intervalId = setInterval(() => {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  }, 1000); 
}

function stopSlideshow() {
  clearInterval(intervalId);
  intervalId = null;
}
