const day = d.getDay();
const banner = document.querySelector(".banner");
if (day == 5) {
  banner.style.display = "block";
} else {
  banner.style.display = "none";
}
