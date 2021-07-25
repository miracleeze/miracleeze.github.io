const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=2306104&units=imperial&appid=0593f7b309cca030415d0a1f06616c33";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById("description").textContent =
      jsObject.weather[0].main;
    document.querySelector(".temp").textContent = jsObject.main.temp;
    document.querySelector(".humidity").textContent = jsObject.main.humidity;
  });

const apiForecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=2306104&units=imperial&appid=0593f7b309cca030415d0a1f06616c33";

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
        let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

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
        foreTemp.innerHTML = forecast.list[i].main.temp_max + "&deg;F";
        dayBox.appendChild(foreTemp);
        document.querySelector(".forecast").appendChild(dayBox);
      }
    }
  });
