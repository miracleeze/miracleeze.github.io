let thedate = new Date();
if (thedate.getDay() == 5) {
  document.querySelector(".banner").style.display = "block";
} else {
  document.querySelector(".banner").style.display = "none";
}
