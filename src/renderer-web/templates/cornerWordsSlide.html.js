// src/renderer-web/templates/cornerWordsSlide.html.js
export function renderCornerWordsSlide({ data }) {
    if (!Array.isArray(data)) return "";
  
    const cards = data.filter(d => d.name === "card");
  
    return `
      <div class="slide corner-words-slide">
        ${cards
          .map(
            c => `
          <div class="corner-card">
            <div class="icon">${c.icon}</div>
            <div class="label">${c.label}</div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }
  