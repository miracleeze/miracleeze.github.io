let storedDate = new Date(localStorage.getItem("storedDate"));

const oneDay = 1000 * 60 * 60 * 24;

let diffInTime = d.getTime() - storedDate.getTime();

let diffInDays = Math.round(diffInTime / oneDay);

if ("storedDate" in localStorage) {
  document.querySelector(".lastseen").innerHTML = diffInDays + " days ago.";
} else {
  document.querySelector(".lastseen").innerHTML = "This is your first visit!";
}

storeDate();

function storeDate() {
  localStorage.setItem("storedDate", d);
}
