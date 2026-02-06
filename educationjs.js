// Array of background images
const images = [
  "images/education1.jpg",
   "images/education2.jpg",
    "images/education3.jpg",
     "images/education4.jpg"
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
