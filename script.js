const nav = document.getElementById("nav");
const openMenuBtn = nav.querySelector(".open-menu-btn");
const closeMenuBtn = nav.querySelector(".close-menu-btn");
openMenuBtn.addEventListener("click", () => nav.classList.add("open"));
closeMenuBtn.addEventListener("click", () => nav.classList.remove("open"));