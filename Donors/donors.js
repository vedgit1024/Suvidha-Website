const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

const body = document.body;

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  body.classList.toggle("no-scroll");
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
