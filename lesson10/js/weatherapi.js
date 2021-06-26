const apijsObjectURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=3b8b61faf7fc9a18cc6acd753d197fcd";
fetch(apijsObjectURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    for (let i in jsObject.weather) {
      let jsObject = document.createElement("imagesrc");
      const imagesrc =
        "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png"; // note the concatenation
      const desc = jsObject.weather[0].description; // note how we reference the weather array
      document.getElementById("imagesrc").textContent = imagesrc; // informational specification only
      document.getElementById("icon").setAttribute("src", imagesrc); // focus on the setAttribute() method
      document.getElementById("icon").setAttribute("alt", desc);

      document.getElementById("current-temp").textContent =
        jsObject.weather[0].main.temp;
    }
  });
