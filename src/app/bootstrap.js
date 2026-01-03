import { renderTemplates } from "../renderer-web/templates/index.js";
import { loadDeck } from "./loadDeck.js";

const root = document.getElementById("app");

(async () => {
  const deck = await loadDeck("/decks/goldstandar_eq_28aug25.json");

  deck.deck.forEach((slide, index) => {
    const render = renderTemplates[slide.type];

    if (!render) {
      root.innerHTML += `
        <pre style="color:red">
Missing renderer for slide type: ${slide.type}
        </pre>
      `;
      return;
    }

    const html = render(slide);
    const wrapper = document.createElement("div");
    wrapper.className = "static-preview-slide";
    wrapper.innerHTML = html;

    root.appendChild(wrapper);
  });
})();
