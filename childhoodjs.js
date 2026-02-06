// Array of background images
const images = [
  "images/childhood1.jpg",
   "images/childhood2.jpg",
    "images/childhood3.jpg",
     "images/childhood4.jpg"
];

let currentIndex = 0;

function changeBackground() {
  document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % images.length;
}

// Initial background
changeBackground();

// Change background every 5 seconds
setInterval(changeBackground, 5000);
