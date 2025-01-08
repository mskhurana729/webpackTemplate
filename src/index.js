import { loadContactPage } from "./contact.js";
import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";

console.log("Hello");

const buttonEvents = (function () {
  loadHomePage();
  const menuBtnEvent = (function () {
    const menuBtn = document.querySelector(".menuBtn");
    menuBtn.addEventListener("click", (e) => {
      loadMenuPage();
    });
  })();
  const homeBtnEvent = (function () {
    const homeBtn = document.querySelector(".homeBtn");
    homeBtn.addEventListener("click", (e) => {
      loadHomePage();
    });
  })();
  const contactBtnEvent = (function () {
    const contactBtn = document.querySelector(".contactBtn");
    contactBtn.addEventListener("click", (e) => {
      loadContactPage();
    });
  })();
})();
