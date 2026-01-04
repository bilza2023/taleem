// import { slideBuilder } from "../slides/index.js";
import { slideBuilder } from "taleem-slides";
import { loadDeck } from "./loadDeck.js";

const root = document.getElementById("app");

let slides = [];
let index = 0;

function showSlide(i) {
  const slide = slides[i];
  root.innerHTML = slide.render(); // ← HTML STRING
}

(async () => {
  const deck = await loadDeck("/decks/goldstandar_eq_28aug25.json");

  // interpret once
  slides = slideBuilder(deck);

  showSlide(index);

  document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight" && index < slides.length - 1) {
      index++;
      showSlide(index);
    }
    if (e.key === "ArrowLeft" && index > 0) {
      index--;
      showSlide(index);
    }
  });
})();
