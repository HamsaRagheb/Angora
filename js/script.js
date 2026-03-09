/**
 * Start Loader
 *
 * @format
 */
const loader = document.getElementById("loader");
const ripple = document.querySelector(".lds-ripple");

function hideLoader(){
  loader.classList.add("hide");
  document.body.style.overflowY = "auto";

  setTimeout(() => {
    ripple.style.display = "none";
    loader.style.display = "none";
  }, 2000);
}

window.addEventListener("load", hideLoader);

setTimeout(hideLoader, 5000);
/**End Loader */
/**
 * Start Header
 */
const links = document.querySelectorAll(".links a");
const menuLinks = document.querySelector("nav .links");
const togglerButton = document.querySelector(".toggler-button");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
    menuLinks.classList.remove("open");
  });
});

togglerButton.addEventListener("click", function () {
  menuLinks.classList.toggle("open");
});
window.addEventListener("resize", function () {
  if (this.window.innerWidth > 991) {
    menuLinks.classList.remove("open");
  }
});
/** End Header */
/** Start Landing */
const landingSec = document.getElementById("landing");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const images = [
  "images/imgi_2_slideshow-1.png",
  "images/imgi_3_slideshow-2.png",
  "images/imgi_4_slideshow-3.png",
];
let currentImage = 0;

function changeBackground() {
  landingSec.style.backgroundImage = `url(${images[currentImage]})`;
}

arrowRight.addEventListener("click", () => {
  currentImage++;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  changeBackground();
});
arrowLeft.addEventListener("click", () => {
  console.log("clicked");

  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  changeBackground();
});
setInterval(() => {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  changeBackground();
}, 3000);
/** End Landing */
/** Start About */
let aboutSection = document.querySelector("#about");
let skills = document.querySelectorAll(".bar-percentage");

window.addEventListener("scroll", function () {
  let sectionTop = aboutSection.offsetTop;
  let sectionHeight = aboutSection.offsetHeight;
  let windowHeight = window.innerHeight;
  let scrollY = window.scrollY;

  if (scrollY > sectionTop + sectionHeight - windowHeight) {
    skills.forEach((skill) => {
      skill.style.width = skill.dataset.width;
    });
  }
});
/** End About */
/** Start Reviews */

$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 15,
  nav: false,
  responsive: {
    0: {
      items: 3,
    },
    576: {
      items: 5,
    },
    992: {
      items: 5,
    },
  },
});

const clients = document.querySelectorAll(".client");

let clientName = document.querySelector(".client-name");
let clientCompany = document.querySelector(".client-comp");
let clientReview = document.querySelector(".review-text");

let currentIndex = 0;
let autoChange;

function updateClient(client) {
  clients.forEach((c) => c.classList.remove("clicked"));

  client.classList.add("clicked");

  clientName.textContent = client.dataset.name;
  clientCompany.textContent = client.dataset.company;

  clientReview.innerHTML = `
    <i class="fa-solid fa-quote-left"></i>
    ${client.dataset.review}
    <i class="fa-solid fa-quote-right"></i>
  `;
}

function getItemsPerScreen() {
  if (window.innerWidth < 576) {
    return 3;
  } else {
    return 5;
  }
}

function startAutoChange() {
  clearInterval(autoChange);

  let itemsPerScreen = getItemsPerScreen();

  autoChange = setInterval(() => {
    currentIndex++;

    if (currentIndex >= itemsPerScreen) {
      currentIndex = 0;
    }

    updateClient(clients[currentIndex]);
  }, 3000);
}

function stopAutoChange() {
  clearInterval(autoChange);
}

clients.forEach((client, index) => {
  client.addEventListener("click", function () {
    currentIndex = index;
    updateClient(client);
  });

  client.addEventListener("mouseenter", stopAutoChange);

  client.addEventListener("mouseleave", startAutoChange);
});

window.addEventListener("resize", startAutoChange);

startAutoChange();

/** End Reviews */
