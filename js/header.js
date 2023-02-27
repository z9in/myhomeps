let navEl = document.getElementsByTagName("nav")[0];
let toggle = document.getElementById("nav_open");

toggle.addEventListener("click", () => {
  if (navEl.style.display == "flex") {
    navEl.style.display = "none";
  } else {
    navEl.style.display = "flex";
  }
});

