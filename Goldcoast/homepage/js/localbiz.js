const myRequest = new Request("./localcompany.json");

fetch(myRequest)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
  });
