///// Weather API for Preston ///////
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?lat=42.6544&lon=-111.6047&units=imperial&appid=3b8b61faf7fc9a18cc6acd753d197fcd";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById("description").textContent =
      jsObject.weather[0].main;

    document.querySelector(".temp").textContent = Math.round(
      jsObject.main.temp
    );
    document.querySelector(".windchill").textContent = jsObject.main.temp.speed;
    document.querySelector(".humidity").textContent = jsObject.main.humidity;
    document.querySelector(".windspeed").textContent = jsObject.wind.speed;
  });

const apiForecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=42.6544&lon=-111.6047&units=imperial&appid=3b8b61faf7fc9a18cc6acd753d197fcd";

fetch(apiForecastURL)
  .then((response) => response.json())
  .then((forecast) => {
    console.log(forecast);

    for (let i in forecast.list) {
      if (forecast.list[i].dt_txt.includes("18:00:00")) {
        let dayBox = document.createElement("div");
        dayBox.setAttribute("class", "day-box");

        let weekDay = document.createElement("div");
        weekDay.setAttribute("class", "week-day");
        let dayOfWeek = new Date(forecast.list[i].dt_txt);
        let dayNum = dayOfWeek.getDay();
        let weekdays = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        weekDay.textContent = weekdays[dayNum];
        dayBox.appendChild(weekDay);

        let forecastIcon = document.createElement("img");
        const imagesrc =
          "https://openweathermap.org/img/w/" +
          forecast.list[i].weather[0].icon +
          ".png"; // note the concatenation
        const desc = forecast.list[i].weather.description; // note how we reference the weather array
        forecastIcon.setAttribute("class", "weather-icon");
        forecastIcon.setAttribute("src", imagesrc); // focus on the setAttribute() method
        forecastIcon.setAttribute("alt", desc);

        dayBox.appendChild(forecastIcon);

        let foreTemp = document.createElement("p");
        foreTemp.setAttribute("class", "fore-temp");
        foreTemp.innerHTML =
          forecast.list[i].main.temp_max.toFixed(0) + "&deg;F";
        dayBox.appendChild(foreTemp);
        document.querySelector(".forecast").appendChild(dayBox);
      }
    }
  });
