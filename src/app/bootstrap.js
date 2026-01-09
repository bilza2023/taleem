// import { slideBuilder } from "../../node_modules/taleem-slides/src/index.js";
import { slideBuilder } from "taleem-slides";

import { loadDeck } from "./loadDeck.js";

const root = document.getElementById("app");

let manager;
let currentIndex = 0;

function render() {
  root.innerHTML = manager.renderSlide(currentIndex);
}

async function init() {
  const deck = await loadDeck("/decks/goldstandar_eq_28aug25.json");

  // 🔒 interpret ONCE
  manager = slideBuilder(deck);

  render();

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      currentIndex++;
      render();
    }

    if (e.key === "ArrowLeft" && currentIndex > 0) {
      currentIndex--;
      render();
    }
  });
}

init().catch(err => {
  console.error(err);
  root.innerHTML = `<pre style="color:red">${err.message}</pre>`;
});
