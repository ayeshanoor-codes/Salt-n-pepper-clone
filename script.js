document.addEventListener("DOMContentLoaded", () => {
  let hamburger = document.getElementById("hamburger");
  let links = document.querySelector(".links");

  hamburger.addEventListener("click", () => {
    links.classList.toggle("active");
  });
});
