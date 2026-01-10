
import { createTaleemBrowser } from "taleem-browser";

const deck = await fetch("/decks/demo-gold.json").then(r => r.json());

const browser = createTaleemBrowser({
  mount: "#app",
  deck
});

// simple click / keyboard demo
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") browser.next();
  if (e.key === "ArrowLeft") browser.prev();
});
