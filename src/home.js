import imgPath from "./logo.jpg";
export const loadHomePage = function () {
  const content = document.getElementById("content");
  const logo = document.createElement("img");
  const headline = document.createElement("h1");
  const description = document.createElement("p");
  content.textContent = "";
  description.textContent =
    "Enjoy a pure vegetarian dining experience at Khurana Restaurant. Discover delicious, healthy, and 100% plant-based meals crafted with fresh ingredients";

  headline.textContent = "Pure Vegetarian Restaurant";
  logo.setAttribute("src", imgPath);
  content.appendChild(logo);

  content.appendChild(headline);
  content.appendChild(description);
};
