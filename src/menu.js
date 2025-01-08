export const loadMenuPage = function () {
  const content = document.getElementById("content");
  const headline1 = document.createElement("h1");
  const menuItemsContainer = document.createElement("ul");
  const menuItem1 = document.createElement("li");
  const menuItem2 = document.createElement("li");
  const menuItem3 = document.createElement("li");
  const menuItem4 = document.createElement("li");
  menuItem1.textContent = "Honey Tea $2";
  menuItem2.textContent = "Beary Tea $3";
  menuItem3.textContent = "Toast And Jam $1";
  menuItem4.textContent = "Fresh Fruit $3";
  menuItemsContainer.classList.add("menuItemsContainer");

  content.textContent = "";
  headline1.textContent = "Menu";
  menuItemsContainer.appendChild(menuItem1);
  menuItemsContainer.appendChild(menuItem2);
  menuItemsContainer.appendChild(menuItem3);
  menuItemsContainer.appendChild(menuItem4);
  content.appendChild(headline1);
  content.appendChild(menuItemsContainer);
};
