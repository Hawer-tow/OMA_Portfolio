// Array of background images
const images = [
  "images/hobby1.jpg",
   "images/hobby2.jpg",
    "images/hobby3.jpg",
     "images/hobby4.jpg"
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
