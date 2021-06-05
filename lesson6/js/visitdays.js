function getNumberOfDays(storeDate) {
  const date1 = new Date(localStorage.getItem("date1"));
  const date2 = new Date(localStorage.getItem("date2"));
  const oneDay = 1000 * 60 * 60 * 24;

  const diffInTime = date2.getTime() - date1.getTime();

  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}
if ("date1" in localStorage) {
  document.querySelector(".lastvisit").innerHTML = " days ago.";
} else {
  document.querySelector(".lastvisit").innerHTML = "This is your first seen!";
}

getNumberOfDays();

localStorage.setItem("date1", "date2");
