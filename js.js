function ToggleMenu() {
  document.getElementById("menu").classList.toggle("hidden");
}

function changeBurger(src) {
  document.getElementById("mainBurger").src = src;
}

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("header");
  if (window.scrollY > 10) {
    navbar.style.backgroundColor = "black";
  } else {
    navbar.style.backgroundColor = "rgb(0,0,0,0.60)";
  }
});
