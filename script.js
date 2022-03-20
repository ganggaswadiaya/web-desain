const toggleMenu = document.getElementsByClassName("toggle-menu")[0];
const link = dokumnet.getElementsByClassName("link")[0];

toggleMenu.addEventListener("click", () => {
  link.classList.toggle("active");
});
