// Array of background images
const images = [
  "images/skill1.jpg",
   "images/skill2.jpg",
    "images/skill3.jpg",
     "images/skill4.jpg"
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
