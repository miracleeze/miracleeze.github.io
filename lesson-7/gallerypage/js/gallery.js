let date = new Date();
let currentYear = date.getFullYear();
document.querySelector(`#currentYear`).textContent = currentYear;

let modifiedTime = document.lastModified;
document.querySelector(`#modifiedTime`).textContent = modifiedTime;

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}
//preston page - adds pancake reminder on fridays
let banner = document.querySelector(".banner");
document.addEventListener("DOMContentLoaded", () => {
  if (date.getDay() == 1) banner.style.display = "block";
});
