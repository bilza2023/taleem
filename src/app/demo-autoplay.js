import { createTaleemBrowser } from "taleem-browser";

const deck = await fetch("/decks/demo-gold.json").then(r => r.json());

const browser = createTaleemBrowser({
  mount: "#app",
  deck
});

// ---- autoplay logic ----
const INTERVAL_SECONDS = 5;

setInterval(() => {
  browser.next();
}, INTERVAL_SECONDS * 1000);
