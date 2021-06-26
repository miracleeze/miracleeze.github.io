///// Weather API for Preston ///////
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=3b8b61faf7fc9a18cc6acd753d197fcd";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById("description").textContent =
      jsObject.weather[0].main;
    document.querySelector(".temp").textContent = jsObject.main.temp;
    document.querySelector(".windchill").textContent = jsObject.main.temp.speed;
    document.querySelector(".humidity").textContent = jsObject.main.humidity;
    document.querySelector(".windspeed").textContent = jsObject.wind.speed;
  });
