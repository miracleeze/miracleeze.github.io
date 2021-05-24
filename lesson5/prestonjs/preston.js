let date = new Date();
let currentYear = date.getFullYear();
document.querySelector(`#currentYear`).textContent = currentYear;

let modifiedTime = document.lastModified;
document.querySelector(`#modifiedTime`).textContent = modifiedTime;

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}
//preston page - adds pancake reminder on fridays
if (currntDate.getDay() == 5) {
  banner = document.querySelector(".banner").style.display = "block";
}
