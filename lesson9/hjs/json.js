const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];

    for (let i = 0; i < towns.length; i++) {
      if (
        towns[i].name == "Preston" ||
        towns[i].name == "Soda Springs" ||
        towns[i].name == "Fish Haven"
      ) {
        let card = document.createElement("section");
        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "town-details");
        let h2 = document.createElement("h2");
        let motto = document.createElement("h3");
        let yearFounded = document.createElement("p");
        let population = document.createElement("p");
        let rainfall = document.createElement("p");
        let image = document.createElement("img");

        h2.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        yearFounded.textContent = "Year Founded:" + towns[i].yearFounded;
        population.textContent = "Population: " + towns[i].currentPopulation;
        rainfall.textContent = "Average Rainfall:" + towns[i].averageRainfall;

        if (towns[i].name == "Soda Springs") {
          image.setAttribute("src", "../lesson9/Images/soda-spring.jpg");
          image.setAttribute("alt", "Image of " + towns[i].name);
          card.setAttribute("id", "sodaspring-card");
        }
        if (towns[i].name == "Fish Haven") {
          image.setAttribute("src", "../lesson9/Images/fish-haven.jpg");
          image.setAttribute("alt", "Image of " + towns[i].name);
          card.setAttribute("id", "fishhaven-card");
        }
        if (towns[i].name == "Preston") {
          image.setAttribute("src", "../lesson9/Images/preston-rainbow.jpg");
          image.setAttribute("alt", "Image of " + towns[i].name);
          card.setAttribute("id", "prestonrainbow-card");
        }
        cardDiv.appendChild(h2);
        cardDiv.appendChild(motto);
        cardDiv.appendChild(yearFounded);
        cardDiv.appendChild(population);
        cardDiv.appendChild(rainfall);
        card.appendChild(cardDiv);
        card.appendChild(image);

        document.querySelector("div.homecards").appendChild(card);
      }
    }
  });
