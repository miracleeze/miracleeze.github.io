const apiURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=3b8b61faf7fc9a18cc6acd753d197fcd";
fetch(apiURL)
  .then((response) => response.json())
  .then((forecast) => {
    console.log(forecast);
    document.getElementById("current-temp").textContent = Math.round(
      forecast.list[0].main.temp
    );

    for (let i in forecast.list) {
      let weatherIcon = document.createElement("img");
      const imagesrc =
        "https://openweathermap.org/img/w/" +
        forecast.list[i].weather[0].icon +
        ".png"; // note the concatenation
      const desc = forecast.list[i].weather.description; // note how we reference the weather array

      document.getElementById("imagesrc").textContent = imagesrc; // informational specification only
      document.getElementById("icon").setAttribute("src", imagesrc); // focus on the setAttribute() method
      document.getElementById("icon").setAttribute("alt", desc);
    }
  });
