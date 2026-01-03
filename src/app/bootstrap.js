import { Player } from "../player/Player.js";
import { WebRenderer } from "../renderer-web/WebRenderer.js";
import { loadDeck } from "./loadDeck.js";

const root = document.getElementById("app");
const renderer = new WebRenderer(root);

(async () => {
  const deck = await loadDeck("/decks/demo_deck.json");
  const player = new Player(deck);

  let index = 0;

  function renderCurrent() {
    const frame = player.getFrameByIndex(index);
    renderer.render(frame);
  }

  // initial render
  renderCurrent();

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      index = Math.min(index + 1, player.slides.length - 1);
      renderCurrent();
    }

    if (e.key === "ArrowLeft") {
      index = Math.max(index - 1, 0);
      renderCurrent();
    }
  });
})();
