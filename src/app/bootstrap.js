import { slideBuilder } from "taleem-slides";
import { loadDeck } from "./loadDeck.js";

const root = document.getElementById("app");

let manager;
let currentIndex = 0;
let totalSlides = 0;

function render() {
  root.innerHTML = manager.renderSlide(currentIndex);
}

async function init() {
  const deck = await loadDeck("/decks/demo-gold.json");

  // interpret ONCE
  manager = slideBuilder(deck);
  totalSlides = deck.deck.length;

  render();

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
        render();
      }
    }

    if (e.key === "ArrowLeft") {
      if (currentIndex > 0) {
        currentIndex--;
        render();
      }
    }
  });
}

init().catch((err) => {
  console.error(err);
  root.innerHTML = `<pre style="color:red">${err.message}</pre>`;
});
