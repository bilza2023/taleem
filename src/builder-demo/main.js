import { createTaleemBrowser } from "https://unpkg.com/taleem-player@latest/dist/taleem-player.esm.js";
import buildDemoDeck from "./taleem-builder-demo.js";

const deck = buildDemoDeck();

const browser = createTaleemBrowser({
  mount: "#app",
  deck
});

browser.render(0);

const slider = document.getElementById("slider");
slider.min = 0;
slider.max = deck.deck.length - 1;
slider.value = 0;

slider.addEventListener("input", e => {
  browser.render(Number(e.target.value));
});
