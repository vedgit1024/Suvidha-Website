const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Carousel Slider Functionality
// const carouselImages = [
//   "suvidhaClassImg.png", // Replace with your actual image paths
//   "annie-spratt-r9eIL7jtenc-unsplash.jpg",
//   "suvidhaClassImg.png",
// ];
// const carouselImgElement = document.querySelector(".carousal-img img");
// const btnLeft = document.querySelector(".btn-left");
// const btnRight = document.querySelector(".btn-right");

// let currentIndex = 0;

// // Function to update the carousel image with animation
// function updateCarousel(direction) {
//   carouselImgElement.classList.remove("slide-in-right", "slide-in-left");
//   void carouselImgElement.offsetWidth; // Trigger reflow to restart animation

//   if (direction === "right") {
//     carouselImgElement.classList.add("slide-in-right");
//   } else if (direction === "left") {
//     carouselImgElement.classList.add("slide-in-left");
//   }

//   setTimeout(() => {
//     carouselImgElement.src = carouselImages[currentIndex];
//   }, 1); // Wait for the animation to complete before changing the image
// }

// // Event listeners for buttons
// btnLeft.addEventListener("click", () => {
//   currentIndex =
//     (currentIndex - 1 + carouselImages.length) % carouselImages.length;
//   updateCarousel("left");
// });

// btnRight.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % carouselImages.length;
//   updateCarousel("right");
// });

// // Initialize the carousel with the first image
// carouselImgElement.src = carouselImages[currentIndex];

// let autoChangeInterval = setInterval(() => {
//   currentIndex = (currentIndex + 1) % carouselImages.length;
//   updateCarousel("right");
// }, 4000);

// // Stop autoplay on manual click
// btnLeft.addEventListener("click", () => {
//   currentIndex =
//     (currentIndex - 1 + carouselImages.length) % carouselImages.length;
//   updateCarousel("left");
//   clearInterval(autoChangeInterval); // Stop autoplay
//   autoChangeInterval = setInterval(() => {
//     currentIndex = (currentIndex + 1) % carouselImages.length;
//     updateCarousel("right");
//   }, 4000); // Restart autoplay
// });

// btnRight.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % carouselImages.length;
//   updateCarousel("right");
//   clearInterval(autoChangeInterval); // Stop autoplay
//   autoChangeInterval = setInterval(() => {
//     currentIndex = (currentIndex + 1) % carouselImages.length;
//     updateCarousel("right");
//   }, 4000); // Restart autoplay
// });
const carouselImages = [
  { src: "carousalImages/caroImg6.png", text: "" },
  { src: "carousalImages/caroImg7.png", text: "" },
  { src: "carousalImages/caroImg8.png", text: "" },
  { src: "carousalImages/caroImg9.png", text: "" },
  {
    src: "carousalImages/caroImg10.png",
    text: "Culivating a Greener Planet with Suvidha",
    video: "Suvidha_Foundation_Video.mp4",
  },
  {
    src: "carousalImages/caroImg11.png",
    text: "Transforming Lives with Love and Care",
    video: "Suvidha_Foundation_Video.mp4",
  },
  {
    src: "carousalImages/caroImg12.png",
    text: "Get Your Donations Tax Exempted",
    video: "Suvidha_Foundation_Video.mp4",
  },
  { src: "carousalImages/caroImg3.png", text: "" },
  {
    src: "carousalImages/caroImg4.png",
    text: "Brining Smiles to Millions",
    video: "Suvidha_Foundation_Video.mp4",
  },
  {
    src: "carousalImages/caroImg5.png",
    text: "77th Independence Day Celebration",
    video: "Suvidha_Foundation_Video.mp4",
  },
];

function addWatchVideoButton() {
  const carouselImgContainer = document.querySelector(".carousal-img");

  carouselImages.forEach((item) => {
    const videoButton = document.createElement("button");
    videoButton.textContent = "Watch Video";
    videoButton.classList.add("watch-video-button");
    videoButton.onclick = () => {
      window.open(item.video || "#", "_blank");
    };

    carouselImgContainer.appendChild(videoButton);
  });
}

document.addEventListener("DOMContentLoaded", addWatchVideoButton);

const carouselImgElement = document.querySelector(".carousal-img img");
const carouselImgContainer = document.querySelector(".carousal-img");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

let currentIndex = 0;

// Function to update the carousel image and text
function updateCarousel(direction) {
  carouselImgElement.classList.remove("slide-in-right", "slide-in-left");
  void carouselImgElement.offsetWidth; // Trigger reflow to restart animation

  if (direction === "right") {
    carouselImgElement.classList.add("slide-in-right");
  } else if (direction === "left") {
    carouselImgElement.classList.add("slide-in-left");
  }

  setTimeout(() => {
    // Update image source and text dynamically
    carouselImgElement.src = carouselImages[currentIndex].src;
    carouselImgContainer.setAttribute(
      "data-text",
      carouselImages[currentIndex].text
    );
  }, 1); // Wait for the animation to complete before changing the image
}

// Event listeners for buttons
btnLeft.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  updateCarousel("left");
});

btnRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  updateCarousel("right");
});

// Initialize the carousel with the first image and text
carouselImgElement.src = carouselImages[currentIndex].src;
carouselImgContainer.setAttribute(
  "data-text",
  carouselImages[currentIndex].text
);

let autoChangeInterval = setInterval(() => {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  updateCarousel("right");
}, 4000);

// Stop autoplay on manual click
btnLeft.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  updateCarousel("left");
  clearInterval(autoChangeInterval); // Stop autoplay
  autoChangeInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    updateCarousel("right");
  }, 4000); // Restart autoplay
});

btnRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  updateCarousel("right");
  clearInterval(autoChangeInterval); // Stop autoplay
  autoChangeInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    updateCarousel("right");
  }, 4000); // Restart autoplay
});

function showContent(section) {
  const contents = document.querySelectorAll(".learn-about-us .content");

  //
  const tabs = document.querySelectorAll(".learn-about-us .tab");

  contents.forEach((content) => {
    content.style.display = "none";
  });

  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  document.getElementById(section).style.display = "block";

  document
    .querySelector(`.learn-about-us .tab[data-section="${section}"]`)
    .classList.add("active");

  // Set "About" as the default tab
  document.addEventListener("DOMContentLoaded", () => {
    showContent("about");
  });
}

const carousel = document.getElementById("testimonial-carousel");
const scrollLeftButton = document.getElementById("scroll-left");
const scrollRightButton = document.getElementById("scroll-right");

scrollLeftButton.addEventListener("click", () => {
  carousel.scrollBy({ left: -carousel.offsetWidth, behavior: "smooth" });
});

scrollRightButton.addEventListener("click", () => {
  carousel.scrollBy({ left: carousel.offsetWidth, behavior: "smooth" });
});

const reelTrack = document.querySelector(".reel-track");

function duplicateLogos() {
  // Duplicate logos to ensure seamless scrolling
  const reelItems = Array.from(reelTrack.children);
  reelItems.forEach((item) => {
    const clone = item.cloneNode(true);
    reelTrack.appendChild(clone); // Clone the entire set for seamless looping
  });
}

function startEndlessScroll() {
  const trackWidth = reelTrack.scrollWidth / 2; // Get half of the total track width
  let scrollAmount = 0;

  function moveLogos() {
    scrollAmount -= 1; // Adjust speed by changing the decrement value

    // If the scroll reaches half the track (end of first set of logos)
    if (Math.abs(scrollAmount) >= trackWidth) {
      scrollAmount = 0; // Reset scrollAmount without jerk
    }

    reelTrack.style.transform = `translateX(${scrollAmount}px)`;
    requestAnimationFrame(moveLogos); // Continuously call the function
  }

  moveLogos();
}

// Initialize the scrolling behavior
window.onload = () => {
  duplicateLogos(); // Clone the logos for seamless looping
  startEndlessScroll(); // Start the smooth scroll
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
