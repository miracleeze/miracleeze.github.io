const myRequest = new Request("./directory.json");

fetch(myRequest)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const companies = jsonObject["companies"];

    for (let i = 0; i < companies.length; i++) {
      let image = document.createElement("img");
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let mobile = document.createElement("p");
      let website = document.createElement("p");

      h2.textContent = companies[i].name + " ";
      mobile.textContent = "Mobile Phone: " + companies[i].mobile;
      website.textContent = "Website: " + companies[i].website;
      image.setAttribute("src", companies[i].imageurl);
      image.setAttribute("alt", companies[i].name + " " + (i + 1));

      card.append(image);
      card.appendChild(h2);
      card.append(mobile);
      card.append(website);

      document.querySelector("div.grid").appendChild(card);
    }
  });
