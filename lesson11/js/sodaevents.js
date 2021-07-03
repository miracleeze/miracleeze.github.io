let soda = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(soda)
  .then((response) => response.json())
  .then((soda) => {
    console.table(soda);
    let towns = soda["towns"];
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Soda Springs") {
        let sodaEvents = document.createElement("div");
        let sodaEvent1 = document.createElement("p");
        let sodaEvent2 = document.createElement("p");
        let sodaEvent3 = document.createElement("p");

        sodaEvent1.textContent = towns[i].events[0];
        sodaEvent2.textContent = towns[i].events[1];
        sodaEvent3.textContent = towns[i].events[2];

        sodaEvents.appendChild(sodaEvent1);
        sodaEvents.appendChild(sodaEvent2);
        sodaEvents.appendChild(sodaEvent3);

        document.querySelector("#sodaevents").appendChild(sodaEvents);
      }
    }
  });
