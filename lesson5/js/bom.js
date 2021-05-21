const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul.list");
button.addEventListener("click", () => {
  let item = input.value;
  input.value = "";
  const listItem = document.createElement("li");
  const sometext = document.createElement("span");
  const deletebutton = document.createElement("button");
  listItem.appendChild(sometext);
  sometext.textContent = item;
  listItem.appendChild(deletebutton);
  deletebutton.textContent = "❌";
  list.appendChild(listItem);
  deletebutton.onclick = function (e) {
    list.removeChild(listItem);
  };
  input.focus();
});
