// Array of background images
const images = [
  "images/goal1.jpg",
   "images/goal2.jpg",
    "images/goal3.jpg",
     "images/goal4.jpg"
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
