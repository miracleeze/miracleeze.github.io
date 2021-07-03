let temp = document.querySelector(".temp").innerHTML;
let speed = document.querySelector(".windspeed").innerHTML;
if (temp <= 64 && speed > 4) {
  let result = windchill(temp, speed);
  document.querySelector(".windchill").innerHTML = result.toFixed(0) + "℉";
} else {
  document.querySelector(".windspeed").innerHTML = "N/A";
}
function windchill(temp, speed) {
  let f =
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * temp * Math.pow(speed, 0.16);
  return f;
}
