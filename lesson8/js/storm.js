function adjustingRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}
function selectResponse() {
  let s = document.querySelector("#selected");
  let sel = document.querySelector("#selectbrowser");
  s.style.display = "block";
  s.textContent = sel.value;
}
