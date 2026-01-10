import { slideBuilder } from "taleem-slides";
import { loadDeck } from "./loadDeck.js";

const root = document.getElementById("app");

let manager;
let currentIndex = 0;
let totalSlides = 0;

let bgEl;
let slideEl;

function renderBackground(bg) {
  bgEl.style.backgroundColor = bg?.backgroundColor || "#000";
  bgEl.style.backgroundImage = bg?.backgroundImage
    ? `url(${bg.backgroundImage})`
    : "none";
  bgEl.style.opacity =
    bg?.backgroundImageOpacity !== undefined
      ? bg.backgroundImageOpacity
      : 1;
}

function renderSlide() {
  slideEl.innerHTML = manager.renderSlide(currentIndex);
}

async function init() {
  const deck = await loadDeck("/decks/demo-gold.json");

  // apply theme AFTER deck is loaded
  applyTheme(deck.theme || "light");

  // build static DOM structure ONCE
  root.innerHTML = `
    <div id="deck-bg"></div>
    <div id="deck-slide"></div>
  `;

  bgEl = document.getElementById("deck-bg");
  slideEl = document.getElementById("deck-slide");

  manager = slideBuilder(deck);
  totalSlides = deck.deck.length;

  renderBackground(deck.background);
  renderSlide();

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && currentIndex < totalSlides - 1) {
      currentIndex++;
      renderSlide();
    }
    if (e.key === "ArrowLeft" && currentIndex > 0) {
      currentIndex--;
      renderSlide();
    }
  });
}

/* ✅ ONLY ONE init() CALL */
init().catch((err) => {
  console.error(err);
  root.innerHTML = `<pre style="color:red">${err.message}</pre>`;
});

function applyTheme(themeName) {
  // temporary hardcoded theme registry
  const themes = {
    dark: {
      backgroundColor: "#0e0f14",
      primaryColor: "#eaeaf0"
    },
    light: {
      backgroundColor: "#ffffff",
      primaryColor: "#111111"
    }
  };

  const theme = themes[themeName];
  if (!theme) return;

  const rootStyle = document.documentElement.style;

  rootStyle.setProperty("--backgroundColor", theme.backgroundColor);
  rootStyle.setProperty("--primaryColor", theme.primaryColor);
}
